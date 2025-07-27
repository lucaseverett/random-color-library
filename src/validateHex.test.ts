import { describe, expect, test } from "vitest";

import { validateHex } from "./validateHex.js";

describe("validateHex", () => {
  describe("valid hex colors", () => {
    test("should accept 3-character hex colors", () => {
      expect(validateHex("#fff")).toBe(true);
      expect(validateHex("#000")).toBe(true);
      expect(validateHex("#abc")).toBe(true);
      expect(validateHex("#123")).toBe(true);
      expect(validateHex("#def")).toBe(true);
    });

    test("should accept 6-character hex colors", () => {
      expect(validateHex("#ffffff")).toBe(true);
      expect(validateHex("#000000")).toBe(true);
      expect(validateHex("#abcdef")).toBe(true);
      expect(validateHex("#123456")).toBe(true);
      expect(validateHex("#fedcba")).toBe(true);
    });

    test("should accept uppercase hex colors", () => {
      expect(validateHex("#FFF")).toBe(true);
      expect(validateHex("#ABCDEF")).toBe(true);
      expect(validateHex("#ABC")).toBe(true);
    });

    test("should accept mixed case hex colors", () => {
      expect(validateHex("#AbC")).toBe(true);
      expect(validateHex("#aBcDeF")).toBe(true);
    });
  });

  describe("valid hex colors without hash", () => {
    test("should accept 3-character hex colors without hash", () => {
      expect(validateHex("fff")).toBe(true);
      expect(validateHex("000")).toBe(true);
      expect(validateHex("abc")).toBe(true);
      expect(validateHex("123")).toBe(true);
      expect(validateHex("def")).toBe(true);
    });

    test("should accept 6-character hex colors without hash", () => {
      expect(validateHex("ffffff")).toBe(true);
      expect(validateHex("000000")).toBe(true);
      expect(validateHex("abcdef")).toBe(true);
      expect(validateHex("123456")).toBe(true);
      expect(validateHex("fedcba")).toBe(true);
    });

    test("should accept uppercase hex colors without hash", () => {
      expect(validateHex("FFF")).toBe(true);
      expect(validateHex("ABCDEF")).toBe(true);
      expect(validateHex("ABC")).toBe(true);
    });

    test("should accept mixed case hex colors without hash", () => {
      expect(validateHex("AbC")).toBe(true);
      expect(validateHex("aBcDeF")).toBe(true);
    });
  });

  describe("invalid hex colors", () => {
    test("should reject colors with invalid length", () => {
      expect(validateHex("#ff")).toBe(false);
      expect(validateHex("#ffff")).toBe(false);
      expect(validateHex("#fffff")).toBe(false);
      expect(validateHex("#fffffff")).toBe(false);
      expect(validateHex("ff")).toBe(false);
      expect(validateHex("ffff")).toBe(false);
      expect(validateHex("fffff")).toBe(false);
      expect(validateHex("fffffff")).toBe(false);
    });

    test("should reject colors with invalid characters", () => {
      expect(validateHex("#ggg")).toBe(false);
      expect(validateHex("#gggggg")).toBe(false);
      expect(validateHex("#xyz")).toBe(false);
      expect(validateHex("#12345g")).toBe(false);
      expect(validateHex("ggg")).toBe(false);
      expect(validateHex("gggggg")).toBe(false);
      expect(validateHex("xyz")).toBe(false);
      expect(validateHex("12345g")).toBe(false);
    });

    test("should reject empty strings and non-strings", () => {
      expect(validateHex("")).toBe(false);
      expect(validateHex("#")).toBe(false);
    });

    test("should reject strings with spaces", () => {
      expect(validateHex("# ff")).toBe(false);
      expect(validateHex("#ff f")).toBe(false);
      expect(validateHex(" #fff")).toBe(false);
      expect(validateHex(" fff")).toBe(false);
      expect(validateHex("ff f")).toBe(false);
      expect(validateHex("fff ")).toBe(false);
    });

    test("should reject multiple hash symbols", () => {
      expect(validateHex("##fff")).toBe(false);
      expect(validateHex("#f#ff")).toBe(false);
    });
  });
});
