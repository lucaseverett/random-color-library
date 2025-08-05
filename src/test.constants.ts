export const TEST_COLORS = {
  BLACK: {
    hex: "#000000",
    hex3: "#000",
    rgb: { r: 0, g: 0, b: 0 },
    rgbArray: [0, 0, 0],
    rgbString: "rgb(0, 0, 0)",
    rgbCommaSeparated: "0, 0, 0",
    rgbSpaceSeparated: "0 0 0",
    relativeLuminance: 0,
  },
  WHITE: {
    hex: "#ffffff",
    hex3: "#fff",
    rgb: { r: 255, g: 255, b: 255 },
    rgbArray: [255, 255, 255],
    rgbString: "rgb(255, 255, 255)",
    rgbCommaSeparated: "255, 255, 255",
    rgbSpaceSeparated: "255 255 255",
    relativeLuminance: 1,
  },
  RED: {
    hex: "#ff0000",
    hex3: "#f00",
    rgb: { r: 255, g: 0, b: 0 },
    rgbArray: [255, 0, 0],
    rgbString: "rgb(255, 0, 0)",
    rgbCommaSeparated: "255, 0, 0",
    rgbSpaceSeparated: "255 0 0",
    relativeLuminance: 0.2126,
  },
  GREEN: {
    hex: "#00ff00",
    hex3: "#0f0",
    rgb: { r: 0, g: 255, b: 0 },
    rgbArray: [0, 255, 0],
    rgbString: "rgb(0, 255, 0)",
    rgbCommaSeparated: "0, 255, 0",
    rgbSpaceSeparated: "0 255 0",
    relativeLuminance: 0.7152,
  },
  BLUE: {
    hex: "#0000ff",
    hex3: "#00f",
    rgb: { r: 0, g: 0, b: 255 },
    rgbArray: [0, 0, 255],
    rgbString: "rgb(0, 0, 255)",
    rgbCommaSeparated: "0, 0, 255",
    rgbSpaceSeparated: "0 0 255",
    relativeLuminance: 0.0722,
  },
  GRAY: {
    hex: "#808080",
    rgb: { r: 128, g: 128, b: 128 },
    rgbArray: [128, 128, 128],
    rgbString: "rgb(128, 128, 128)",
    rgbCommaSeparated: "128, 128, 128",
    rgbSpaceSeparated: "128 128 128",
    relativeLuminance: 0.21586050011389923,
  },
  LIGHT_RED: {
    hex: "#ff8080",
    rgb: { r: 255, g: 128, b: 128 },
    rgbArray: [255, 128, 128],
    rgbString: "rgb(255, 128, 128)",
    rgbCommaSeparated: "255, 128, 128",
    rgbSpaceSeparated: "255 128 128",
    relativeLuminance: 0.3825685577896843,
  },
  LIGHT_BLUE: {
    hex: "#8080ff",
    rgb: { r: 128, g: 128, b: 255 },
    rgbArray: [128, 128, 255],
    rgbString: "rgb(128, 128, 255)",
    rgbCommaSeparated: "128, 128, 255",
    rgbSpaceSeparated: "128 128 255",
    relativeLuminance: 0.27247537200567573,
  },
  LIGHT_GRAY: {
    hex: "#c0c0c0",
    rgb: { r: 192, g: 192, b: 192 },
    rgbArray: [192, 192, 192],
    rgbString: "rgb(192, 192, 192)",
    rgbCommaSeparated: "192, 192, 192",
    rgbSpaceSeparated: "192 192 192",
    relativeLuminance: 0.5271151257058131,
  },
  DARK_RED: {
    hex: "#800000",
    rgb: { r: 128, g: 0, b: 0 },
    rgbArray: [128, 0, 0],
    rgbString: "rgb(128, 0, 0)",
    rgbCommaSeparated: "128, 0, 0",
    rgbSpaceSeparated: "128 0 0",
    relativeLuminance: 0.045891942324214986,
  },
  DARK_BLUE: {
    hex: "#000080",
    rgb: { r: 0, g: 0, b: 128 },
    rgbArray: [0, 0, 128],
    rgbString: "rgb(0, 0, 128)",
    rgbCommaSeparated: "0, 0, 128",
    rgbSpaceSeparated: "0 0 128",
    relativeLuminance: 0.015585128108223528,
  },
  DARK_GRAY: {
    hex: "#404040",
    rgb: { r: 64, g: 64, b: 64 },
    rgbArray: [64, 64, 64],
    rgbString: "rgb(64, 64, 64)",
    rgbCommaSeparated: "64, 64, 64",
    rgbSpaceSeparated: "64 64 64",
    relativeLuminance: 0.05126945837404324,
  },
};

