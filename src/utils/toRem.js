/**
 * Takes a number (pixels) returns a string (new rem value with units)
 */
export default function toRem(pixelValue) {
  return `${pixelValue / 14}rem`;
}
