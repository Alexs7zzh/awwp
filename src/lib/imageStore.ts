// src/lib/imageStore.ts
import type { ImageMetadata } from "astro";

export type WorkId = string;   // folder name under /works (original case)
export type ImageId = string;  // filename without extension
type Lower = string;

export interface ImageRecord {
  workId: WorkId;           // original case from folder
  id: ImageId;              // basename without extension
  ext: "png" | "jpg" | "jpeg" | "webp";
  path: string;             // absolute Vite path, e.g. "/works/momentMAT/momentMAT_02.jpg"
  relFull: string;          // "momentMAT/momentMAT_02.jpg"
  relNoExt: string;         // "momentMAT/momentMAT_02"
  metadata: ImageMetadata;  // feed to <Picture src={...} />
}

export interface ImageStoreOptions {
  /** If true, throw during build if the same basename appears in multiple places. Default: false. */
  enforceGlobalBasenameUniqueness?: boolean;
  /** Sorting used within each work; defaults to natural path sort. */
  sort?: (a: ImageRecord, b: ImageRecord) => number;
}

function defaultSort(a: ImageRecord, b: ImageRecord) {
  return a.relFull.localeCompare(b.relFull, undefined, { numeric: true, sensitivity: "base" });
}

function listSample(arr: string[], max = 8) {
  const shown = arr.slice(0, max);
  const tail = arr.length > max ? `, …(+${arr.length - max})` : "";
  return shown.join(", ") + tail;
}

function toLowerKey(s: string): Lower {
  return s.toLowerCase();
}

const EXT_RE = /\.(png|jpe?g|webp)$/i;

class ImageStore {
  // ---- indexes (all keys are lowercase) ----
  private byWork: Map<Lower, ImageRecord[]> = new Map();        // work → sorted records
  private byFull: Map<Lower, ImageRecord> = new Map();          // "momentmat/m2.jpg"
  private byNoExt: Map<Lower, ImageRecord> = new Map();         // "momentmat/m2"
  private byBasename: Map<Lower, ImageRecord[]> = new Map();    // "m2" → many
  private byCompound: Map<Lower, ImageRecord[]> = new Map();    // "momentmat:m2" → 1..N (nested allowed)

  private workNamesOriginalCase: Map<Lower, WorkId> = new Map();
  private options: Required<ImageStoreOptions>;

  constructor(opts?: ImageStoreOptions) {
    this.options = {
      enforceGlobalBasenameUniqueness: opts?.enforceGlobalBasenameUniqueness ?? false,
      sort: opts?.sort ?? defaultSort,
    };
    this.build();
  }

  private build() {
    const mods = import.meta.glob<{ default: ImageMetadata }>(
      "/works/**/*.{png,jpg,jpeg,webp}",
      { eager: true }
    );

    for (const [absPath, mod] of Object.entries(mods)) {
      // Expect "/works/<work>/.../<file.ext>"
      const after = absPath.split("/works/")[1];
      if (!after) continue;

      const segs = after.split("/");
      if (segs.length < 2) continue;

      const workId = segs[0]; // preserve original case
      const file = segs[segs.length - 1];
      const m = file.match(/^(.*)\.(png|jpe?g|webp)$/i);
      if (!m) continue;

      const id = m[1];
      const ext = m[2].toLowerCase() as ImageRecord["ext"];
      const relFull = after;                  // "work/sub/file.ext"
      const relNoExt = relFull.replace(EXT_RE, "");

      const rec: ImageRecord = {
        workId,
        id,
        ext,
        path: absPath,
        relFull,
        relNoExt,
        metadata: mod.default,
      };

      const workKey = toLowerKey(workId);
      const relFullKey = toLowerKey(relFull);
      const relNoExtKey = toLowerKey(relNoExt);
      const baseKey = toLowerKey(id);
      const compoundKey = `${workKey}:${baseKey}`;

      // work map
      const list = this.byWork.get(workKey) ?? [];
      list.push(rec);
      this.byWork.set(workKey, list);
      this.workNamesOriginalCase.set(workKey, workId);

      // path maps
      this.byFull.set(relFullKey, rec);
      this.byNoExt.set(relNoExtKey, rec);

      // basename maps
      const b = this.byBasename.get(baseKey) ?? [];
      b.push(rec);
      this.byBasename.set(baseKey, b);

      const c = this.byCompound.get(compoundKey) ?? [];
      c.push(rec);
      this.byCompound.set(compoundKey, c);
    }

    // sort within each work
    for (const [wk, arr] of this.byWork.entries()) {
      arr.sort(this.options.sort);
      this.byWork.set(wk, arr);
    }

    // optional global basename uniqueness enforcement
    if (this.options.enforceGlobalBasenameUniqueness) {
      const dupes: string[] = [];
      for (const [base, arr] of this.byBasename.entries()) {
        if (arr.length > 1) {
          dupes.push(
            `${arr[0].id} → ${arr.map(r => r.relFull).join(", ")}`
          );
        }
      }
      if (dupes.length) {
        throw new Error(
          "[ImageStore] Duplicate basenames detected:\n" +
          dupes.map(d => ` - ${d}`).join("\n")
        );
      }
    }
  }

