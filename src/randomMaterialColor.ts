import {
  listOfColors,
  listOfShades,
  materialColors,
} from "./materialColors.js";
import { getRandomInt, randomIntFromHash } from "./utils.js";

// Type definitions
type HexColor = `#${string}`;
type listOfColors = (typeof listOfColors)[number];
type listOfShades = (typeof listOfShades)[number];
type MaterialColorOptions = {
  colors?: listOfColors[];
  excludeColors?: listOfColors[];
  excludeShades?: listOfShades[];
  shades?: listOfShades[];
};

// Type guard to check if a value is a valid shade
function isListOfShades(value: unknown): value is listOfShades {
  return listOfShades.includes(value as listOfShades);
}

// Type guard to check if a value is a valid color
function isListOfColors(value: unknown): value is listOfColors {
  return listOfColors.includes(value as listOfColors);
}

// Overloads for the randomMaterialColor function
export function randomMaterialColor(): HexColor;
export function randomMaterialColor(text: string): HexColor;
export function randomMaterialColor(options: MaterialColorOptions): HexColor;
export function randomMaterialColor(
  text: string,
  options: MaterialColorOptions,
): HexColor;
export function randomMaterialColor(
  arg1?: string | MaterialColorOptions,
  arg2?: MaterialColorOptions,
): HexColor {
  // Determines the text and options based on the arguments
  const options =
    typeof arg1 === "object" ? arg1 : typeof arg2 === "object" ? arg2 : {};
  const text = typeof arg1 === "string" ? arg1 : undefined;

  // Error handling for invalid options
  if (
    Object.keys(options).some(
      (key) =>
        !["colors", "shades", "excludeColors", "excludeShades"].includes(key),
    )
  ) {
    throw new Error("Invalid option provided");
  }
  if (options.colors && options.excludeColors) {
    throw new Error("Cannot provide both colors and excludeColors");
  }
  if (options.shades && options.excludeShades) {
    throw new Error("Cannot provide both shades and excludeShades");
  }
  if (options.colors && !options.colors.every(isListOfColors)) {
    throw new Error("Invalid color provided");
  }
  if (options.shades && !options.shades.every(isListOfShades)) {
    throw new Error("Invalid shade provided");
  }
  if (options.excludeColors && !options.excludeColors.every(isListOfColors)) {
    throw new Error("Invalid color provided");
  }
  if (options.excludeShades && !options.excludeShades.every(isListOfShades)) {
    throw new Error("Invalid shade provided");
  }

  // Determines the list of colors and shades based on the options
  let colors = options?.colors || listOfColors;
  let shades = options?.shades || listOfShades;
  let color;
  let shade;

  // Filters the excluded colors and shades
  if (options.excludeShades) {
    shades = shades.filter((shade) => !options.excludeShades?.includes(shade));
  }
  if (options.excludeColors) {
    colors = colors.filter((color) => !options.excludeColors?.includes(color));
  }

  if (!text) {
    // Selects a random color and shade if no text is provided
    color = colors[getRandomInt(colors.length)];
    shade = shades[getRandomInt(shades.length)];
  } else {
    // Selects a consistent color and shade for the provided text
    color = colors[randomIntFromHash(text, colors.length)];
    shade = shades[randomIntFromHash(text, shades.length)];
  }

  // Error handling for invalid color and shade
  if (!color) {
    throw new Error("No color found");
  }
  if (!shade) {
    throw new Error("No shade found");
  }

  // Returns the hex color
  return materialColors?.[color]?.[shade] as HexColor;
}
