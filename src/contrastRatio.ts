import { relativeLuminance } from "./relativeLuminance.js";
import { validateHex } from "./validateHex.js";

export function contrastRatio(color1: string, color2: string): number {
  if (!validateHex(color1)) {
    throw new Error(`Invalid hex color: ${color1}`);
  }

  if (!validateHex(color2)) {
    throw new Error(`Invalid hex color: ${color2}`);
  }

  const l1 = relativeLuminance(color1);
  const l2 = relativeLuminance(color2);

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return Math.trunc(ratio * 100) / 100;
}
