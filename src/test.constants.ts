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

// Contrast ratios between color pairs [color1, color2, ratio] - 6-digit hex
export const CONTRAST_RATIOS_HEX = [
  ["#000000", "#ffffff", 21],
  ["#000000", "#ff0000", 5.25],
  ["#000000", "#00ff00", 15.3],
  ["#000000", "#0000ff", 2.44],
  ["#000000", "#808080", 5.31],
  ["#ffffff", "#ff0000", 3.99],
  ["#ffffff", "#00ff00", 1.37],
  ["#ffffff", "#0000ff", 8.59],
  ["#ffffff", "#808080", 3.94],
  ["#ff0000", "#00ff00", 2.91],
  ["#ff0000", "#0000ff", 2.14],
  ["#00ff00", "#0000ff", 6.26],
  ["#ff8080", "#800000", 4.51],
  ["#8080ff", "#000080", 4.91],
  ["#c0c0c0", "#404040", 5.69],
  ["#808080", "#c0c0c0", 2.17],
  ["#404040", "#808080", 2.62],
];

// Contrast ratios between color pairs [color1, color2, ratio] - 3-digit hex
export const CONTRAST_RATIOS_HEX3 = [
  ["#000", "#fff", 21],
  ["#000", "#f00", 5.25],
  ["#000", "#0f0", 15.3],
  ["#000", "#00f", 2.44],
  ["#fff", "#f00", 3.99],
  ["#fff", "#00f", 8.59],
  ["#f00", "#0f0", 2.91],
  ["#0f0", "#00f", 6.26],
  ["#fff", "#ccc", 1.6],
  ["#000", "#444", 2.15],
  ["#444", "#ccc", 6.06],
];

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
