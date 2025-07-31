import { describe, expect, test } from "vitest";

import { relativeLuminance } from "./relativeLuminance.js";
import { INVALID_HEX_COLORS, TEST_COLORS } from "./test.constants.js";

describe("relativeLuminance", () => {
  describe("hex string input", () => {
    const testColorsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        hex: color.hex,
        relativeLuminance: color.relativeLuminance,
      }),
    );

    test.for(testColorsArray)(
      "returns correct luminance for $name hex color $hex",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex)).toBe(expectedLuminance);
      },
    );

    test.for(testColorsArray)(
      "returns correct luminance for $name uppercase hex color",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex.toUpperCase())).toBe(expectedLuminance);
      },
    );

    test.for(testColorsArray)(
      "returns correct luminance for $name hex color without # prefix",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        const hexWithoutHash = hex.slice(1);
        expect(relativeLuminance(hexWithoutHash)).toBe(expectedLuminance);
      },
    );

    test.for(testColorsArray)(
      "returns correct luminance for $name uppercase hex color without # prefix",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        const hexWithoutHash = hex.slice(1).toUpperCase();
        expect(relativeLuminance(hexWithoutHash)).toBe(expectedLuminance);
      },
    );

    const testColors3Array = Object.entries(TEST_COLORS)
      .filter(([, color]) => "hex3" in color)
      .map(([name, color]) => ({
        name: name.toLowerCase(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        hex3: (color as any).hex3,
        relativeLuminance: color.relativeLuminance,
      }));

    test.for(testColors3Array)(
      "returns correct luminance for $name 3-digit hex color $hex3",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex3)).toBe(expectedLuminance);
      },
    );

    test.for(testColors3Array)(
      "returns correct luminance for $name uppercase 3-digit hex color",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex3.toUpperCase())).toBe(expectedLuminance);
      },
    );

    test.for(testColors3Array)(
      "returns correct luminance for $name 3-digit hex color without # prefix",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        const hex3WithoutHash = hex3.slice(1);
        expect(relativeLuminance(hex3WithoutHash)).toBe(expectedLuminance);
      },
    );

    test.for(testColors3Array)(
      "returns correct luminance for $name uppercase 3-digit hex color without # prefix",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        const hex3WithoutHash = hex3.slice(1).toUpperCase();
        expect(relativeLuminance(hex3WithoutHash)).toBe(expectedLuminance);
      },
    );

    test.for(INVALID_HEX_COLORS)(
      "throws error for invalid hex color %s",
      (invalidHex) => {
        expect(() => relativeLuminance(invalidHex)).toThrow();
      },
    );
  });

  describe("RGB input (future functionality)", () => {
    const testColorsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        rgb: color.rgb,
        relativeLuminance: color.relativeLuminance,
      }),
    );

    test.for(testColorsArray)(
      "should return correct luminance for $name RGB object",
      ({ rgb, relativeLuminance: expectedLuminance }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(relativeLuminance(rgb as any)).toBe(expectedLuminance);
      },
    );

    const testRgbArraysArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        rgbArray: color.rgbArray,
        relativeLuminance: color.relativeLuminance,
      }),
    );

    test.for(testRgbArraysArray)(
      "should return correct luminance for $name RGB array",
      ({ rgbArray, relativeLuminance: expectedLuminance }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(relativeLuminance(rgbArray as any)).toBe(expectedLuminance);
      },
    );

    const testRgbStringsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        rgbString: color.rgbString,
        relativeLuminance: color.relativeLuminance,
      }),
    );

    test.for(testRgbStringsArray)(
      "should return correct luminance for $name RGB string",
      ({ rgbString, relativeLuminance: expectedLuminance }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(relativeLuminance(rgbString as any)).toBe(expectedLuminance);
      },
    );

    test("should handle RGB separate parameters", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((relativeLuminance as any)(255, 255, 255)).toBe(1);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((relativeLuminance as any)(0, 0, 0)).toBe(0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((relativeLuminance as any)(255, 0, 0)).toBe(0.2126);
    });
  });
});
