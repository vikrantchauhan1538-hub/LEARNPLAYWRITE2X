// =====================================================
// JavaScript Identifier Rules - All Examples in One File
// =====================================================

// 1. Must start with letter (a-z, A-Z), underscore (_), or dollar sign ($)
let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";
console.log("Rule 1:", validName, _private, $jquery);

// 2. After first character: letters, digits (0-9), underscores, or dollar signs
let name123 = "letter then digits";
let _temp1 = "underscore then letter and digit";
let $item_2 = "mixed allowed chars";
console.log("Rule 2:", name123, _temp1, $item_2);

// 3. Cannot contain spaces or special characters (@, #, %, &, etc.)
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let price@ = "invalid";       // SyntaxError: Invalid or unexpected token
// let total# = "invalid";       // SyntaxError: Invalid or unexpected token
console.log("Rule 3: my_name (use underscore instead of space)");
let my_name = "valid alternative";

// 4. Cannot be a reserved keyword
// let var = 5;      // SyntaxError: Unexpected token 'var'
// let class = "A";  // SyntaxError: Unexpected token 'class'
// let function = 1; // SyntaxError: Unexpected token 'function'
let className = "valid alternative to 'class'";
let varType = "valid alternative to 'var'";
console.log("Rule 4:", className, varType);

// 5. Case-sensitive (name, Name, NAME are all different)
let name = "lowercase";
let Name = "Capitalized";
let NAME = "UPPERCASE";
console.log("Rule 5:", name, Name, NAME);

// 6. No length limit (but keep readable)
let thisIsAVeryLongButStillCompletelyValidJavaScriptIdentifierName = "works fine";
console.log("Rule 6:", thisIsAVeryLongButStillCompletelyValidJavaScriptIdentifierName);

// 7. Unicode characters allowed (but ASCII recommended)
let π = 3.14159;
let 你好 = "hello in Chinese";
let café = "accented character";
let \u0041 = "Unicode escape for A"; // evaluates to variable 'A'
console.log("Rule 7:", π, 你好, café, A);

// 8. Cannot start with a digit (0-9)
// let 1stPlace = "invalid";  // SyntaxError: Invalid or unexpected token
// let 2day = "invalid";      // SyntaxError: Invalid or unexpected token
let place1st = "valid workaround";
let day2 = "valid workaround";
console.log("Rule 8:", place1st, day2);

// =====================================================
// Summary: Valid vs Invalid Examples
// =====================================================
console.log("\n--- VALID IDENTIFIERS ---");
console.log("userName, _count, $total, MAX_SIZE, camelCaseName, π, 你好");

console.log("\n--- INVALID IDENTIFIERS (will cause SyntaxError) ---");
console.log("1name (starts with digit), my-name (hyphen), my name (space), var (keyword), total# (special char)");
