import { describe, expect, it } from "vitest";

import { contrastRatio } from "./contrastRatio.js";
import { CONTRAST_RATIOS, INVALID_HEX_COLORS } from "./test.constants.js";

describe("contrastRatio", () => {
  describe("hex string input", () => {
    it.for(CONTRAST_RATIOS)(
      "calculates contrast ratio for %o",
      ({ color1, color2, ratio }) => {
        expect(contrastRatio(color1.hex, color2.hex)).toBe(ratio);
      },
    );

    const hex3TestCases = CONTRAST_RATIOS.filter(
      ({ color1, color2 }) => color1.hex3 && color2.hex3,
    );

    it.for(hex3TestCases)(
      "calculates contrast ratio for %o (3-digit hex)",
      ({ color1, color2, ratio }) => {
        expect(contrastRatio(color1.hex3!, color2.hex3!)).toBe(ratio);
      },
    );

    it.for(INVALID_HEX_COLORS)(
      "throws error for invalid hex value %s",
      (invalidColor) => {
        expect(() => contrastRatio(invalidColor, "#ffffff")).toThrow();
        expect(() => contrastRatio("#ffffff", invalidColor)).toThrow();
      },
    );
  });

  describe("RGB input", () => {
    it.for(CONTRAST_RATIOS)(
      "should calculate contrast ratio for RGB objects %o",
      ({ color1, color2, ratio }) => {
        expect(contrastRatio(color1.rgb, color2.rgb)).toBe(ratio);
      },
    );

    it.for(CONTRAST_RATIOS)(
      "should calculate contrast ratio for RGB arrays %o",
      ({ color1, color2, ratio }) => {
        expect(contrastRatio(color1.rgbArray, color2.rgbArray)).toBe(ratio);
      },
    );

    it.for(CONTRAST_RATIOS)(
      "should calculate contrast ratio for mixed RGB formats %o",
      ({ color1, color2, ratio }) => {
        // RGB object vs RGB array
        expect(contrastRatio(color1.rgb, color2.rgbArray)).toBe(ratio);

        // RGB array vs RGB object
        expect(contrastRatio(color1.rgbArray, color2.rgb)).toBe(ratio);
      },
    );

    it.for(CONTRAST_RATIOS)(
      "should calculate contrast ratio for mixed hex/RGB formats %o",
      ({ color1, color2, ratio }) => {
        // Hex vs RGB object
        expect(contrastRatio(color1.hex, color2.rgb)).toBe(ratio);

        // RGB object vs Hex
        expect(contrastRatio(color1.rgb, color2.hex)).toBe(ratio);

        // Hex vs RGB array
        expect(contrastRatio(color1.hex, color2.rgbArray)).toBe(ratio);

        // RGB array vs Hex
        expect(contrastRatio(color1.rgbArray, color2.hex)).toBe(ratio);
      },
    );
  });

  describe("parameter order (commutative)", () => {
    it.for(CONTRAST_RATIOS)(
      "should return same contrast ratio regardless of parameter order %o",
      ({ color1, color2, ratio }) => {
        // Hex values
        expect(contrastRatio(color1.hex, color2.hex)).toBe(ratio);
        expect(contrastRatio(color2.hex, color1.hex)).toBe(ratio);

        // RGB objects
        expect(contrastRatio(color1.rgb, color2.rgb)).toBe(ratio);
        expect(contrastRatio(color2.rgb, color1.rgb)).toBe(ratio);

        // RGB arrays
        expect(contrastRatio(color1.rgbArray, color2.rgbArray)).toBe(ratio);
        expect(contrastRatio(color2.rgbArray, color1.rgbArray)).toBe(ratio);
      },
    );
  });
});
