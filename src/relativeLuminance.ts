import { validateHex } from "./validateHex.js";

export function relativeLuminance(hex: string): number {
  // Validate hex string
  if (!validateHex(hex)) {
    throw new Error("Invalid hex color string");
  }

  // Remove # if present
  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

  let r: number, g: number, b: number;

  if (cleanHex.length === 3) {
    // 3-character hex (e.g., "f00" -> "ff0000")
    r = parseInt(cleanHex.charAt(0) + cleanHex.charAt(0), 16);
    g = parseInt(cleanHex.charAt(1) + cleanHex.charAt(1), 16);
    b = parseInt(cleanHex.charAt(2) + cleanHex.charAt(2), 16);
  } else {
    // 6-character hex (e.g., "ff0000")
    r = parseInt(cleanHex.slice(0, 2), 16);
    g = parseInt(cleanHex.slice(2, 4), 16);
    b = parseInt(cleanHex.slice(4, 6), 16);
  }

  // Convert to sRGB values (0-1 range)
  const RsRGB = r / 255;
  const GsRGB = g / 255;
  const BsRGB = b / 255;

  // Apply gamma correction
  const R =
    RsRGB <= 0.04045 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
  const G =
    GsRGB <= 0.04045 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
  const B =
    BsRGB <= 0.04045 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

  // Calculate relative luminance using WCAG formula
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
