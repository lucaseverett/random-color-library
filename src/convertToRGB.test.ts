import { describe, expect, it } from "vitest";

import { convertToRGB } from "./convertToRGB.js";
import { INVALID_HEX_COLORS, TEST_COLORS } from "./test.constants.js";

describe("convertToRGB", () => {
  describe("6-digit hex input", () => {
    const testColorsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name,
        hex: color.hex,
        rgb: color.rgb,
      }),
    );

    it.for(testColorsArray)("converts %o hex color to RGB", ({ hex, rgb }) => {
      expect(convertToRGB(hex)).toEqual(rgb);
    });

    it.for(testColorsArray)(
      "converts %o hex color without # prefix to RGB",
      ({ hex, rgb }) => {
        const hexWithoutHash = hex.slice(1);
        expect(convertToRGB(hexWithoutHash)).toEqual(rgb);
      },
    );
  });

  describe("3-digit hex input", () => {
    const testColors3Array = Object.entries(TEST_COLORS)
      .filter(([, color]) => "hex3" in color && color.hex3)
      .map(([name, color]) => ({
        name,
        hex3: (color as typeof TEST_COLORS.BLACK).hex3!,
        rgb: color.rgb,
      }));

    it.for(testColors3Array)(
      "converts %o 3-digit hex color to RGB",
      ({ hex3, rgb }) => {
        expect(convertToRGB(hex3)).toEqual(rgb);
      },
    );

    it.for(testColors3Array)(
      "converts %o 3-digit hex color without # prefix to RGB",
      ({ hex3, rgb }) => {
        const hex3WithoutHash = hex3.slice(1);
        expect(convertToRGB(hex3WithoutHash)).toEqual(rgb);
      },
    );
  });

  describe("case insensitive input", () => {
    const testColorsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name,
        hex: color.hex,
        rgb: color.rgb,
      }),
    );

    it.for(testColorsArray)(
      "handles %o uppercase hex color",
      ({ hex, rgb }) => {
        expect(convertToRGB(hex.toUpperCase())).toEqual(rgb);
      },
    );

    it.for(testColorsArray)(
      "handles %o uppercase hex color without # prefix",
      ({ hex, rgb }) => {
        const hexWithoutHash = hex.slice(1).toUpperCase();
        expect(convertToRGB(hexWithoutHash)).toEqual(rgb);
      },
    );

    const testColors3Array = Object.entries(TEST_COLORS)
      .filter(([, color]) => "hex3" in color && color.hex3)
      .map(([name, color]) => ({
        name,
        hex3: (color as typeof TEST_COLORS.BLACK).hex3!,
        rgb: color.rgb,
      }));

    it.for(testColors3Array)(
      "handles %o uppercase 3-digit hex color",
      ({ hex3, rgb }) => {
        expect(convertToRGB(hex3.toUpperCase())).toEqual(rgb);
      },
    );

    it.for(testColors3Array)(
      "handles %o uppercase 3-digit hex color without # prefix",
      ({ hex3, rgb }) => {
        const hex3WithoutHash = hex3.slice(1).toUpperCase();
        expect(convertToRGB(hex3WithoutHash)).toEqual(rgb);
      },
    );
  });

  describe("input validation", () => {
    const nullUndefinedInputs = [
      { name: "null", input: null },
      { name: "undefined", input: undefined },
    ];

    it.for(nullUndefinedInputs)("throws error for %o input", ({ input }) => {
      expect(() => convertToRGB(input as unknown as string)).toThrow();
    });

    const nonStringInputs = [
      { name: "number", input: 123 },
      { name: "boolean", input: true },
      { name: "object", input: {} },
      { name: "array", input: [] },
    ];

    it.for(nonStringInputs)("throws error for %o input", ({ input }) => {
      expect(() => convertToRGB(input as unknown as string)).toThrow();
    });

    it.for(INVALID_HEX_COLORS)(
      "throws error for invalid hex color %s",
      (invalidHex) => {
        expect(() => convertToRGB(invalidHex)).toThrow();
      },
    );

    const specialCases = [
      { name: "empty string", input: "" },
      { name: "just hash symbol", input: "#" },
    ];

    it.for(specialCases)("throws error for %o", ({ input }) => {
      expect(() => convertToRGB(input)).toThrow();
    });

    const invalidLengths = [
      { name: "2 chars with hash", input: "#ff" },
      { name: "2 chars without hash", input: "ff" },
      { name: "4 chars with hash", input: "#ffff" },
      { name: "4 chars without hash", input: "ffff" },
      { name: "5 chars with hash", input: "#fffff" },
      { name: "5 chars without hash", input: "fffff" },
      { name: "7 chars with hash", input: "#fffffff" },
      { name: "7 chars without hash", input: "fffffff" },
    ];

    it.for(invalidLengths)(
      "throws error for invalid length: %o",
      ({ input }) => {
        expect(() => convertToRGB(input)).toThrow();
      },
    );

    const invalidCharacters = [
      { name: "3-digit with invalid chars", input: "#ggg" },
      { name: "3-digit no hash with invalid chars", input: "ggg" },
      { name: "6-digit with invalid chars", input: "#gggggg" },
      { name: "6-digit no hash with invalid chars", input: "gggggg" },
      { name: "xyz pattern", input: "#xyz" },
      { name: "xyz pattern no hash", input: "xyz" },
      { name: "mixed valid/invalid", input: "#12345g" },
      { name: "mixed valid/invalid no hash", input: "12345g" },
    ];

    it.for(invalidCharacters)("throws error for %o", ({ input }) => {
      expect(() => convertToRGB(input)).toThrow();
    });

    const colorsWithSpaces = [
      { name: "space after hash", input: "# fff" },
      { name: "space in middle", input: "#ff f" },
      { name: "space before hash", input: " #fff" },
      { name: "space before no hash", input: " fff" },
      { name: "space in middle no hash", input: "ff f" },
      { name: "space after no hash", input: "fff " },
    ];

    it.for(colorsWithSpaces)(
      "throws error for colors with spaces: %o",
      ({ input }) => {
        expect(() => convertToRGB(input)).toThrow();
      },
    );

    const multipleHashSymbols = [
      { name: "double hash at start", input: "##fff" },
      { name: "hash in middle", input: "#f#ff" },
    ];

    it.for(multipleHashSymbols)(
      "throws error for multiple hash symbols: %o",
      ({ input }) => {
        expect(() => convertToRGB(input)).toThrow();
      },
    );
  });

  describe("no arguments", () => {
    it("throws error when called without arguments", () => {
      expect(() => (convertToRGB as () => unknown)()).toThrow();
    });
  });
});
