import { describe, expect, test } from "bun:test";
import { getColorsByShade } from "./materialColors.js";

describe("getColorsByShade", () => {
  test("should return correct hex values for shade", () => {
    expect(getColorsByShade("700")).toEqual([
      "#d32f2f",
      "#c2185b",
      "#7b1fa2",
      "#512da8",
      "#303f9f",
      "#1976d2",
      "#0288d1",
      "#0097a7",
      "#00796b",
      "#388e3c",
      "#689f38",
      "#afb42b",
      "#fbc02d",
      "#ffa000",
      "#f57c00",
      "#e64a19",
      "#5d4037",
      "#616161",
      "#455a64",
    ]);
  });

  test("should return undefined for invalid shade", () => {
    // @ts-expect-error: Invalid shade
    expect(getColorsByShade["invalidShade"]).toBeUndefined();
  });
});
