import { describe, expect, it } from "vitest";

import { relativeLuminance } from "./relativeLuminance.js";

describe("relativeLuminance", () => {
  it("returns 0 for pure black (#000000)", () => {
    expect(relativeLuminance("#000000")).toBe(0);
  });

  it("returns 1 for pure white (#ffffff)", () => {
    expect(relativeLuminance("#ffffff")).toBe(1);
    expect(relativeLuminance("#FFFFFF")).toBe(1);
  });

  it("returns correct luminance for dark colors", () => {
    // Dark red
    expect(relativeLuminance("#800000")).toBe(0.045891942324214986);
    // Dark blue
    expect(relativeLuminance("#000080")).toBe(0.015585128108223528);
    // Dark gray
    expect(relativeLuminance("#404040")).toBe(0.05126945837404324);
  });

  it("returns correct luminance for light colors", () => {
    // Light red
    expect(relativeLuminance("#ff8080")).toBe(0.3825685577896843);
    expect(relativeLuminance("#FF8080")).toBe(0.3825685577896843);
    // Light blue
    expect(relativeLuminance("#8080ff")).toBe(0.27247537200567573);
    expect(relativeLuminance("#8080FF")).toBe(0.27247537200567573);
    // Light gray
    expect(relativeLuminance("#c0c0c0")).toBe(0.5271151257058131);
    expect(relativeLuminance("#C0C0C0")).toBe(0.5271151257058131);
  });

  it("handles colors without # prefix", () => {
    expect(relativeLuminance("000000")).toBe(0);
    expect(relativeLuminance("ffffff")).toBe(1);
    expect(relativeLuminance("FFFFFF")).toBe(1);
  });

  it("handles 3-character hex codes", () => {
    expect(relativeLuminance("#000")).toBe(0);
    expect(relativeLuminance("#fff")).toBe(1);
    expect(relativeLuminance("#FFF")).toBe(1);
    expect(relativeLuminance("f00")).toBe(0.2126);
    expect(relativeLuminance("F00")).toBe(0.2126);
  });

  it("throws error for invalid hex strings", () => {
    expect(() => relativeLuminance("")).toThrow();
    expect(() => relativeLuminance("xyz")).toThrow();
    expect(() => relativeLuminance("#xyz")).toThrow();
    expect(() => relativeLuminance("12345")).toThrow();
    expect(() => relativeLuminance("#12345")).toThrow();
    expect(() => relativeLuminance("#1234567")).toThrow();
    expect(() => relativeLuminance("not-a-hex")).toThrow();
    expect(() => relativeLuminance("#gggggg")).toThrow();
  });
});
