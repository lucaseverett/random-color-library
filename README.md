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
const color = randomMaterialColor();
// Returns a hex color
```

### Generate a Consistent Random Color from Text

```javascript
const color = randomMaterialColor("text to use");
// Returns a consistent hex color for the text
```

### Specify Colors

```javascript
const color = randomMaterialColor({ colors: ["red", "yellow"] });
// Returns a hex color from the "red" or "yellow" color group
```

### Specify Shades

```javascript
const color = randomMaterialColor({ shades: ["500", "700"] });
// Returns a hex color from the "500" or "700" shade
```

### Exclude Colors

```javascript
const color = randomMaterialColor({ excludeColors: ["red", "yellow"] });
// Returns a hex color not from the "red" or "yellow" color group
```

### Exclude Shades

```javascript
const color = randomMaterialColor({ excludeShades: ["500", "700"] });
// Returns a hex color not from the "500" or "700" shade
```

### Combine Colors and Shades

```javascript
const color = randomMaterialColor("string to use", {
  colors: ["red", "yellow"],
  shades: ["500", "700"],
});
// Returns a consistent hex color for the text and options
```

### Combine Exclude Colors and Exclude Shades

```javascript
const color = randomMaterialColor("string to use", {
  excludeColors: ["red", "yellow"],
  excludeShades: ["500", "700"],
});
// Returns a consistent hex color for the text and options
```

## Development

Random Color Library uses [Bun](https://bun.sh/) as a package manager and test runner.

### Installation

```sh
bun install
```

### Run tests once

```sh
bun run test
```

### Run tests and watch for changes

```sh
bun run test:watch
```

## Linting

### Lint with ESLint

```sh
bun run lint
```

### Format with Prettier

```sh
bun run format
```

## Building

```sh
bun run build
```
