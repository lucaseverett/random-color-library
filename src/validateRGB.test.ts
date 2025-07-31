import { describe, expect, it, test } from "vitest";

import {
  INVALID_RGB_ARRAYS,
  INVALID_RGB_EDGE_CASES,
  INVALID_RGB_OBJECTS,
  INVALID_RGB_SEPARATE_PARAMS,
  INVALID_RGB_STRINGS,
  TEST_COLORS,
  VALID_RGB_STRINGS,
} from "./test.constants.js";
import { validateRGB } from "./validateRGB.js";

describe("validateRGB", () => {
  describe("object input", () => {
    const validRgbObjects = Object.values(TEST_COLORS).map(
      (color) => color.rgb,
    );
    test.for(validRgbObjects)("validates valid RGB object %o", (rgb) => {
      expect(validateRGB(rgb)).toBe(true);
    });

    test.for(INVALID_RGB_OBJECTS)("rejects invalid RGB object %o", (rgb) => {
      expect(validateRGB(rgb)).toBe(false);
    });
  });

  describe("separate parameters", () => {
    const validRgbArrays = Object.values(TEST_COLORS).map(
      (color) => color.rgbArray,
    );
    test.for(validRgbArrays)(
      "validates valid RGB values (%i, %i, %i)",
      ([r, g, b]) => {
        expect(validateRGB(r, g, b)).toBe(true);
      },
    );

    test.for(INVALID_RGB_SEPARATE_PARAMS)(
      "rejects invalid RGB values %o",
      (params) => {
        expect(validateRGB(...params)).toBe(false);
      },
    );
  });

  describe("string input", () => {
    test.for(VALID_RGB_STRINGS)(
      "validates valid RGB string %s",
      (rgbString) => {
        expect(validateRGB(rgbString)).toBe(true);
      },
    );

    test.for(INVALID_RGB_STRINGS)(
      "rejects invalid RGB string %s",
      (rgbString) => {
        expect(validateRGB(rgbString)).toBe(false);
      },
    );
  });

  describe("array input", () => {
    const validRgbArrays = Object.values(TEST_COLORS).map(
      (color) => color.rgbArray,
    );
    test.for(validRgbArrays)("validates valid RGB array %o", (rgbArray) => {
      expect(validateRGB(rgbArray)).toBe(true);
    });

    test.for(INVALID_RGB_ARRAYS)("rejects invalid RGB array %o", (rgbArray) => {
      expect(validateRGB(rgbArray)).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("rejects no arguments", () => {
      expect(validateRGB()).toBe(false);
    });

    test.for(INVALID_RGB_EDGE_CASES)(
      "rejects invalid input type %o",
      ([input]) => {
        expect(validateRGB(input)).toBe(false);
      },
    );
  });
});