  // ---------- public (throwing) API ----------

  /**
   * Resolve an image by:
   *   - relative path (with or without extension), e.g. "momentMAT/momentMAT_02" or "/works/momentMAT/momentMAT_02.jpg"
   *   - compound "workId:imageId"
   *   - basename only (must be unique)
   */
  require(ref: string): ImageRecord {
    const s = ref.trim();

    // 1) If it looks like a path (has a slash), treat it as relative to /works
    if (s.includes("/")) {
      return this.requireByPath(s);
    }

    // 2) If it's compound "work:id"
    if (s.includes(":")) {
      const [work, base] = s.split(":");
      const key = `${toLowerKey(work)}:${toLowerKey(base)}`;
      const arr = this.byCompound.get(key);
      if (!arr || arr.length === 0) {
        const known = this.listWorkIds();
        throw new Error(
          `[ImageStore] Image "${s}" not found. Known works: ${listSample(known)}`
        );
      }
      if (arr.length > 1) {
        throw new Error(
          `[ImageStore] Ambiguous "${s}" (multiple matches): ${arr.map(r => r.relFull).join(", ")}.\n` +
          `Use a relative path like "${arr[0].relNoExt}".`
        );
      }
      return arr[0];
    }

    // 3) Basename only
    const baseKey = toLowerKey(s);
    const arr = this.byBasename.get(baseKey);
    if (!arr || arr.length === 0) {
      throw new Error(
        `[ImageStore] Image basename "${s}" not found.\n` +
        `Tip: reference by path, e.g. "workFolder/${s}".`
      );
    }
    if (arr.length > 1) {
      throw new Error(
        `[ImageStore] Ambiguous basename "${s}" in: ${arr.map(r => r.relFull).join(", ")}.\n` +
        `Use "work:${s}" or "${arr[0].relNoExt}".`
      );
    }
    return arr[0];
  }

  /** Resolve by path; accepts with/without "/works" prefix and with/without extension (case-insensitive). */
  requireByPath(pathLike: string): ImageRecord {
    const cleaned = pathLike.replace(/^[./]*/g, ""); // trim leading "./" or "/"
    const noPrefix = cleaned.replace(/^works\//i, ""); // drop "works/" if present
    const lower = toLowerKey(noPrefix);
    // try exact file first
    const byFull = this.byFull.get(lower);
    if (byFull) return byFull;
    // then try no-ext
    const noExt = lower.replace(EXT_RE, "");
    const byNoExt = this.byNoExt.get(noExt);
    if (byNoExt) return byNoExt;

    // Not found → craft a helpful message
    const segs = noPrefix.split("/");
    const maybeWork = segs[0]?.toLowerCase();
    const candidates =
      maybeWork && this.byWork.has(maybeWork)
        ? this.byWork.get(maybeWork)!.map(r => r.relFull)
        : this.getAll().map(r => r.relFull);

    throw new Error(
      `[ImageStore] Path "${pathLike}" not found.\n` +
      (maybeWork && this.byWork.has(maybeWork)
        ? `Known under "${this.workNamesOriginalCase.get(maybeWork)}": ${listSample(candidates)}`
        : `Known works: ${listSample(this.listWorkIds())}`)
    );
  }

  /** Returns ImageMetadata; throws on error. */
  requireImage(ref: string): ImageMetadata {
    return this.require(ref).metadata;
  }

  /** All images for a given work (sorted). `workId` is case-insensitive. */
  requireByWork(workId: WorkId): ImageRecord[] {
    const key = toLowerKey(workId);
    const list = this.byWork.get(key);
    if (!list || list.length === 0) {
      const known = this.listWorkIds();
      throw new Error(
        `[ImageStore] No images found for work "${workId}". Known works: ${listSample(known)}`
      );
    }
    return list;
  }

  requireImagesForWork(workId: WorkId): ImageMetadata[] {
    return this.requireByWork(workId).map(r => r.metadata);
  }

  // ---------- helpers ----------

  listWorkIds(): WorkId[] {
    // return original-case folder names
    return [...this.workNamesOriginalCase.values()].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  }

  getAll(): ImageRecord[] {
    return this.listWorkIds().flatMap(w => this.requireByWork(w));
  }
}

// Singleton (evaluated once during build/dev)
let _instance: ImageStore | undefined;

export function getImageStore(options?: ImageStoreOptions): ImageStore {
  if (!_instance) _instance = new ImageStore(options);
  return _instance;
}
export const imageStore = getImageStore();
export type { ImageStore };