// Contrast ratios between color pairs with multiple formats
type ContrastRatioTestCase = {
  color1: {
    hex: string;
    hex3?: string;
    rgb: { r: number; g: number; b: number };
    rgbArray: [number, number, number];
  };
  color2: {
    hex: string;
    hex3?: string;
    rgb: { r: number; g: number; b: number };
    rgbArray: [number, number, number];
  };
  ratio: number;
};

export const CONTRAST_RATIOS: ContrastRatioTestCase[] = [
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    ratio: 21,
  },
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#ff0000",
      hex3: "#f00",
      rgb: { r: 255, g: 0, b: 0 },
      rgbArray: [255, 0, 0],
    },
    ratio: 5.25,
  },
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#00ff00",
      hex3: "#0f0",
      rgb: { r: 0, g: 255, b: 0 },
      rgbArray: [0, 255, 0],
    },
    ratio: 15.3,
  },
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#0000ff",
      hex3: "#00f",
      rgb: { r: 0, g: 0, b: 255 },
      rgbArray: [0, 0, 255],
    },
    ratio: 2.44,
  },
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#808080",
      rgb: { r: 128, g: 128, b: 128 },
      rgbArray: [128, 128, 128],
    },
    ratio: 5.31,
  },
  {
    color1: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    color2: {
      hex: "#ff0000",
      hex3: "#f00",
      rgb: { r: 255, g: 0, b: 0 },
      rgbArray: [255, 0, 0],
    },
    ratio: 3.99,
  },
  {
    color1: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    color2: {
      hex: "#00ff00",
      hex3: "#0f0",
      rgb: { r: 0, g: 255, b: 0 },
      rgbArray: [0, 255, 0],
    },
    ratio: 1.37,
  },
  {
    color1: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    color2: {
      hex: "#0000ff",
      hex3: "#00f",
      rgb: { r: 0, g: 0, b: 255 },
      rgbArray: [0, 0, 255],
    },
    ratio: 8.59,
  },
  {
    color1: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    color2: {
      hex: "#808080",
      rgb: { r: 128, g: 128, b: 128 },
      rgbArray: [128, 128, 128],
    },
    ratio: 3.94,
  },
  {
    color1: {
      hex: "#ff0000",
      hex3: "#f00",
      rgb: { r: 255, g: 0, b: 0 },
      rgbArray: [255, 0, 0],
    },
    color2: {
      hex: "#00ff00",
      hex3: "#0f0",
      rgb: { r: 0, g: 255, b: 0 },
      rgbArray: [0, 255, 0],
    },
    ratio: 2.91,
  },
  {
    color1: {
      hex: "#ff0000",
      hex3: "#f00",
      rgb: { r: 255, g: 0, b: 0 },
      rgbArray: [255, 0, 0],
    },
    color2: {
      hex: "#0000ff",
      hex3: "#00f",
      rgb: { r: 0, g: 0, b: 255 },
      rgbArray: [0, 0, 255],
    },
    ratio: 2.14,
  },
  {
    color1: {
      hex: "#00ff00",
      hex3: "#0f0",
      rgb: { r: 0, g: 255, b: 0 },
      rgbArray: [0, 255, 0],
    },
    color2: {
      hex: "#0000ff",
      hex3: "#00f",
      rgb: { r: 0, g: 0, b: 255 },
      rgbArray: [0, 0, 255],
    },
    ratio: 6.26,
  },
  {
    color1: {
      hex: "#ff8080",
      rgb: { r: 255, g: 128, b: 128 },
      rgbArray: [255, 128, 128],
    },
    color2: {
      hex: "#800000",
      rgb: { r: 128, g: 0, b: 0 },
      rgbArray: [128, 0, 0],
    },
    ratio: 4.51,
  },
  {
    color1: {
      hex: "#8080ff",
      rgb: { r: 128, g: 128, b: 255 },
      rgbArray: [128, 128, 255],
    },
    color2: {
      hex: "#000080",
      rgb: { r: 0, g: 0, b: 128 },
      rgbArray: [0, 0, 128],
    },
    ratio: 4.91,
  },
  {
    color1: {
      hex: "#c0c0c0",
      rgb: { r: 192, g: 192, b: 192 },
      rgbArray: [192, 192, 192],
    },
    color2: {
      hex: "#404040",
      rgb: { r: 64, g: 64, b: 64 },
      rgbArray: [64, 64, 64],
    },
    ratio: 5.69,
  },
  {
    color1: {
      hex: "#808080",
      rgb: { r: 128, g: 128, b: 128 },
      rgbArray: [128, 128, 128],
    },
    color2: {
      hex: "#c0c0c0",
      rgb: { r: 192, g: 192, b: 192 },
      rgbArray: [192, 192, 192],
    },
    ratio: 2.17,
  },
  {
    color1: {
      hex: "#404040",
      rgb: { r: 64, g: 64, b: 64 },
      rgbArray: [64, 64, 64],
    },
    color2: {
      hex: "#808080",
      rgb: { r: 128, g: 128, b: 128 },
      rgbArray: [128, 128, 128],
    },
    ratio: 2.62,
  },
  {
    color1: {
      hex: "#ffffff",
      hex3: "#fff",
      rgb: { r: 255, g: 255, b: 255 },
      rgbArray: [255, 255, 255],
    },
    color2: {
      hex: "#cccccc",
      hex3: "#ccc",
      rgb: { r: 204, g: 204, b: 204 },
      rgbArray: [204, 204, 204],
    },
    ratio: 1.6,
  },
  {
    color1: {
      hex: "#000000",
      hex3: "#000",
      rgb: { r: 0, g: 0, b: 0 },
      rgbArray: [0, 0, 0],
    },
    color2: {
      hex: "#444444",
      hex3: "#444",
      rgb: { r: 68, g: 68, b: 68 },
      rgbArray: [68, 68, 68],
    },
    ratio: 2.15,
  },
  {
    color1: {
      hex: "#444444",
      hex3: "#444",
      rgb: { r: 68, g: 68, b: 68 },
      rgbArray: [68, 68, 68],
    },
    color2: {
      hex: "#cccccc",
      hex3: "#ccc",
      rgb: { r: 204, g: 204, b: 204 },
      rgbArray: [204, 204, 204],
    },
    ratio: 6.06,
  },
];

