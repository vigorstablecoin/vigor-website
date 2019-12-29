// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
    colors: {
      bg: string,
      bgLight: string,
      bgLighter: string,
      bgLightest: string,
      white: string,
      primary: string,
      primaryLighter: string,
      secondary: string,
      tertiary: string,
      light: string,
      success: string,
      error: string,
      warning: string,
    }
  }
}
