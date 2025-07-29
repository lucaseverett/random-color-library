type RGBObject = { r: number; g: number; b: number };

export function validateRGB(
  input?: unknown,
  g?: unknown,
  b?: unknown,
): boolean {
  // Helper to validate individual RGB values
  const isValidRGBValue = (value: unknown): boolean => {
    return (
      typeof value === "number" &&
      !isNaN(value) &&
      Number.isInteger(value) &&
      value >= 0 &&
      value <= 255
    );
  };

  // Case 1: Three separate numeric parameters
  if (arguments.length === 3) {
    return isValidRGBValue(input) && isValidRGBValue(g) && isValidRGBValue(b);
  }

  // Case 2: Single parameter - could be object, array, or string
  if (arguments.length === 1) {
    // Handle null/undefined
    if (input == null) {
      return false;
    }

    // Case 2a: RGB object
    if (typeof input === "object" && !Array.isArray(input)) {
      const obj = input as RGBObject;
      return (
        "r" in obj &&
        "g" in obj &&
        "b" in obj &&
        Object.keys(obj).length === 3 &&
        isValidRGBValue(obj.r) &&
        isValidRGBValue(obj.g) &&
        isValidRGBValue(obj.b)
      );
    }

    // Case 2b: RGB array
    if (Array.isArray(input)) {
      return (
        input.length === 3 &&
        isValidRGBValue(input[0]) &&
        isValidRGBValue(input[1]) &&
        isValidRGBValue(input[2])
      );
    }

    // Case 2c: RGB string
    if (typeof input === "string") {
      const trimmed = input.trim();

      // RGB function format: rgb(r, g, b) or RGB(r, g, b)
      const rgbFunctionMatch = trimmed.match(
        /^rgb\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)$/i,
      );
      if (
        rgbFunctionMatch &&
        rgbFunctionMatch[1] &&
        rgbFunctionMatch[2] &&
        rgbFunctionMatch[3]
      ) {
        const [, r, g, b] = rgbFunctionMatch;
        return (
          isValidRGBValue(parseInt(r, 10)) &&
          isValidRGBValue(parseInt(g, 10)) &&
          isValidRGBValue(parseInt(b, 10))
        );
      }

      // Comma-separated format: "r, g, b"
      const commaSeparatedMatch = trimmed.match(
        /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/,
      );
      if (
        commaSeparatedMatch &&
        commaSeparatedMatch[1] &&
        commaSeparatedMatch[2] &&
        commaSeparatedMatch[3]
      ) {
        const [, r, g, b] = commaSeparatedMatch;
        return (
          isValidRGBValue(parseInt(r, 10)) &&
          isValidRGBValue(parseInt(g, 10)) &&
          isValidRGBValue(parseInt(b, 10))
        );
      }

      // Space-separated format: "r g b"
      const spaceSeparatedMatch = trimmed.match(/^(\d+)\s+(\d+)\s+(\d+)$/);
      if (
        spaceSeparatedMatch &&
        spaceSeparatedMatch[1] &&
        spaceSeparatedMatch[2] &&
        spaceSeparatedMatch[3]
      ) {
        const [, r, g, b] = spaceSeparatedMatch;
        return (
          isValidRGBValue(parseInt(r, 10)) &&
          isValidRGBValue(parseInt(g, 10)) &&
          isValidRGBValue(parseInt(b, 10))
        );
      }

      return false;
    }

    return false;
  }

  // Invalid number of arguments
  return false;
}
