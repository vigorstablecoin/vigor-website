import theme from './theme';

type SIZE_TYPES = 'xs' | 'xs-max' | 'sm' | 'sm-max' | 'md' | 'md-max' | 'lg' | 'lg-max' | 'xl';

const sizes = {
    xs: `${theme.breakpoints.xs}px`,
    'xs-max': `${theme.breakpoints.sm - 1}px`,
    sm: `${theme.breakpoints.sm}px`,
    'sm-max': `${theme.breakpoints.md - 1}px`,
    md: `${theme.breakpoints.md}px`,
    'md-max': `${theme.breakpoints.lg - 1}px`,
    lg: `${theme.breakpoints.lg}px`,
    'lg-max': `${theme.breakpoints.xl - 1}px`,
    xl: `${theme.breakpoints.xl}px`,
};

const lessThan = (sizeName: SIZE_TYPES) => `@media (max-width: ${sizes[sizeName]})`;

const between = (sizeName1: SIZE_TYPES, sizeName2: SIZE_TYPES) =>
    `@media (min-width: ${sizes[sizeName1]}) and (max-width: ${sizes[sizeName2]})`;

const greaterThan = (sizeName: SIZE_TYPES) => `@media (min-width: ${sizes[sizeName]})`;

export const media = {
    xs: lessThan(`xs-max`),
    sm: between(`sm`, `sm-max`),
    md: between(`md`, `md-max`),
    lg: between(`lg`, `lg-max`),
    xl: greaterThan(`xl`),

    lessThan: lessThan,
    between: between,
    greaterThan: greaterThan,
};