// Legacy arrays for backward compatibility
export const CONTRAST_RATIOS_HEX = CONTRAST_RATIOS.map(
  ({ color1, color2, ratio }) => [color1.hex, color2.hex, ratio],
);

export const CONTRAST_RATIOS_HEX3 = CONTRAST_RATIOS.filter(
  ({ color1, color2 }) => color1.hex3 && color2.hex3,
).map(({ color1, color2, ratio }) => [color1.hex3, color2.hex3, ratio]);

// Invalid RGB test cases
export const INVALID_RGB_OBJECTS = [
  // Out of range values
  { r: -1, g: 0, b: 0 },
  { r: 256, g: 0, b: 0 },
  { r: 0, g: -1, b: 0 },
  { r: 0, g: 256, b: 0 },
  { r: 0, g: 0, b: -1 },
  { r: 0, g: 0, b: 256 },

  // Non-numeric values
  { r: "abc", g: 0, b: 0 },
  { r: 0, g: "abc", b: 0 },
  { r: 0, g: 0, b: "abc" },

  // Incomplete objects
  { r: 255 },
  { b: 0 },
  { g: 0 },
  { r: 255, g: 0 },
  { r: 255, b: 0 },
  { b: 255, g: 0 },

  // Floating-point numbers
  { r: 255.9, g: 0.1, b: 0.5 },
  { r: 128.5, g: 64.2, b: 32.8 },

  // NaN values
  { r: NaN, g: 0, b: 0 },
  { r: 0, g: NaN, b: 0 },
  { r: 0, g: 0, b: NaN },
];

export const INVALID_RGB_ARRAYS = [
  // Wrong length
  [],
  [255],
  [255, 0],
  [255, 0, 0, 255],

  // Non-numeric values
  ["abc", 0, 0],
  [0, "abc", 0],
  [0, 0, "abc"],

  // Out of range values
  [-1, 0, 0],
  [256, 0, 0],
  [0, -1, 0],
  [0, 256, 0],
  [0, 0, -1],
  [0, 0, 256],

  // Floating-point numbers
  [255.9, 0.1, 0.5],
  [128.5, 64.2, 32.8],

  // NaN values
  [NaN, 0, 0],
  [0, NaN, 0],
  [0, 0, NaN],
];

export const INVALID_RGB_STRINGS = [
  // Invalid formats
  "rgb(255, 0)",
  "255, 0",
  "not a color",
  "",

  // Negative numbers
  "rgb(-1, 0, 0)",
  "-1, 0, 0",
  "-1 0 0",

  // RGBA format (not RGB)
  "rgba(255, 0, 0, 0.5)",
  "rgba(255, 0, 0, 1)",

  // Out of range values
  "rgb(256, 0, 0)",
  "rgb(0, 256, 0)",
  "rgb(0, 0, 256)",
  "256, 0, 0",
  "256 0 0",
];

export const VALID_RGB_STRINGS = [
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "rgb(128, 128, 128)",
  "  rgb( 255 , 255 , 255 )  ",
  "255, 255, 255",
  "0, 0, 0",
  "rgb(255 255 255)",
  "255 255 255",
  "RGB(255 255 255)",
];

