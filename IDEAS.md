# Project Roadmap: Library, CLI, and Web UI

This document outlines the vision for evolving the project into a comprehensive suite of color tools. The project will consist of three main components: the core NPM library, a command-line interface (CLI), and a public-facing website with a graphical user interface (UI).

## 1. Core Library (`npm` package)

The library is the foundational engine providing all color generation and manipulation logic. All new features should be implemented in the core library first.

### Feature Areas

#### A. Expand Color Palettes

- **Tailwind CSS:**
  - Implement `randomTailwindColor()`.
  - Use the modern v4 palette, storing both `hex` and `oklch` values.
  - Provide a `format` option to return either `hex` (default) or `oklch`.
  - Include standard filtering for colors and shades.
- **Other Palettes:**
  - Bootstrap.

#### B. Generic Color Generation

- `randomHexColor()`: Generate a truly random hex value.
- `randomRgbColor()` / `randomHslColor()`: Generate colors in different formats, with potential options for hue, saturation, and lightness control.

#### C. Color Utility Functions

- **Expose `getColorsByShade`:** Make this function a public API and create documentation for it.
- **Color Conversion:** `convertColor(color, toFormat)` for HEX, RGB, HSL, and OKLCH.
- **Color Manipulation:** `lighten()`, `darken()`, `saturate()`, `desaturate()`.

#### D. Accessibility Features

- **Contrast Checker:** `getContrastRatio(color1, color2)` to calculate WCAG contrast.
- **Compliant Text Finder:** `getCompliantTextColor(backgroundColor)` to find a readable foreground color.

---

## 2. Command-Line Interface (CLI)

A powerful CLI to expose all library functions directly in the terminal, turning it into a utility belt for developers.

### Implementation Plan

1.  **Framework:** Add a dependency like `commander.js` or `yargs` for robust command parsing.
2.  **Entry Point:** Create a `src/cli.ts` file.
3.  **`package.json`:** Add a `bin` field to register the `random-color` command.

### Command Structure

- **Generate:**
  - `random-color generate tailwind --format oklch`
  - `random-color generate hex`
- **Utilities:**
  - `random-color util contrast <color1> <color2>`
  - `random-color util convert <color> --to hsl`
  - `random-color util compliant-text <background>`
  - `random-color util darken <color> --amount 15`

---

## 3. Website UI (randomcolorlibrary.com)

A user-friendly, visual interface for the library, making it accessible to everyone, including non-developers.

### Implementation Plan

1.  **Framework:** Choose a modern frontend framework (e.g., React, Vue, Svelte).
2.  **Design:** Create a clean, single-page application design.
3.  **Features:** The UI should visually expose all the core library's features:
    - A large color swatch that updates when a random color is generated.
    - Dropdowns and multi-selects to configure palettes, colors, shades, and options.
    - Toggles to switch between `hex`, `rgb`, and `oklch` output.
    - Dedicated sections for the utility functions (contrast checker, color converter, etc.) with color pickers and input fields.
    - "Copy to clipboard" buttons for all outputs.
