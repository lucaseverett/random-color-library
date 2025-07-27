export function validateHex(color: string): boolean {
  const hexRegex = /^#?([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(color);
}
