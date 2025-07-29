import { validateRGB } from "./validateRGB.js";

interface RgbObject {
  r: number;
  g: number;
  b: number;
}

type RgbArray = [number, number, number];

export function convertToHex(rgb: RgbObject): string;
export function convertToHex(r: number, g: number, b: number): string;
export function convertToHex(rgb: RgbArray): string;
export function convertToHex(rgb: string): string;
export function convertToHex(...args: unknown[]): string;
export function convertToHex(
  arg1?: unknown,
  arg2?: unknown,
  arg3?: unknown,
): string {
  let r: number, g: number, b: number;

  if (arg1 === undefined) {
    throw new Error("No arguments provided");
  }

  if (arg2 === undefined && arg3 === undefined) {
    const input = arg1;

    if (input === null || input === undefined) {
      throw new Error("Input cannot be null or undefined");
    }

    if (typeof input === "string" && input.toLowerCase().includes("rgba")) {
      throw new Error("rgba not yet supported");
    }

    if (typeof input === "string" && input.trim() === "") {
      throw new Error("Empty string provided");
    }

    if (typeof input === "string" && input.includes("-")) {
      throw new Error("Negative values not allowed");
    }

    if (!validateRGB(input)) {
      throw new Error("Invalid RGB input");
    }

    if (typeof input === "string") {
      const trimmed = input.trim();
      let match: RegExpMatchArray | null;

      match = trimmed.match(
        /^rgb\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i,
      );
      if (match) {
        r = Number(match[1]);
        g = Number(match[2]);
        b = Number(match[3]);
      } else {
        match = trimmed.match(/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/);
        if (match) {
          r = Number(match[1]);
          g = Number(match[2]);
          b = Number(match[3]);
        } else {
          match = trimmed.match(/^(\d+)\s+(\d+)\s+(\d+)$/);
          if (match) {
            r = Number(match[1]);
            g = Number(match[2]);
            b = Number(match[3]);
          } else {
            throw new Error("Invalid string format");
          }
        }
      }
    } else if (Array.isArray(input)) {
      r = input[0] as number;
      g = input[1] as number;
      b = input[2] as number;
    } else if (typeof input === "object") {
      ({ r, g, b } = input as RgbObject);
    } else {
      throw new Error("Invalid input type");
    }
  } else if (arg2 !== undefined && arg3 !== undefined) {
    if (!validateRGB(arg1, arg2, arg3)) {
      throw new Error("Invalid RGB values");
    }
    r = arg1 as number;
    g = arg2 as number;
    b = arg3 as number;
  } else {
    throw new Error("Invalid number of arguments");
  }

  const toHex = (value: number): string => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
