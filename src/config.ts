interface ConfigType {
  header: {
    resize: boolean;
    line: boolean;
    background: "transparent" | "white" | "blur";
  };
  description: {
    horizontalMargin: string;
    verticalMargin: string;
  };
  textBlock: {
    style: "wide" | "hero";
  };
  background: {
    theme: "light" | "dark";
  };
  detailPage: {
    theme: 1 | 2 | 3;
    column: number;
  };
  topPage: {
    theme: 1 | 2
  };
}

export const Config: ConfigType = {
  header: {
    resize: false,
    line: false,
    background: "transparent",
  },
  description: {
    horizontalMargin: "2rem",
    verticalMargin: "2rem",
  },
  textBlock: {
    style: "hero",
  },
  background: {
    theme: "dark",
  },
  detailPage: {
    theme: 3,
    column: 2,
  },
  topPage: {
    theme: 1
  }
};
