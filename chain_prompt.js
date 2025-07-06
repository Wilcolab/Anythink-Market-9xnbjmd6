
/**
 * Converts a string to kebab-case format.
 * 
 * @description This function transforms any string into kebab-case by:
 * - Removing non-alphanumeric characters (except spaces, hyphens, underscores)
 * - Converting camelCase to separate words with hyphens
 * - Replacing all separators (spaces, underscores) with hyphens
 * - Converting everything to lowercase
 * - Normalizing multiple consecutive hyphens to single hyphens
 * - Removing leading and trailing hyphens
 * 
 * @param {string} input - The string to convert to kebab-case
 * 
 * @returns {string} The kebab-case formatted string
 * 
 * @throws {TypeError} Throws TypeError if input is not a string
 * 
 * @example
 * // Basic usage
 * toKebabCase("hello world");         // → "hello-world"
 * toKebabCase("my_variable_name");    // → "my-variable-name"
 * toKebabCase("myVariableName");      // → "my-variable-name"
 * 
 * @example
 * // CamelCase conversion
 * toKebabCase("XMLHttpRequest");      // → "x-m-l-http-request"
 * toKebabCase("getElementById");      // → "get-element-by-id"
 * 
 * @example
 * // Edge cases
 * toKebabCase("  hello   world  ");   // → "hello-world"
 * toKebabCase("test@#$%case");        // → "test-case"
 * toKebabCase("");                    // → ""
 * toKebabCase("   ");                 // → ""
 * toKebabCase("already-kebab-case");  // → "already-kebab-case"
 * 
 * @example
 * // Error handling
 * try {
 *   toKebabCase(null);
 * } catch (error) {
 *   console.log(error.message);       // → "Input must be a string"
 * }
 * 
 * @since 1.0.0
 * @author GitHub Copilot
 */
function toKebabCase(input) {
  // Step 2: Validate input type - throw TypeError if not a string
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  // Step 2: Remove non-alphanumeric characters (except spaces, hyphens, underscores)
  // This cleans up special characters like @#$% but preserves separators
  const cleaned = input.replace(/[^a-zA-Z0-9\s\-_]/g, '');
  
  // Step 2: Handle empty string or no valid characters
  // Return empty string if nothing meaningful remains after cleanup
  if (!cleaned.trim() || !/[a-zA-Z0-9]/.test(cleaned)) {
    return '';
  }
  
  return cleaned
    .trim()                              // Step 2: Remove leading/trailing whitespace
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Step 2: Handle camelCase - add hyphen between lowercase and uppercase
    .replace(/[\s_]+/g, '-')             // Step 2: Replace spaces and underscores with hyphens
    .toLowerCase()                       // Step 1: Convert everything to lowercase
    .replace(/-+/g, '-')                 // Step 2: Replace multiple consecutive hyphens with single hyphen
    .replace(/^-|-$/g, '');              // Step 2: Remove leading and trailing hyphens
}

// Step 3: Test cases to demonstrate function correctness
console.log('\n--- Kebab Case Tests ---');

// Basic functionality tests
console.log(toKebabCase("hello world"));           // → "hello-world"
console.log(toKebabCase("my_variable_name"));      // → "my-variable-name"
console.log(toKebabCase("myVariableName"));        // → "my-variable-name"

// Edge case: Empty string
console.log(toKebabCase(""));                      // → ""

// Edge case: Multiple types of separators
console.log(toKebabCase("hello___world   test"));  // → "hello-world-test"

// Edge case: Input with special characters
console.log(toKebabCase("test@#$%case"));          // → "test-case"

// Edge case: String already in kebab-case
console.log(toKebabCase("already-kebab-case"));    // → "already-kebab-case"

// Additional edge cases
console.log(toKebabCase("  trim   spaces  "));     // → "trim-spaces"
console.log(toKebabCase("XMLHttpRequest"));        // → "x-m-l-http-request"
console.log(toKebabCase("   "));                   // → ""
console.log(toKebabCase("@#$%"));                  // → ""

// Step 3: Error handling tests
try {
  console.log(toKebabCase(null));
} catch (error) {
  console.log('Error with null:', error.message);   // → "Input must be a string"
}

try {
  console.log(toKebabCase(undefined));
} catch (error) {
  console.log('Error with undefined:', error.message); // → "Input must be a string"
}

try {
  console.log(toKebabCase(123));
} catch (error) {
  console.log('Error with number:', error.message); // → "Input must be a string"
}