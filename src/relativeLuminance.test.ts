import { describe, expect, it } from "vitest";

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

    it.for(testColorsArray)(
      "returns correct luminance for %o hex color",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex)).toBe(expectedLuminance);
      },
    );

    it.for(testColorsArray)(
      "returns correct luminance for %o uppercase hex color",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex.toUpperCase())).toBe(expectedLuminance);
      },
    );

    it.for(testColorsArray)(
      "returns correct luminance for %o hex color without # prefix",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        const hexWithoutHash = hex.slice(1);
        expect(relativeLuminance(hexWithoutHash)).toBe(expectedLuminance);
      },
    );

    it.for(testColorsArray)(
      "returns correct luminance for %o uppercase hex color without # prefix",
      ({ hex, relativeLuminance: expectedLuminance }) => {
        const hexWithoutHash = hex.slice(1).toUpperCase();
        expect(relativeLuminance(hexWithoutHash)).toBe(expectedLuminance);
      },
    );

    const testColors3Array = Object.entries(TEST_COLORS)
      .filter(([, color]) => "hex3" in color && color.hex3)
      .map(([name, color]) => ({
        name: name.toLowerCase(),
        hex3: (color as typeof color & { hex3: string }).hex3,
        relativeLuminance: color.relativeLuminance,
      }));

    it.for(testColors3Array)(
      "returns correct luminance for %o 3-digit hex color",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex3)).toBe(expectedLuminance);
      },
    );

    it.for(testColors3Array)(
      "returns correct luminance for %o uppercase 3-digit hex color",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(hex3.toUpperCase())).toBe(expectedLuminance);
      },
    );

    it.for(testColors3Array)(
      "returns correct luminance for %o 3-digit hex color without # prefix",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        const hex3WithoutHash = hex3.slice(1);
        expect(relativeLuminance(hex3WithoutHash)).toBe(expectedLuminance);
      },
    );

    it.for(testColors3Array)(
      "returns correct luminance for %o uppercase 3-digit hex color without # prefix",
      ({ hex3, relativeLuminance: expectedLuminance }) => {
        const hex3WithoutHash = hex3.slice(1).toUpperCase();
        expect(relativeLuminance(hex3WithoutHash)).toBe(expectedLuminance);
      },
    );

    it.for(INVALID_HEX_COLORS)(
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

    it.for(testColorsArray)(
      "should return correct luminance for %o RGB object",
      ({ rgb, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(rgb)).toBe(expectedLuminance);
      },
    );

    const testRgbArraysArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        rgbArray: color.rgbArray as [number, number, number],
        relativeLuminance: color.relativeLuminance,
      }),
    );

    it.for(testRgbArraysArray)(
      "should return correct luminance for %o RGB array",
      ({ rgbArray, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(rgbArray)).toBe(expectedLuminance);
      },
    );

    const testRgbStringsArray = Object.entries(TEST_COLORS).map(
      ([name, color]) => ({
        name: name.toLowerCase(),
        rgbString: color.rgbString,
        relativeLuminance: color.relativeLuminance,
      }),
    );

    it.for(testRgbStringsArray)(
      "should return correct luminance for %o RGB string",
      ({ rgbString, relativeLuminance: expectedLuminance }) => {
        expect(relativeLuminance(rgbString)).toBe(expectedLuminance);
      },
    );

    it("should handle RGB separate parameters", () => {
      expect(relativeLuminance(255, 255, 255)).toBe(1);
      expect(relativeLuminance(0, 0, 0)).toBe(0);
      expect(relativeLuminance(255, 0, 0)).toBe(0.2126);
    });
  });
});
