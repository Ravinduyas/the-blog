/** Escapes user input so it can be dropped into a RegExp as a literal. */
export function escapeRegex(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Case-insensitive "contains" matcher built from untrusted search text. */
export function containsRegex(input: string): RegExp {
  return new RegExp(escapeRegex(input), 'i');
}
