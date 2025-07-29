import { describe, expect, it } from "vitest";

import { validateRGB } from "./validateRGB.js";

describe("validateRGB", () => {
  describe("object input", () => {
    it("validates valid RGB objects", () => {
      expect(validateRGB({ r: 255, g: 0, b: 0 })).toBe(true);
      expect(validateRGB({ r: 0, g: 255, b: 0 })).toBe(true);
      expect(validateRGB({ r: 0, g: 0, b: 255 })).toBe(true);
      expect(validateRGB({ r: 128, g: 128, b: 128 })).toBe(true);
      expect(validateRGB({ r: 255, g: 255, b: 255 })).toBe(true);
      expect(validateRGB({ r: 0, g: 0, b: 0 })).toBe(true);
    });

    it("rejects invalid RGB objects", () => {
      expect(validateRGB({ r: -1, g: 0, b: 0 })).toBe(false);
      expect(validateRGB({ r: 256, g: 0, b: 0 })).toBe(false);
      expect(validateRGB({ r: 0, g: -1, b: 0 })).toBe(false);
      expect(validateRGB({ r: 0, g: 256, b: 0 })).toBe(false);
      expect(validateRGB({ r: 0, g: 0, b: -1 })).toBe(false);
      expect(validateRGB({ r: 0, g: 0, b: 256 })).toBe(false);
    });

    it("rejects objects with non-numeric values", () => {
      expect(validateRGB({ r: "abc", g: 0, b: 0 })).toBe(false);
      expect(validateRGB({ r: 0, g: "abc", b: 0 })).toBe(false);
      expect(validateRGB({ r: 0, g: 0, b: "abc" })).toBe(false);
    });

    it("rejects incomplete objects", () => {
      expect(validateRGB({ r: 255 })).toBe(false);
      expect(validateRGB({ b: 0 })).toBe(false);
      expect(validateRGB({ g: 0 })).toBe(false);
      expect(validateRGB({ r: 255, g: 0 })).toBe(false);
      expect(validateRGB({ r: 255, b: 0 })).toBe(false);
      expect(validateRGB({ b: 255, g: 0 })).toBe(false);
    });

    it("rejects floating-point numbers", () => {
      expect(validateRGB({ r: 255.9, g: 0.1, b: 0.5 })).toBe(false);
      expect(validateRGB({ r: 128.5, g: 64.2, b: 32.8 })).toBe(false);
    });
  });

  describe("separate parameters", () => {
    it("validates valid RGB values", () => {
      expect(validateRGB(255, 0, 0)).toBe(true);
      expect(validateRGB(0, 255, 0)).toBe(true);
      expect(validateRGB(0, 0, 255)).toBe(true);
      expect(validateRGB(128, 128, 128)).toBe(true);
      expect(validateRGB(255, 255, 255)).toBe(true);
      expect(validateRGB(0, 0, 0)).toBe(true);
    });

    it("rejects out-of-range RGB values", () => {
      expect(validateRGB(-1, 0, 0)).toBe(false);
      expect(validateRGB(256, 0, 0)).toBe(false);
      expect(validateRGB(0, -1, 0)).toBe(false);
      expect(validateRGB(0, 256, 0)).toBe(false);
      expect(validateRGB(0, 0, -1)).toBe(false);
      expect(validateRGB(0, 0, 256)).toBe(false);
    });

    it("rejects non-numeric values", () => {
      expect(validateRGB("abc", 0, 0)).toBe(false);
      expect(validateRGB(0, "abc", 0)).toBe(false);
      expect(validateRGB(0, 0, "abc")).toBe(false);
    });

    it("rejects floating-point numbers", () => {
      expect(validateRGB(255.9, 0.1, 0.5)).toBe(false);
      expect(validateRGB(128.5, 64.2, 32.8)).toBe(false);
    });
  });

  describe("string input", () => {
    it("validates rgb() format", () => {
      expect(validateRGB("rgb(255, 255, 255)")).toBe(true);
      expect(validateRGB("rgb(0, 0, 0)")).toBe(true);
      expect(validateRGB("rgb(128, 128, 128)")).toBe(true);
    });

    it("validates whitespace in rgb() format", () => {
      expect(validateRGB("  rgb( 255 , 255 , 255 )  ")).toBe(true);
    });

    it("validates comma-separated values", () => {
      expect(validateRGB("255, 255, 255")).toBe(true);
      expect(validateRGB("0, 0, 0")).toBe(true);
    });

    it("validates space-separated values without commas", () => {
      expect(validateRGB("rgb(255 255 255)")).toBe(true);
    });

    it("validates plain space-separated values", () => {
      expect(validateRGB("255 255 255")).toBe(true);
    });

    it("validates uppercase RGB format", () => {
      expect(validateRGB("RGB(255 255 255)")).toBe(true);
    });

    it("rejects invalid string formats", () => {
      expect(validateRGB("rgb(255, 0)")).toBe(false);
      expect(validateRGB("255, 0")).toBe(false);
      expect(validateRGB("not a color")).toBe(false);
      expect(validateRGB("")).toBe(false);
    });

    it("rejects negative numbers in strings", () => {
      expect(validateRGB("rgb(-1, 0, 0)")).toBe(false);
      expect(validateRGB("-1, 0, 0")).toBe(false);
      expect(validateRGB("-1 0 0")).toBe(false);
    });

    it("rejects rgba format", () => {
      expect(validateRGB("rgba(255, 0, 0, 0.5)")).toBe(false);
      expect(validateRGB("rgba(255, 0, 0, 1)")).toBe(false);
    });

    it("rejects out-of-range values in strings", () => {
      expect(validateRGB("rgb(256, 0, 0)")).toBe(false);
      expect(validateRGB("rgb(0, 256, 0)")).toBe(false);
      expect(validateRGB("rgb(0, 0, 256)")).toBe(false);
      expect(validateRGB("256, 0, 0")).toBe(false);
      expect(validateRGB("256 0 0")).toBe(false);
    });
  });

  describe("array input", () => {
    it("validates valid RGB arrays", () => {
      expect(validateRGB([255, 0, 0])).toBe(true);
      expect(validateRGB([0, 255, 0])).toBe(true);
      expect(validateRGB([0, 0, 255])).toBe(true);
      expect(validateRGB([128, 128, 128])).toBe(true);
      expect(validateRGB([255, 255, 255])).toBe(true);
      expect(validateRGB([0, 0, 0])).toBe(true);
    });

    it("rejects arrays with wrong length", () => {
      expect(validateRGB([])).toBe(false);
      expect(validateRGB([255])).toBe(false);
      expect(validateRGB([255, 0])).toBe(false);
      expect(validateRGB([255, 0, 0, 255])).toBe(false);
    });

    it("rejects arrays with non-numeric values", () => {
      expect(validateRGB(["abc", 0, 0])).toBe(false);
      expect(validateRGB([0, "abc", 0])).toBe(false);
      expect(validateRGB([0, 0, "abc"])).toBe(false);
    });

    it("rejects arrays with out-of-range values", () => {
      expect(validateRGB([-1, 0, 0])).toBe(false);
      expect(validateRGB([256, 0, 0])).toBe(false);
      expect(validateRGB([0, -1, 0])).toBe(false);
      expect(validateRGB([0, 256, 0])).toBe(false);
      expect(validateRGB([0, 0, -1])).toBe(false);
      expect(validateRGB([0, 0, 256])).toBe(false);
    });

    it("rejects floating-point numbers in arrays", () => {
      expect(validateRGB([255.9, 0.1, 0.5])).toBe(false);
      expect(validateRGB([128.5, 64.2, 32.8])).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("rejects no arguments", () => {
      expect(validateRGB()).toBe(false);
    });

    it("rejects null/undefined inputs", () => {
      expect(validateRGB(null)).toBe(false);
      expect(validateRGB(undefined)).toBe(false);
    });

    it("rejects invalid input types", () => {
      expect(validateRGB(true)).toBe(false);
      expect(validateRGB(Symbol())).toBe(false);
      expect(validateRGB(function () {})).toBe(false);
    });

    it("rejects invalid number of arguments", () => {
      expect(validateRGB(255, 0)).toBe(false);
      expect(validateRGB(255)).toBe(false);
    });

    it("rejects NaN values", () => {
      expect(validateRGB(NaN, 0, 0)).toBe(false);
      expect(validateRGB(0, NaN, 0)).toBe(false);
      expect(validateRGB(0, 0, NaN)).toBe(false);
      expect(validateRGB({ r: NaN, g: 0, b: 0 })).toBe(false);
      expect(validateRGB([NaN, 0, 0])).toBe(false);
    });
  });
});
