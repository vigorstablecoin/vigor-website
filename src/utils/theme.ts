// TODO: get actual colors from https://github.com/vigorstablecoin/media/blob/master/readme-images/vigor-color-palette.jpg
const white = '#ffffff';
const bg = '#13161E';
const bgLight = '#1E212E';
const bgLighter = '#2F3347';
const bgLightest = '#50587A';

const primary = '#4468CC';
const secondary = '#6DE4F0';
const tertiary = '#009AFF';
const light = '#949EA8';

const success = '#4ECCAE';
const error = '#E14852';
const warning = '#F6D051';

const colors = {
  bg,
  bgLight,
  bgLighter,
  bgLightest,
  white,
  primary,
  secondary,
  tertiary,
  light,
  success,
  error,
  warning,
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const theme = {
  colors,
  breakpoints
};

export default theme;
