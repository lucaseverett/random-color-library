import { validateHex } from "./validateHex.js";

export function addOpacity(hex: string, opacity: number): string {
  if (!validateHex(hex)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  if (
    typeof opacity !== "number" ||
    opacity < 0 ||
    opacity > 1 ||
    Number.isNaN(opacity) ||
    !Number.isFinite(opacity)
  ) {
    throw new Error(
      `Opacity must be a number between 0 and 1, got: ${opacity}`,
    );
  }

  const normalizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

  let fullHex: string;
  if (normalizedHex.length === 3) {
    fullHex = normalizedHex
      .split("")
      .map((char) => char + char)
      .join("");
  } else {
    fullHex = normalizedHex;
  }

  const alphaValue = Math.round(opacity * 255);
  const alphaHex = alphaValue.toString(16).padStart(2, "0");

  return `#${fullHex.toLowerCase()}${alphaHex}`;
}
