interface ConfigType {
  header: {
    resize: boolean,
    line: boolean,
    background: 'transparent' | 'white' | 'blur'
  },
  text: {
    horizontalMargin: string,
    verticalMargin: string,
  }
};

export const Config : ConfigType = {
  header: {
    resize: true,
    line: false,
    background: 'blur'
  },
  text: {
    horizontalMargin: '2rem',
    verticalMargin: '4rem'
  }
};