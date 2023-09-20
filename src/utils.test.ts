import { describe, expect, test } from "bun:test";
import { randomIntFromHash, getRandomInt, murmur3_32 } from "./utils.js";

describe("randomIntFromHash", () => {
  test("generates a consistent integer for the same text", () => {
    const text = "text to use";
    const length = 100;
    for (let i = 0; i < 1000; i++) {
      const int1 = randomIntFromHash(text, length);
      const int2 = randomIntFromHash(text, length);
      expect(int1).toEqual(int2);
    }
  });
});
describe("getRandomInt", () => {
  test("returns integer values", () => {
    for (let i = 0; i < 10; i++) {
      const result = getRandomInt(100);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
  test("returns values within bounds", () => {
    const max = 10;
    for (let i = 0; i < 10; i++) {
      const randomInt = getRandomInt(max);
      expect(randomInt).toBeGreaterThanOrEqual(0);
      expect(randomInt).toBeLessThan(max);
    }
  });
});
describe("murmur3_32", () => {
  test("returns a stable hash for the same text", () => {
    const text = "input one";
    const hash1 = murmur3_32(text);
    const hash2 = murmur3_32(text);
    expect(hash1).toEqual(hash2);
  });
  test("returns different hashes for different text", () => {
    const text1 = "input one";
    const text2 = "input two";
    const hash1 = murmur3_32(text1);
    const hash2 = murmur3_32(text2);
    expect(hash1).not.toEqual(hash2);
  });
});
