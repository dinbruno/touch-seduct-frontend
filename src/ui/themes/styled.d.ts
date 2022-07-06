import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryDark: string;
      secondaryDark: string;
      primary: string;
      secondary: string;
    };
    theme: {
      paragraph: string;
      font: string;
      neonShader: string;
      bg: string;
      shape: string;
      faq: string;
    };

    fonts?: {
      title: string;
      subTitle: string;
      paragraph: string;
      small: string;
      info: string;
    };
  }
}
