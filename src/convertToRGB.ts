import { validateHex } from "./validateHex.js";

type RGB = { r: number; g: number; b: number };

export function convertToRGB(hex: string): RGB {
  if (hex == null) {
    throw new Error("Hex color is required");
  }

  if (typeof hex !== "string") {
    throw new Error("Hex color must be a string");
  }

  if (!validateHex(hex)) {
    throw new Error("Invalid hex color");
  }

  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;
  const normalizedHex = cleanHex.toLowerCase();

  let r: number, g: number, b: number;

  if (normalizedHex.length === 3) {
    r = parseInt(normalizedHex[0]! + normalizedHex[0]!, 16);
    g = parseInt(normalizedHex[1]! + normalizedHex[1]!, 16);
    b = parseInt(normalizedHex[2]! + normalizedHex[2]!, 16);
  } else if (normalizedHex.length === 6) {
    r = parseInt(normalizedHex.slice(0, 2), 16);
    g = parseInt(normalizedHex.slice(2, 4), 16);
    b = parseInt(normalizedHex.slice(4, 6), 16);
  } else {
    throw new Error("Invalid hex color length");
  }

  return { r, g, b };
}
