function toCamelCase(text) {
  return text
    .replace(/\s+/g, ' ')                // Replace multiple spaces with a single space
    .trim()                              // Remove leading/trailing spaces
    .toLowerCase()                       // Convert to lowercase first
    .replace(/[\s\-_]+(.)/g, (match, char) => char.toUpperCase()) // Capitalize after spaces, hyphens, underscores
    .replace(/^(.)/, char => char.toLowerCase()); // Ensure first character is lowercase
}

// Test cases
console.log(toCamelCase("first name"));      // → "firstName"
console.log(toCamelCase("user_id"));         // → "userId"
console.log(toCamelCase("SCREEN_NAME"));     // → "screenName"
console.log(toCamelCase("mobile-number"));   // → "mobileNumber"