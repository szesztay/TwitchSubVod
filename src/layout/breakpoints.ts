type Sizes = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

const sizes: Sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const breakpoints = {
  down: (size: keyof Sizes) => `@media (max-width: ${sizes[size]}px)`,
  up: (size: keyof Sizes) => `@media (min-width: ${sizes[size]}px)`,
}