export const INVALID_RGB_SEPARATE_PARAMS = [
  // Out of range
  [-1, 0, 0],
  [256, 0, 0],
  [0, -1, 0],
  [0, 256, 0],
  [0, 0, -1],
  [0, 0, 256],

  // Non-numeric
  ["abc", 0, 0],
  [0, "abc", 0],
  [0, 0, "abc"],

  // Floating-point
  [255.9, 0.1, 0.5],
  [128.5, 64.2, 32.8],

  // NaN
  [NaN, 0, 0],
  [0, NaN, 0],
  [0, 0, NaN],

  // Invalid number of arguments
  [255, 0],
  [255],
];

export const INVALID_RGB_EDGE_CASES = [
  // No arguments / wrong types
  [null],
  [undefined],
  [true],
  [Symbol()],
  [function () {}],
];

// Hex alpha conversion test data
export const HEX_ALPHA_CONVERSIONS = [
  // Fully opaque (100%)
  {
    originalHex: "#ff0000",
    opacityPercent: 100,
    convertedHex: "#ff0000ff",
  },
  {
    originalHex: "#00ff00",
    opacityPercent: 100,
    convertedHex: "#00ff00ff",
  },
  {
    originalHex: "#0000ff",
    opacityPercent: 100,
    convertedHex: "#0000ffff",
  },

  // 50% opacity
  {
    originalHex: "#ff0000",
    opacityPercent: 50,
    convertedHex: "#ff000080",
  },
  {
    originalHex: "#00ff00",
    opacityPercent: 50,
    convertedHex: "#00ff0080",
  },
  {
    originalHex: "#0000ff",
    opacityPercent: 50,
    convertedHex: "#0000ff80",
  },

  // 25% opacity
  {
    originalHex: "#ffffff",
    opacityPercent: 25,
    convertedHex: "#ffffff40",
  },
  {
    originalHex: "#000000",
    opacityPercent: 25,
    convertedHex: "#00000040",
  },
  {
    originalHex: "#808080",
    opacityPercent: 25,
    convertedHex: "#80808040",
  },

  // 75% opacity
  {
    originalHex: "#ff8080",
    opacityPercent: 75,
    convertedHex: "#ff8080bf",
  },
  {
    originalHex: "#8080ff",
    opacityPercent: 75,
    convertedHex: "#8080ffbf",
  },
  {
    originalHex: "#80ff80",
    opacityPercent: 75,
    convertedHex: "#80ff80bf",
  },

  // 10% opacity
  {
    originalHex: "#ff6b6b",
    opacityPercent: 10,
    convertedHex: "#ff6b6b1a",
  },
  {
    originalHex: "#4ecdc4",
    opacityPercent: 10,
    convertedHex: "#4ecdc41a",
  },
  {
    originalHex: "#45b7d1",
    opacityPercent: 10,
    convertedHex: "#45b7d11a",
  },

  // 90% opacity
  {
    originalHex: "#2ecc71",
    opacityPercent: 90,
    convertedHex: "#2ecc71e6",
  },
  {
    originalHex: "#e74c3c",
    opacityPercent: 90,
    convertedHex: "#e74c3ce6",
  },
  {
    originalHex: "#f39c12",
    opacityPercent: 90,
    convertedHex: "#f39c12e6",
  },

  // Edge cases - fully transparent (0%)
  {
    originalHex: "#ffffff",
    opacityPercent: 0,
    convertedHex: "#ffffff00",
  },
  {
    originalHex: "#000000",
    opacityPercent: 0,
    convertedHex: "#00000000",
  },

  // 3-character hex codes
  {
    originalHex: "#f00",
    opacityPercent: 50,
    convertedHex: "#ff000080",
  },
  {
    originalHex: "#0f0",
    opacityPercent: 75,
    convertedHex: "#00ff00bf",
  },
  {
    originalHex: "#00f",
    opacityPercent: 25,
    convertedHex: "#0000ff40",
  },

  // Various common opacity values
  {
    originalHex: "#9b59b6",
    opacityPercent: 33,
    convertedHex: "#9b59b654",
  },
  {
    originalHex: "#3498db",
    opacityPercent: 67,
    convertedHex: "#3498dbab",
  },
  {
    originalHex: "#e67e22",
    opacityPercent: 80,
    convertedHex: "#e67e22cc",
  },
  {
    originalHex: "#1abc9c",
    opacityPercent: 20,
    convertedHex: "#1abc9c33",
  },
];

// Invalid hex color test cases
export const INVALID_HEX_COLORS = [
  // Invalid lengths
  "#ff",
  "ff",
  "#ffff",
  "ffff",
  "#fffff",
  "fffff",
  "#fffffff",
  "fffffff",

  // Invalid characters
  "#ggg",
  "ggg",
  "#gggggg",
  "gggggg",
  "#xyz",
  "xyz",
  "#12345g",
  "12345g",

  // Empty and minimal
  "",
  "#",

  // With spaces
  "# ff",
  "#ff f",
  " #fff",
  " fff",
  "ff f",
  "fff ",

  // Multiple hash symbols
  "##fff",
  "#f#ff",
];
