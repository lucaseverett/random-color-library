# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `npm run build` - Compiles TypeScript to JavaScript in `dist/`
- **Test**: `npm run test` - Runs all tests once with Vitest
- **Test Watch**: `npm run test:watch` - Runs tests in watch mode
- **Type Check**: `npm run tsc` - Type check without emitting files
- **Lint**: `npm run lint` - Run ESLint on all files
- **Format**: `npm run format` - Format code with Prettier

## Architecture

This is a TypeScript library that generates random colors from the Material Design color palette. The codebase is structured as follows:

### Core Structure

- **Entry Point**: `src/index.ts` - Exports main functions (`randomMaterialColor`, `getColorsByShade`)
- **Main Function**: `src/randomMaterialColor.ts` - Core color generation logic with function overloads
- **Color Data**: `src/materialColors.ts` - Material Design color palette and utility functions
- **Utilities**: `src/utils.ts` - Random number generation and hash-based consistency
- **Validation**: `src/validateHex.ts` - Hex color validation
- **Color Analysis**: `src/contrastRatio.ts`, `src/relativeLuminance.ts` - Color accessibility utilities

### Key Features

- **Consistent Colors**: When text is provided, the same color is always returned for that text using hash-based randomization
- **Flexible Options**: Support for including/excluding specific colors and shades
- **Type Safety**: Full TypeScript support with strict typing for colors and shades
- **Function Overloads**: Multiple call signatures for different use cases

### Testing Strategy

- All modules have corresponding `.test.ts` files
- Uses Vitest as the testing framework
- Tests cover color generation, validation, and utility functions

### Build Output

- Built files are output to `dist/` directory
- Only `dist/` is included in the published package
- TypeScript declarations are generated alongside JavaScript files
