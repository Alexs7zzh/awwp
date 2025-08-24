interface ConfigType {
  description: {
    horizontalMargin: string;
    verticalMargin: string;
  };
  detailPage: {
    column: number;
  };
  topPage: {
    theme: 1 | 2;
  };
}

export const Config: ConfigType = {
  description: {
    horizontalMargin: "2rem",
    verticalMargin: "2rem",
  },
  detailPage: {
    column: 2,
  },
  topPage: {
    theme: 1,
  },
};
