import { describe, expect, test } from "vitest";

import { contrastRatio } from "./contrastRatio.js";
import {
  CONTRAST_RATIOS_HEX,
  CONTRAST_RATIOS_HEX3,
  INVALID_HEX_COLORS,
} from "./test.constants.js";

describe("contrastRatio", () => {
  test.for(CONTRAST_RATIOS_HEX)(
    `calculates contrast ratio`,
    ([color1, color2, expectedRatio]) => {
      expect(contrastRatio(color1 as string, color2 as string)).toBe(
        expectedRatio as number,
      );
    },
  );

  test.for(CONTRAST_RATIOS_HEX3)(
    `calculates contrast ratio (3-digit hex)`,
    ([color1, color2, expectedRatio]) => {
      expect(contrastRatio(color1 as string, color2 as string)).toBe(
        expectedRatio as number,
      );
    },
  );

  test.for(INVALID_HEX_COLORS)(
    "throws error for invalid hex value",
    (invalidColor) => {
      expect(() => contrastRatio(invalidColor, "#ffffff")).toThrow();
      expect(() => contrastRatio("#ffffff", invalidColor)).toThrow();
    },
  );
});
