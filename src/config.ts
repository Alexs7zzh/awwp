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
  },
  background: {
    theme: "light" | "dark",
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
    verticalMargin: '2rem'
  },
  textBlock: {
    style: "hero"
  },
  background: {
    theme: "dark"
  }
};