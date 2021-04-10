export function pxToRem(size: number, fontSize = 14, htmlFontSize = 16, coef = 14): string {
  return `${(size / htmlFontSize) * (fontSize / coef)}rem`;
}