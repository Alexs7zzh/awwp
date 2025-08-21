interface ConfigType {
  description: {
    horizontalMargin: string;
    verticalMargin: string;
  };
  detailPage: {
    theme: 1 | 2 | 3;
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
    theme: 3,
    column: 2,
  },
  topPage: {
    theme: 1,
  },
};
