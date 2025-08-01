import { validateHex } from "./validateHex.js";
import { validateRGB } from "./validateRGB.js";

type RGBObject = { r: number; g: number; b: number };
type RGBTuple = [number, number, number];

// Function overloads
export function relativeLuminance(hex: string): number;
export function relativeLuminance(rgb: RGBObject): number;
export function relativeLuminance(rgb: RGBTuple): number;
export function relativeLuminance(rgbString: string): number;
export function relativeLuminance(r: number, g: number, b: number): number;

export function relativeLuminance(
  input: string | RGBObject | RGBTuple | number,
  g?: number,
  b?: number,
): number {
  let r: number, gValue: number, bValue: number;

  // Case 1: Three separate parameters (r, g, b)
  if (
    arguments.length === 3 &&
    typeof input === "number" &&
    typeof g === "number" &&
    typeof b === "number"
  ) {
    if (!validateRGB(input, g, b)) {
      throw new Error("Invalid RGB values");
    }
    r = input;
    gValue = g;
    bValue = b;
  }
  // Case 2: Single parameter - could be hex, RGB object, RGB array, or RGB string
  else if (arguments.length === 1) {
    if (typeof input === "string") {
      // Try to parse as hex first
      if (validateHex(input)) {
        // Handle hex string
        const cleanHex = input.startsWith("#") ? input.slice(1) : input;

        if (cleanHex.length === 3) {
          // 3-character hex (e.g., "f00" -> "ff0000")
          r = parseInt(cleanHex.charAt(0) + cleanHex.charAt(0), 16);
          gValue = parseInt(cleanHex.charAt(1) + cleanHex.charAt(1), 16);
          bValue = parseInt(cleanHex.charAt(2) + cleanHex.charAt(2), 16);
        } else {
          // 6-character hex (e.g., "ff0000")
          r = parseInt(cleanHex.slice(0, 2), 16);
          gValue = parseInt(cleanHex.slice(2, 4), 16);
          bValue = parseInt(cleanHex.slice(4, 6), 16);
        }
      } else {
        // Try to parse as RGB string
        if (!validateRGB(input)) {
          throw new Error("Invalid color format");
        }

        const rgbValues = parseRGBString(input);
        r = rgbValues.r;
        gValue = rgbValues.g;
        bValue = rgbValues.b;
      }
    } else if (Array.isArray(input)) {
      // Handle RGB array
      if (!validateRGB(input)) {
        throw new Error("Invalid RGB array");
      }
      [r, gValue, bValue] = input;
    } else if (typeof input === "object" && input !== null) {
      // Handle RGB object
      if (!validateRGB(input)) {
        throw new Error("Invalid RGB object");
      }
      const rgbObj = input as RGBObject;
      r = rgbObj.r;
      gValue = rgbObj.g;
      bValue = rgbObj.b;
    } else {
      throw new Error("Invalid input type");
    }
  } else {
    throw new Error("Invalid number of arguments");
  }

  return calculateRelativeLuminanceFromRGB(r, gValue, bValue);
}

function parseRGBString(rgbString: string): RGBObject {
  const trimmed = rgbString.trim();

  // RGB function format: rgb(r, g, b) or RGB(r, g, b)
  const rgbFunctionMatch = trimmed.match(
    /^rgb\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i,
  );
  if (
    rgbFunctionMatch &&
    rgbFunctionMatch[1] &&
    rgbFunctionMatch[2] &&
    rgbFunctionMatch[3]
  ) {
    const [, r, g, b] = rgbFunctionMatch;
    return {
      r: parseInt(r, 10),
      g: parseInt(g, 10),
      b: parseInt(b, 10),
    };
  }

  // Comma-separated format: "r, g, b"
  const commaSeparatedMatch = trimmed.match(/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/);
  if (
    commaSeparatedMatch &&
    commaSeparatedMatch[1] &&
    commaSeparatedMatch[2] &&
    commaSeparatedMatch[3]
  ) {
    const [, r, g, b] = commaSeparatedMatch;
    return {
      r: parseInt(r, 10),
      g: parseInt(g, 10),
      b: parseInt(b, 10),
    };
  }

  // Space-separated format: "r g b"
  const spaceSeparatedMatch = trimmed.match(/^(\d+)\s+(\d+)\s+(\d+)$/);
  if (
    spaceSeparatedMatch &&
    spaceSeparatedMatch[1] &&
    spaceSeparatedMatch[2] &&
    spaceSeparatedMatch[3]
  ) {
    const [, r, g, b] = spaceSeparatedMatch;
    return {
      r: parseInt(r, 10),
      g: parseInt(g, 10),
      b: parseInt(b, 10),
    };
  }

  throw new Error("Invalid RGB string format");
}

function calculateRelativeLuminanceFromRGB(
  r: number,
  g: number,
  b: number,
): number {
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
