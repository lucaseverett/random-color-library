import { describe, expect, it } from "vitest";

import { addOpacity } from "./addOpacity.js";
import { HEX_ALPHA_CONVERSIONS, INVALID_HEX_COLORS } from "./test.constants.js";

describe("addOpacity", () => {
  it.for(HEX_ALPHA_CONVERSIONS)(
    "converts $originalHex with $opacityPercent% opacity to $convertedHex",
    ({
      originalHex,
      opacityPercent,
      convertedHex,
    }: (typeof HEX_ALPHA_CONVERSIONS)[0]) => {
      const opacity = opacityPercent / 100;
      expect(addOpacity(originalHex, opacity)).toBe(convertedHex);
    },
  );

  it.for(HEX_ALPHA_CONVERSIONS)(
    "converts uppercase $originalHex with $opacityPercent% opacity to $convertedHex",
    ({
      originalHex,
      opacityPercent,
      convertedHex,
    }: (typeof HEX_ALPHA_CONVERSIONS)[0]) => {
      const opacity = opacityPercent / 100;
      const uppercaseHex = originalHex.toUpperCase();
      expect(addOpacity(uppercaseHex, opacity)).toBe(convertedHex);
    },
  );

  describe("invalid hex colors", () => {
    it.for(INVALID_HEX_COLORS)(
      "throws error for invalid hex color: %s",
      (invalidHex) => {
        expect(() => addOpacity(invalidHex, 0.5)).toThrow();
      },
    );
  });

  describe("invalid opacity values", () => {
    const validHex = "#ff0000";

    it("throws error for opacity below 0", () => {
      expect(() => addOpacity(validHex, -0.1)).toThrow();
    });

    it("throws error for opacity above 1", () => {
      expect(() => addOpacity(validHex, 1.1)).toThrow();
    });

    it("throws error for opacity equal to -1", () => {
      expect(() => addOpacity(validHex, -1)).toThrow();
    });

    it("throws error for opacity equal to 2", () => {
      expect(() => addOpacity(validHex, 2)).toThrow();
    });

    it("throws error for NaN opacity", () => {
      expect(() => addOpacity(validHex, NaN)).toThrow();
    });

    it("throws error for Infinity opacity", () => {
      expect(() => addOpacity(validHex, Infinity)).toThrow();
    });

    it("throws error for -Infinity opacity", () => {
      expect(() => addOpacity(validHex, -Infinity)).toThrow();
    });
  });
});
