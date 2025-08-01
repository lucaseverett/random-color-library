import { relativeLuminance } from "./relativeLuminance.js";

type RGBObject = { r: number; g: number; b: number };
type RGBTuple = [number, number, number];
type ColorInput = string | RGBObject | RGBTuple;

// Function overloads
export function contrastRatio(color1: string, color2: string): number;
export function contrastRatio(color1: RGBObject, color2: RGBObject): number;
export function contrastRatio(color1: RGBTuple, color2: RGBTuple): number;
export function contrastRatio(color1: ColorInput, color2: ColorInput): number;

export function contrastRatio(color1: ColorInput, color2: ColorInput): number {
  let l1: number, l2: number;

  // Calculate luminance for color1
  if (typeof color1 === "string") {
    l1 = relativeLuminance(color1);
  } else if (Array.isArray(color1)) {
    l1 = relativeLuminance(color1);
  } else {
    // color1 is RGBObject
    l1 = relativeLuminance(color1 as RGBObject);
  }

  // Calculate luminance for color2
  if (typeof color2 === "string") {
    l2 = relativeLuminance(color2);
  } else if (Array.isArray(color2)) {
    l2 = relativeLuminance(color2);
  } else {
    // color2 is RGBObject
    l2 = relativeLuminance(color2 as RGBObject);
  }

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return Math.trunc(ratio * 100) / 100;
}
