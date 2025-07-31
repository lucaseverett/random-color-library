import { describe, expect, test } from "vitest";

import { INVALID_HEX_COLORS, TEST_COLORS } from "./test.constants.js";
import { validateHex } from "./validateHex.js";

describe("validateHex", () => {
  describe("valid hex colors", () => {
    const hex3Colors = Object.values(TEST_COLORS)
      .filter((color) => "hex3" in color && color.hex3)
      .map((color) => (color as typeof TEST_COLORS.BLACK).hex3!);
    test.for(hex3Colors)("should accept 3-character hex color %s", (color) => {
      expect(validateHex(color)).toBe(true);
    });

    const hex6Colors = Object.values(TEST_COLORS).map((color) => color.hex);
    test.for(hex6Colors)("should accept 6-character hex color %s", (color) => {
      expect(validateHex(color)).toBe(true);
    });

    const uppercaseColors = [
      TEST_COLORS.WHITE.hex3!.toUpperCase(),
      TEST_COLORS.WHITE.hex.toUpperCase(),
      TEST_COLORS.RED.hex.toUpperCase(),
      TEST_COLORS.BLUE.hex3!.toUpperCase(),
    ];
    test.for(uppercaseColors)(
      "should accept uppercase hex color %s",
      (color) => {
        expect(validateHex(color)).toBe(true);
      },
    );
  });

  describe("valid hex colors without hash", () => {
    const hex3ColorsNoHash = Object.values(TEST_COLORS)
      .filter((color) => "hex3" in color && color.hex3)
      .map((color) => (color as typeof TEST_COLORS.BLACK).hex3!.slice(1));
    test.for(hex3ColorsNoHash)(
      "should accept 3-character hex color without hash %s",
      (color) => {
        expect(validateHex(color)).toBe(true);
      },
    );

    const hex6ColorsNoHash = Object.values(TEST_COLORS).map((color) =>
      color.hex.slice(1),
    );
    test.for(hex6ColorsNoHash)(
      "should accept 6-character hex color without hash %s",
      (color) => {
        expect(validateHex(color)).toBe(true);
      },
    );

    const uppercaseColorsNoHash = [
      TEST_COLORS.WHITE.hex3!.slice(1).toUpperCase(),
      TEST_COLORS.WHITE.hex.slice(1).toUpperCase(),
      TEST_COLORS.RED.hex.slice(1).toUpperCase(),
      TEST_COLORS.BLUE.hex3!.slice(1).toUpperCase(),
    ];
    test.for(uppercaseColorsNoHash)(
      "should accept uppercase hex color without hash %s",
      (color) => {
        expect(validateHex(color)).toBe(true);
      },
    );
  });

  describe("invalid hex colors", () => {
    test.for(INVALID_HEX_COLORS)(
      "should reject invalid hex color %s",
      (color) => {
        expect(validateHex(color)).toBe(false);
      },
    );
  });
});
