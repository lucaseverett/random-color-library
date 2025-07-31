# Random Color Library

Random Color Library can be used to generate random colors. For the initial release only the Material Color palette can be used to generate a color, but Tailwind will soon be added as well as a more generic option.

A consistent color can be generated from text. When text is provided, the same random color will always be returned for the given text.

## Installation

Install using your preferred package manager, or download the latest version from [Releases](https://github.com/lucaseverett/random-color-library/releases).

```bash
npm install random-color-library
```

## Random Colors

Coming soon

## Tailwind Colors

Coming soon

## Material Colors

```javascript
import { randomMaterialColor } from "random-color-library";
```

### Generate a Random Color

```javascript
randomMaterialColor();
// Returns a hex color
```

### Generate a Consistent Random Color from Text

```javascript
randomMaterialColor("text to use");
// Returns a consistent hex color for the text
```

### Specify Colors

```javascript
randomMaterialColor({ colors: ["red", "yellow"] });
// Returns a hex color from the "red" or "yellow" color group
```

### Specify Shades

```javascript
randomMaterialColor({ shades: ["500", "700"] });
// Returns a hex color from the "500" or "700" shade
```

### Exclude Colors

```javascript
randomMaterialColor({ excludeColors: ["red", "yellow"] });
// Returns a hex color not from the "red" or "yellow" color group
```

### Exclude Shades

```javascript
randomMaterialColor({ excludeShades: ["500", "700"] });
// Returns a hex color not from the "500" or "700" shade
```

### Combine Colors and Shades

```javascript
randomMaterialColor("string to use", {
  colors: ["red", "yellow"],
  shades: ["500", "700"],
});
// Returns a consistent hex color for the text and options
```

### Combine Exclude Colors and Exclude Shades

```javascript
randomMaterialColor("string to use", {
  excludeColors: ["red", "yellow"],
  excludeShades: ["500", "700"],
});
// Returns a consistent hex color for the text and options
```

### Get all Colors for a Specific Shade

```javascript
import { getColorsByShade } from "random-color-library";

getColorsByShade("500");
// Returns an array of all hex colors for the "500" shade
```

## Utility Functions

### Validate Hex Color

Validate whether a string is a valid hex color format. Supports both 3 and 6 character hex codes, with or without the `#` prefix.

```javascript
import { validateHex } from "random-color-library";

validateHex("#ff5722"); // Returns true
validateHex("ff5722"); // Returns true
validateHex("#f57"); // Returns true
validateHex("f57"); // Returns true
validateHex("purple"); // Returns false
```

### Validate RGB Color

Validate whether input represents a valid RGB color. Supports multiple input formats including objects, arrays, strings, and separate parameters.

```javascript
import { validateRGB } from "random-color-library";

// Object format
validateRGB({ r: 255, g: 87, b: 34 }); // Returns true

// Array format
validateRGB([255, 87, 34]); // Returns true

// String formats
validateRGB("rgb(255, 87, 34)"); // Returns true
validateRGB("255, 87, 34"); // Returns true
validateRGB("255 87 34"); // Returns true

// Separate parameters
validateRGB(255, 87, 34); // Returns true
```

### Calculate Relative Luminance

Calculate the relative luminance of a color for accessibility calculations. Supports multiple input formats.

```javascript
import { relativeLuminance } from "random-color-library";

// Hex string format
relativeLuminance("#ff5722"); // Returns a number between 0 and 1
relativeLuminance("ff5722"); // Works without # prefix
relativeLuminance("#f57"); // Supports 3-digit hex

// RGB object format
relativeLuminance({ r: 255, g: 87, b: 34 });

// RGB array format
relativeLuminance([255, 87, 34]);

// RGB string formats
relativeLuminance("rgb(255, 87, 34)");
relativeLuminance("255, 87, 34");
relativeLuminance("255 87 34");

// Separate RGB parameters
relativeLuminance(255, 87, 34);
```

### Calculate Contrast Ratio

Calculate the contrast ratio between two colors for accessibility compliance.

```javascript
import { contrastRatio } from "random-color-library";

contrastRatio("#ffffff", "#000000");
// Returns 21 (the maximum contrast ratio between white and black)

contrastRatio("#ff5722", "#ffffff");
// Returns the contrast ratio between the two colors
```

### Convert RGB to Hex

Convert RGB color values to hexadecimal format.

```javascript
import { convertToHex } from "random-color-library";

// Object format
convertToHex({ r: 255, g: 87, b: 34 }); // Returns "#ff5722"

// Array format
convertToHex([255, 87, 34]); // Returns "#ff5722"

// String formats
convertToHex("rgb(255, 87, 34)"); // Returns "#ff5722"
convertToHex("255, 87, 34"); // Returns "#ff5722"
convertToHex("255 87 34"); // Returns "#ff5722"

// Separate parameters
convertToHex(255, 87, 34); // Returns "#ff5722"
```

### Convert Hex to RGB

Convert hexadecimal color values to RGB format.

```javascript
import { convertToRGB } from "random-color-library";

// 6-digit hex with # prefix
convertToRGB("#ff5722"); // Returns { r: 255, g: 87, b: 34 }

// 6-digit hex without # prefix
convertToRGB("ff5722"); // Returns { r: 255, g: 87, b: 34 }

// 3-digit hex (expanded to 6-digit)
convertToRGB("#f57"); // Returns { r: 255, g: 85, b: 119 }
convertToRGB("f57"); // Returns { r: 255, g: 85, b: 119 }

// Case insensitive
convertToRGB("#FF5722"); // Returns { r: 255, g: 87, b: 34 }
convertToRGB("FF5722"); // Returns { r: 255, g: 87, b: 34 }
```

## Development

### Installation

```sh
npm install
```

### Run tests once

```sh
npm run test
```

### Run tests and watch for changes

```sh
npm run test:watch
```

## Type Checking

### Check types with TypeScript

```sh
npm run tsc
```

## Linting

### Lint with ESLint

```sh
npm run lint
```

### Format with Prettier

```sh
npm run format
```

## Building

```sh
npm run build
```
