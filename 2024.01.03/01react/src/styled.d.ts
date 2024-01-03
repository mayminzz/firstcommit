import "styled-components";

//우리만의 타입 정의
declare module "styled-components" {
  export interface defaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
