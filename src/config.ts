interface ConfigType {
  header: {
    resize: boolean,
    line: boolean,
    background: 'transparent' | 'white' | 'blur'
  },
  description: {
    horizontalMargin: string,
    verticalMargin: string,
  },
  textBlock: {
    style: "wide" | "hero"
  }
};

export const Config : ConfigType = {
  header: {
    resize: false,
    line: false,
    background: 'transparent'
  },
  description: {
    horizontalMargin: '2rem',
    verticalMargin: '4rem'
  },
  textBlock: {
    style: "hero"
  }
};