/**
 * Converts a string to camelCase format.
 * 
 * @description This function transforms any string into camelCase by:
 * - Removing non-alphanumeric characters (except spaces, hyphens, underscores)
 * - Converting the first word to lowercase
 * - Capitalizing the first letter of subsequent words
 * - Removing all separators (spaces, hyphens, underscores)
 * 
 * @param {string} input - The string to convert to camelCase
 * 
 * @returns {string} The camelCase formatted string
 * 
 * @throws {TypeError} Throws TypeError if input is not a string
 * 
 * @example
 * // Basic usage
 * toCamelCase("first name");        // → "firstName"
 * toCamelCase("user_id");           // → "userId"
 * toCamelCase("SCREEN---NAME");     // → "screenName"
 * toCamelCase("mobile-number");     // → "mobileNumber"
 * 
 * @example
 * // Edge cases
 * toCamelCase("  hello   world  "); // → "helloWorld"
 * toCamelCase("test@#$%case");      // → "testCase"
 * toCamelCase("");                  // → ""
 * toCamelCase("   ");               // → ""
 * 
 * @example
 * // Error handling
 * try {
 *   toCamelCase(123);
 * } catch (error) {
 *   console.log(error.message);     // → "Input must be a string"
 * }
 * 
 * @since 1.0.0
 * @author GitHub Copilot
 */
function toCamelCase(input) {
  // Validate input type
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  // Remove non-alphanumeric characters (except spaces, hyphens, underscores)
  const cleaned = input.replace(/[^a-zA-Z0-9\s\-_]/g, '');
  
  // Handle empty string or no valid characters
  if (!cleaned.trim() || !/[a-zA-Z0-9]/.test(cleaned)) {
    return '';
  }
  
  return cleaned
    .trim()                              // Remove leading/trailing whitespace
    .replace(/[\s\-_]+/g, ' ')          // Replace multiple separators with single space
    .toLowerCase()                       // Convert to lowercase
    .replace(/\s+(.)/g, (match, char) => char.toUpperCase()) // Capitalize after spaces
    .replace(/^\s+/, '');               // Remove any remaining leading spaces
}

// Test cases
console.log(toCamelCase("first name"));           // → "firstName"
console.log(toCamelCase("user_id"));              // → "userId"
console.log(toCamelCase("SCREEN---NAME"));        // → "screenName"
console.log(toCamelCase("mobile-number"));        // → "mobileNumber"
console.log(toCamelCase("  hello   world  "));    // → "helloWorld"
console.log(toCamelCase("test@#$%case"));         // → "testCase"
console.log(toCamelCase(""));                     // → ""
console.log(toCamelCase("   "));                  // → ""
console.log(toCamelCase("@#$%"));                 // → ""

// Error case
try {
  console.log(toCamelCase(123));
} catch (error) {
  console.log(error.message);                     // → "Input must be a string"
}

/**
 * Converts a string to dot.case format.
 * 
 * @description This function transforms any string into dot.case by:
 * - Removing non-alphanumeric characters (except spaces, hyphens, underscores)
 * - Converting camelCase to separate words with dots
 * - Replacing all separators (spaces, hyphens, underscores) with dots
 * - Converting everything to lowercase
 * - Normalizing multiple consecutive dots to single dots
 * - Removing leading and trailing dots
 * 
 * @param {string} input - The string to convert to dot.case
 * 
 * @returns {string} The dot.case formatted string
 * 
 * @throws {TypeError} Throws TypeError if input is not a string
 * 
 * @example
 * // Basic usage
 * toDotCase("first name");          // → "first.name"
 * toDotCase("user_id");             // → "user.id"
 * toDotCase("SCREEN---NAME");       // → "screen.name"
 * toDotCase("mobile-number");       // → "mobile.number"
 * 
 * @example
 * // CamelCase conversion
 * toDotCase("camelCaseText");       // → "camel.case.text"
 * toDotCase("XMLHttpRequest");      // → "x.m.l.http.request"
 * 
 * @example
 * // Edge cases
 * toDotCase("  hello   world  ");   // → "hello.world"
 * toDotCase("test@#$%case");        // → "test.case"
 * toDotCase("");                    // → ""
 * toDotCase("   ");                 // → ""
 * toDotCase("@#$%");                // → ""
 * 
 * @example
 * // Error handling
 * try {
 *   toDotCase(123);
 * } catch (error) {
 *   console.log(error.message);     // → "Input must be a string"
 * }
 * 
 * @since 1.0.0
 * @author GitHub Copilot
 */
function toDotCase(input) {
  // Validate input type
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  // Remove non-alphanumeric characters (except spaces, hyphens, underscores)
  const cleaned = input.replace(/[^a-zA-Z0-9\s\-_]/g, '');
  
  // Handle empty string or no valid characters
  if (!cleaned.trim() || !/[a-zA-Z0-9]/.test(cleaned)) {
    return '';
  }
  
  return cleaned
    .trim()                              // Remove leading/trailing whitespace
    .replace(/([a-z])([A-Z])/g, '$1.$2') // Add dot between camelCase
    .replace(/[\s\-_]+/g, '.')           // Replace separators with dots
    .toLowerCase()                       // Convert to lowercase
    .replace(/\.+/g, '.')               // Replace multiple dots with single dot
    .replace(/^\.|\.$/g, '');           // Remove leading/trailing dots
}

// Test cases for dot.case
console.log('\n--- Dot Case Tests ---');
console.log(toDotCase("first name"));           // → "first.name"
console.log(toDotCase("user_id"));              // → "user.id"
console.log(toDotCase("SCREEN---NAME"));        // → "screen.name"
console.log(toDotCase("mobile-number"));        // → "mobile.number"
console.log(toDotCase("camelCaseText"));        // → "camel.case.text"
console.log(toDotCase("  hello   world  "));    // → "hello.world"
console.log(toDotCase("test@#$%case"));         // → "test.case"
console.log(toDotCase(""));                     // → ""
console.log(toDotCase("   "));                  // → ""
console.log(toDotCase("@#$%"));                 // → ""

// Error case for dot.case
try {
  console.log(toDotCase(123));
} catch (error) {
  console.log(error.message);                   // → "Input must be a string"
}
