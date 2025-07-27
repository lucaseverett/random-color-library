import { describe, expect, test } from "vitest";

import { contrastRatio } from "./contrastRatio.js";

describe("contrastRatio", () => {
  test("calculates contrast ratio for FFFFFF and FF8080", () => {
    expect(contrastRatio("FFFFFF", "FF8080")).toBe(2.4273608913353155);
  });

  test("calculates contrast ratio for 000000 and FF8080", () => {
    expect(contrastRatio("000000", "FF8080")).toBe(8.651371155793685);
  });

  test("throws error for invalid hex values", () => {
    expect(() => contrastRatio("invalid", "FF8080")).toThrow();
    expect(() => contrastRatio("FFFFFF", "invalid")).toThrow();
    expect(() => contrastRatio("GGGGGG", "FF8080")).toThrow();
  });

  test("throws error for empty hex values", () => {
    expect(() => contrastRatio("", "FF8080")).toThrow();
    expect(() => contrastRatio("FFFFFF", "")).toThrow();
    expect(() => contrastRatio("", "")).toThrow();
  });

  test("handles both L1 and L2 parameters correctly", () => {
    const ratio1 = contrastRatio("FFFFFF", "FF8080");
    const ratio2 = contrastRatio("FF8080", "FFFFFF");
    expect(ratio1).toBe(ratio2);
  });

  test("works with 3-digit hex values", () => {
    expect(contrastRatio("FFF", "F80")).toBe(2.393526870097677);
    expect(contrastRatio("000", "F80")).toBe(8.773663777228878);
  });

  test("works with mixed case hex values", () => {
    expect(contrastRatio("ffffff", "ff8080")).toBe(2.4273608913353155);
    expect(contrastRatio("FfFfFf", "Ff8080")).toBe(2.4273608913353155);
  });

  test("works with hex values prefixed with #", () => {
    expect(contrastRatio("#FFFFFF", "#FF8080")).toBe(2.4273608913353155);
    expect(contrastRatio("#000000", "#FF8080")).toBe(8.651371155793685);
  });
});
