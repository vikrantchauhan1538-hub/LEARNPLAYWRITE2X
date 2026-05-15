// ==========================================
// JavaScript Comparison Operators
// ==========================================

// Comparison operators are used to compare two values.
// They return a boolean result: true or false.


// 1. Equal to (==)
// Compares two values for equality after performing type coercion.
let a = 5;
let b = "5";
console.log("5 == '5':", a == b);  // true (values are equal after type coercion)

// 2. Strict equal to (===)
// Compares two values for equality without type coercion.
// Both value and type must match.
console.log("5 === '5':", a === b);  // false (different types: number vs string)
console.log("5 === 5:", 5 === 5);   // true (same value and type)

// 3. Not equal (!=)
// Returns true if the values are not equal (with type coercion).
console.log("5 != '6':", a != "6");  // true
console.log("5 != '5':", a != "5");  // false

// 4. Strict not equal (!==)
// Returns true if the values are not equal or not of the same type.
console.log("5 !== '5':", a !== b);  // true (different types)
console.log("5 !== 6:", 5 !== 6);   // true (different values)
console.log("5 !== 5:", 5 !== 5);   // false (same value and type)

// 5. Greater than (>)
// Returns true if the left value is greater than the right value.
console.log("10 > 5:", 10 > 5);   // true
console.log("5 > 10:", 5 > 10);   // false

// 6. Less than (<)
// Returns true if the left value is less than the right value.
console.log("5 < 10:", 5 < 10);   // true
console.log("10 < 5:", 10 < 5);   // false

// 7. Greater than or equal to (>=)
// Returns true if the left value is greater than or equal to the right value.
console.log("10 >= 10:", 10 >= 10);  // true
console.log("10 >= 5:", 10 >= 5);   // true
console.log("5 >= 10:", 5 >= 10);   // false

// 8. Less than or equal to (<=)
// Returns true if the left value is less than or equal to the right value.
console.log("5 <= 5:", 5 <= 5);    // true
console.log("5 <= 10:", 5 <= 10);  // true
console.log("10 <= 5:", 10 <= 5);  // false


// ==========================================
// Important Notes
// ==========================================

// String Comparison
// Strings are compared lexicographically (dictionary order) based on Unicode values.
console.log("'apple' < 'banana':", "apple" < "banana");  // true
console.log("'apple' > 'Apple':", "apple" > "Apple");    // true (lowercase > uppercase in Unicode)

// Comparing different types
// JavaScript converts operands to numbers when comparing different types (except strict equality).
console.log("'10' > 5:", "10" > 5);   // true (string '10' is converted to number 10)
console.log("true == 1:", true == 1);  // true (true is converted to 1)
console.log("false == 0:", false == 0); // true (false is converted to 0)

// null and undefined comparisons
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false
console.log("null > 0:", null > 0);   // false (null is converted to 0)
console.log("null >= 0:", null >= 0); // true (null is converted to 0)

// NaN comparisons
// NaN is not equal to anything, including itself.
console.log("NaN == NaN:", NaN == NaN);     // false
console.log("NaN === NaN:", NaN === NaN);   // false
console.log("NaN > 0:", NaN > 0);          // false
console.log("NaN < 0:", NaN < 0);          // false

// Best Practice: Always use strict equality (=== and !==) to avoid unexpected type coercion.
