// Generates a consistent random integer between 0 and max for the given key
export function randomIntFromHash(key: string, max: number) {
  const hash = murmur3_32(key);
  return hash % max;
}

// Generates a random integer between 0 and max
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

/**
 * MurmurHash3 is a non-cryptographic hash function suitable for general hash-based lookup.
 * This implementation processes the input string in 4-byte chunks and then handles any
 * remaining bytes. The constants and mixing steps are based on the MurmurHash3 algorithm.
 *
 * https://en.wikipedia.org/wiki/MurmurHash
 */
export function murmur3_32(key: string) {
  // Constants used in the algorithm.
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;
  const r1 = 15;
  const r2 = 13;
  const m = 5;
  const n = 0xe6546b64;

  // Initialize hash value to 0
  let hash = 0;

  // Convert the key string to bytes
  const bytes = new TextEncoder().encode(key);
  const dataView = new DataView(bytes.buffer);

  // Calculate the number of 4-byte chunks
  const chunks = Math.floor(bytes.length / 4);

  // Process each 4-byte chunk
  for (let i = 0; i < chunks; i++) {
    // Read 4 bytes using little-endian
    let k = dataView.getUint32(i * 4, true);

    // Begin mixing the key
    k = Math.imul(k, c1);
    k = (k << r1) | (k >>> (32 - r1));
    k = Math.imul(k, c2);

    // Mix the hash with the key
    hash ^= k;
    hash = (hash << r2) | (hash >>> (32 - r2));
    hash = Math.imul(hash, m) + n;
  }

  // Handle the remaining bytes (if any)
  const remainder = bytes.length % 4;
  if (remainder) {
    let k = 0;
    for (let i = 0; i < remainder; i++) {
      // Construct value from the remaining bytes
      k |= (bytes[chunks * 4 + i] || 0) << (i * 8);
    }

    // Mix the remaining bytes
    k = Math.imul(k, c1);
    k = (k << r1) | (k >>> (32 - r1));
    k = Math.imul(k, c2);
    hash ^= k;
  }

  // Finalize the hash
  hash ^= bytes.length;
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;

  // Return the positive 32-bit integer
  return hash >>> 0;
}
