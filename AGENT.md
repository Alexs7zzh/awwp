# AGENT.md - Coding Guidelines for awwp

## Commands
- **Dev server**: `pnpm dev` (Astro development)
- **Build**: `pnpm build`
- **Format**: `pnpm format` (Prettier with astro plugin)
- **Type check**: `pnpm astro check`

## Code Style
- **Project**: Astro + TypeScript with MDX
- **Imports**: Use path aliases `@components/*` and `@layouts/*`
- **Types**: TypeScript interfaces in frontmatter, strict mode enabled
- **Props**: Define `interface Props` for component props, destructure with defaults
- **Error handling**: Use `console.warn()` for missing data, early returns with null
- **Naming**: PascalCase for components, camelCase for variables/props
- **Collections**: Use `getEntry()` and `CollectionEntry<'work'>` types
- **Assets**: Use Astro's `Picture` component for images
- **Structure**: Frontmatter first, then HTML template, then styles
- **Formatting**: Prettier with astro plugin (no quotes around simple props)

## Project Structure  
- `src/pages/` - Astro pages and MDX files
- `src/components/` - Reusable Astro components  
- `src/layouts/` - Layout components
- `src/content/` - Content collections
