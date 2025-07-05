import { describe, expect, it } from "vitest";

import { getColorsByShade, materialColors } from "./materialColors.js";
import { randomMaterialColor } from "./randomMaterialColor.js";

describe("randomMaterialColor", () => {
  it("returns a random color", () => {
    const random = randomMaterialColor();
    expect(random).toMatch(/#[0-9a-f]{6}/i);
  });
  it("returns a stable random color when given text", () => {
    const random = randomMaterialColor("text to use");
    const random2 = randomMaterialColor("text to use");
    expect(random).toMatch(/#[0-9a-f]{6}/i);
    expect(random).toBe(random2);
  });
  it("throws an error when given an invalid color", () => {
    // @ts-expect-error: Invalid color
    expect(() => randomMaterialColor({ colors: ["invalidColor"] })).toThrow(
      /Invalid color provided/,
    );
  });
  it("returns a random color when given options with colors", () => {
    const random = randomMaterialColor({ colors: ["red", "yellow"] });
    const isRandomInRed = Object.values(materialColors["red"]).includes(random);
    const isRandomInYellow = Object.values(materialColors["yellow"]).includes(
      random,
    );
    expect(isRandomInRed || isRandomInYellow).toBeTruthy();
  });
  it("throws an error when given an invalid shade", () => {
    // @ts-expect-error: Invalid shade
    expect(() => randomMaterialColor({ shades: ["invalidShade"] })).toThrow(
      /Invalid shade provided/,
    );
  });
  it("returns a random color when given options with shades", () => {
    const random = randomMaterialColor({ shades: ["500", "700"] });
    const isRandomIn500 = getColorsByShade("500").includes(random);
    const isRandomIn700 = getColorsByShade("700").includes(random);
    expect(isRandomIn500 || isRandomIn700).toBeTruthy();
  });
  it("returns a specific color when given options with a specific color and shade", () => {
    const random = randomMaterialColor({ colors: ["red"], shades: ["700"] });
    expect(random).toBe("#d32f2f");
  });
  it("returns a random color when given options with colors and shades", () => {
    const random = randomMaterialColor({
      colors: ["red", "yellow"],
      shades: ["500", "700"],
    });
    const isRed500 = materialColors["red"]["500"] === random;
    const isYellow500 = materialColors["yellow"]["500"] === random;
    const isRed700 = materialColors["red"]["700"] === random;
    const isYellow700 = materialColors["yellow"]["700"] === random;
    expect(isRed500 || isYellow500 || isRed700 || isYellow700).toBeTruthy();
  });
  it("throws an error when given an invalid exclude shade", () => {
    // @ts-expect-error: Invalid shade
    // prettier-ignore
    expect(() => randomMaterialColor({ excludeShades: ["invalidShade"] })
    ).toThrow(/Invalid shade provided/);
  });
  it("returns a random color when given options with excluded shades", () => {
    const random = randomMaterialColor({ excludeShades: ["500", "700"] });
    for (let i = 0; i < 1000; i++) {
      const isRandomIn500 = getColorsByShade("500").includes(random);
      const isRandomIn700 = getColorsByShade("700").includes(random);
      expect(isRandomIn500 || isRandomIn700).toBeFalsy();
    }
  });
  it("throws an error when given an invalid exclude color", () => {
    // @ts-expect-error: Invalid color
    // prettier-ignore
    expect(() => randomMaterialColor({ excludeColors: ["invalidColor"] })
    ).toThrow(/Invalid color provided/);
  });
  it("returns a random color when given options with excluded colors", () => {
    const random = randomMaterialColor({ excludeColors: ["red", "yellow"] });
    for (let i = 0; i < 1000; i++) {
      const isRandomInRed = Object.values(materialColors["red"]).includes(
        random,
      );
      const isRandomInYellow = Object.values(materialColors["yellow"]).includes(
        random,
      );
      expect(isRandomInRed || isRandomInYellow).toBeFalsy();
    }
  });
  it("returns a random color when given options with excluded colors and excluded shades", () => {
    const random = randomMaterialColor({
      excludeColors: ["red", "yellow"],
      excludeShades: ["500", "700"],
    });
    for (let i = 0; i < 1000; i++) {
      const isRandomInRed = Object.values(materialColors["red"]).includes(
        random,
      );
      const isRandomInYellow = Object.values(materialColors["yellow"]).includes(
        random,
      );
      const isRandomIn500 = getColorsByShade("500").includes(random);
      const isRandomIn700 = getColorsByShade("700").includes(random);
      expect(
        isRandomInRed || isRandomInYellow || isRandomIn500 || isRandomIn700,
      ).toBeFalsy();
    }
  });
  it("throws an error when given both colors and exclude colors", () => {
    expect(() =>
      randomMaterialColor({ colors: ["red"], excludeColors: ["red"] }),
    ).toThrow(/Cannot provide both colors and excludeColors/);
  });
  it("throws an error when given both shades and exclude shades", () => {
    expect(() =>
      randomMaterialColor({ shades: ["500"], excludeShades: ["500"] }),
    ).toThrow(/Cannot provide both shades and excludeShades/);
  });
  it("returns a stable random color when given text and options", () => {
    const random = randomMaterialColor("text to use", {
      colors: ["red", "yellow"],
      shades: ["500", "700"],
    });
    const random2 = randomMaterialColor("text to use", {
      colors: ["red", "yellow"],
      shades: ["500", "700"],
    });
    const isRed500 = materialColors["red"]["500"] === random;
    const isYellow500 = materialColors["yellow"]["500"] === random;
    const isRed700 = materialColors["red"]["700"] === random;
    const isYellow700 = materialColors["yellow"]["700"] === random;
    expect(isRed500 || isYellow500 || isRed700 || isYellow700).toBeTruthy();
    expect(random).toBe(random2);
  });
  it("throws an error when given an invalid option", () => {
    // @ts-expect-error: Invalid option
    expect(() => randomMaterialColor({ invalidOption: "value" })).toThrow(
      /Invalid option provided/,
    );
  });
});
