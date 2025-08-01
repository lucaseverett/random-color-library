import { describe, expect, it } from "vitest";

import { convertToHex } from "./convertToHex.js";
import {
  TEST_COLORS,
  INVALID_RGB_OBJECTS,
  INVALID_RGB_ARRAYS,
  INVALID_RGB_STRINGS,
  INVALID_RGB_SEPARATE_PARAMS,
  INVALID_RGB_EDGE_CASES,
} from "./test.constants.js";

describe("convertToHex", () => {
  describe("object input", () => {
    const validRgbObjects = Object.values(TEST_COLORS).map(
      (color) => ({ rgb: color.rgb, expected: color.hex }),
    );
    it.for(validRgbObjects)("converts RGB object %o to hex", ({ rgb, expected }) => {
      expect(convertToHex(rgb)).toBe(expected);
    });
  });

  describe("separate parameters", () => {
    const validRgbParams = Object.values(TEST_COLORS).map(
      (color) => ({ r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, expected: color.hex }),
    );
    it.for(validRgbParams)("converts RGB parameters %o to hex", ({ r, g, b, expected }) => {
      expect(convertToHex(r, g, b)).toBe(expected);
    });
  });

  describe("string input", () => {
    const validRgbStrings = [
      { input: TEST_COLORS.WHITE.rgbString, expected: TEST_COLORS.WHITE.hex, format: "rgb() format" },
      { input: "  rgb( 255 , 255 , 255 )  ", expected: TEST_COLORS.WHITE.hex, format: "whitespace in rgb() format" },
      { input: TEST_COLORS.WHITE.rgbCommaSeparated, expected: TEST_COLORS.WHITE.hex, format: "comma-separated values" },
      { input: "rgb(255 255 255)", expected: TEST_COLORS.WHITE.hex, format: "space-separated without commas" },
      { input: TEST_COLORS.WHITE.rgbSpaceSeparated, expected: TEST_COLORS.WHITE.hex, format: "plain space-separated values" },
      { input: "RGB(255 255 255)", expected: TEST_COLORS.WHITE.hex, format: "uppercase RGB format" },
    ];
    it.for(validRgbStrings)("parses %s: %s", ({ input, expected }) => {
      expect(convertToHex(input)).toBe(expected);
    });
  });

  describe("array input", () => {
    const validRgbArrays = Object.values(TEST_COLORS).map(
      (color) => ({ array: color.rgbArray, expected: color.hex }),
    );
    it.for(validRgbArrays)("converts RGB array %o to hex", ({ array, expected }) => {
      expect(convertToHex(array)).toBe(expected);
    });
  });

  describe("input validation", () => {
    it("throws error for invalid input types", () => {
      expect(() => convertToHex()).toThrow();
    });

    it.for(INVALID_RGB_EDGE_CASES)("throws error for edge case input %o", (input) => {
      expect(() => convertToHex(input)).toThrow();
    });

    it.for(INVALID_RGB_OBJECTS)("throws error for invalid RGB object %o", (obj) => {
      expect(() => convertToHex(obj)).toThrow();
    });

    it.for(INVALID_RGB_ARRAYS)("throws error for invalid RGB array %o", (arr) => {
      expect(() => convertToHex(arr)).toThrow();
    });

    const validSeparateParams = INVALID_RGB_SEPARATE_PARAMS.filter(params => params.length === 3);
    it.for(validSeparateParams)("throws error for invalid separate parameters %o", (params) => {
      expect(() => convertToHex(...params)).toThrow();
    });

    it.for(INVALID_RGB_STRINGS)("throws error for invalid string format %s", (str) => {
      expect(() => convertToHex(str)).toThrow();
    });

    it("throws error for rgba format (not yet supported)", () => {
      expect(() => convertToHex("rgba(255, 0, 0, 0.5)")).toThrow(
        "rgba not yet supported",
      );
      expect(() => convertToHex("rgba(255, 0, 0, 1)")).toThrow(
        "rgba not yet supported",
      );
    });
  });
});