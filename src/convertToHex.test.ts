import { describe, expect, it } from "vitest";

import { convertToHex } from "./convertToHex.js";

describe("convertToHex", () => {
  describe("object input", () => {
    it("converts basic RGB values", () => {
      expect(convertToHex({ r: 255, g: 0, b: 0 })).toBe("#ff0000");
      expect(convertToHex({ r: 0, g: 255, b: 0 })).toBe("#00ff00");
      expect(convertToHex({ r: 0, g: 0, b: 255 })).toBe("#0000ff");
      expect(convertToHex({ r: 128, g: 128, b: 128 })).toBe("#808080");
      expect(convertToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
      expect(convertToHex({ r: 0, g: 0, b: 0 })).toBe("#000000");
    });
  });

  describe("separate parameters", () => {
    it("converts basic RGB values", () => {
      expect(convertToHex(255, 0, 0)).toBe("#ff0000");
      expect(convertToHex(0, 255, 0)).toBe("#00ff00");
      expect(convertToHex(0, 0, 255)).toBe("#0000ff");
      expect(convertToHex(128, 128, 128)).toBe("#808080");
      expect(convertToHex(255, 255, 255)).toBe("#ffffff");
      expect(convertToHex(0, 0, 0)).toBe("#000000");
    });
  });

  describe("string input", () => {
    it("parses rgb() format", () => {
      expect(convertToHex("rgb(255, 255, 255)")).toBe("#ffffff");
    });

    it("handles whitespace in rgb() format", () => {
      expect(convertToHex("  rgb( 255 , 255 , 255 )  ")).toBe("#ffffff");
    });

    it("parses comma-separated values", () => {
      expect(convertToHex("255, 255, 255")).toBe("#ffffff");
    });

    it("parses space-separated values without commas", () => {
      expect(convertToHex("rgb(255 255 255)")).toBe("#ffffff");
    });

    it("parses plain space-separated values", () => {
      expect(convertToHex("255 255 255")).toBe("#ffffff");
    });

    it("handles uppercase RGB format", () => {
      expect(convertToHex("RGB(255 255 255)")).toBe("#ffffff");
    });
  });

  describe("array input", () => {
    it("converts RGB arrays", () => {
      expect(convertToHex([255, 0, 0])).toBe("#ff0000");
      expect(convertToHex([0, 255, 0])).toBe("#00ff00");
      expect(convertToHex([0, 0, 255])).toBe("#0000ff");
      expect(convertToHex([128, 128, 128])).toBe("#808080");
      expect(convertToHex([255, 255, 255])).toBe("#ffffff");
      expect(convertToHex([0, 0, 0])).toBe("#000000");
    });
  });

  describe("input validation", () => {
    it("throws error for invalid input types", () => {
      expect(() => convertToHex()).toThrow();
    });

    it("throws error for null/undefined inputs", () => {
      expect(() => convertToHex(null)).toThrow();
      expect(() => convertToHex(undefined)).toThrow();
    });

    it("throws error for out-of-range RGB values", () => {
      expect(() => convertToHex(-1, 0, 0)).toThrow();
      expect(() => convertToHex(256, 0, 0)).toThrow();
      expect(() => convertToHex(0, -1, 0)).toThrow();
      expect(() => convertToHex(0, 256, 0)).toThrow();
      expect(() => convertToHex(0, 0, -1)).toThrow();
      expect(() => convertToHex(0, 0, 256)).toThrow();
      expect(() => convertToHex({ r: -1, g: 0, b: 0 })).toThrow();
      expect(() => convertToHex({ r: 256, g: 0, b: 0 })).toThrow();
      expect(() => convertToHex([-1, 0, 0])).toThrow();
      expect(() => convertToHex([256, 0, 0])).toThrow();
    });

    it("throws error for non-numeric values", () => {
      expect(() => convertToHex("abc", 0, 0)).toThrow();
      expect(() => convertToHex(0, "abc", 0)).toThrow();
      expect(() => convertToHex(0, 0, "abc")).toThrow();
      expect(() => convertToHex({ r: "abc", g: 0, b: 0 })).toThrow();
      expect(() => convertToHex({ r: 0, g: "abc", b: 0 })).toThrow();
      expect(() => convertToHex({ r: 0, g: 0, b: "abc" })).toThrow();
      expect(() => convertToHex(["abc", 0, 0])).toThrow();
      expect(() => convertToHex([0, "abc", 0])).toThrow();
      expect(() => convertToHex([0, 0, "abc"])).toThrow();
    });

    it("throws error for wrong array length", () => {
      expect(() => convertToHex([])).toThrow();
      expect(() => convertToHex([255])).toThrow();
      expect(() => convertToHex([255, 0])).toThrow();
      expect(() => convertToHex([255, 0, 0, 255])).toThrow();
    });

    it("throws error for floating-point numbers", () => {
      expect(() => convertToHex(255.9, 0.1, 0.5)).toThrow();
      expect(() => convertToHex({ r: 255.9, g: 0.1, b: 0.5 })).toThrow();
      expect(() => convertToHex([255.9, 0.1, 0.5])).toThrow();
    });

    it("throws error for incomplete object", () => {
      expect(() => convertToHex({ r: 255 })).toThrow();
      expect(() => convertToHex({ b: 0 })).toThrow();
      expect(() => convertToHex({ g: 0 })).toThrow();
      expect(() => convertToHex({ r: 255, g: 0 })).toThrow();
      expect(() => convertToHex({ r: 255, b: 0 })).toThrow();
      expect(() => convertToHex({ b: 255, g: 0 })).toThrow();
    });

    it("throws error for invalid string format", () => {
      expect(() => convertToHex("rgb(255, 0)")).toThrow();
      expect(() => convertToHex("255, 0")).toThrow();
      expect(() => convertToHex("not a color")).toThrow();
      expect(() => convertToHex("")).toThrow();
    });

    it("throws error for negative numbers in strings", () => {
      expect(() => convertToHex("rgb(-1, 0, 0)")).toThrow();
      expect(() => convertToHex("-1, 0, 0")).toThrow();
      expect(() => convertToHex("-1 0 0")).toThrow();
    });

    it("throws error for rgba format (not yet supported)", () => {
      expect(() => convertToHex("rgba(255, 0, 0, 0.5)")).toThrow(
        "rgba not yet supported",
      );
      expect(() => convertToHex("rgba(255, 0, 0, 1)")).toThrow(
        "rgba not yet supported",
      );
    });
  });
});
