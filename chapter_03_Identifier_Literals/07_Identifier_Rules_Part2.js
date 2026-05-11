var name = "Vikrant";

// ------------------------------------------------------------
// 1. CAMEL CASE (camelCase)
// ------------------------------------------------------------
// First word lowercase, each subsequent word capitalized.
// Most common convention in JavaScript for variables and functions.
// ------------------------------------------------------------

var firstName = "Amit";
var lastName = "Suneel";
var totalItemCount = 42;
var isUserLoggedIn = true;

function getUserData() {
    return "User Data";
}

function calculateTotalPrice() {
    return 100;
}

console.log("camelCase examples:", firstName, lastName, totalItemCount, isUserLoggedIn);


// ------------------------------------------------------------
// 2. SNAKE CASE (snake_case)
// ------------------------------------------------------------
// All lowercase, words separated by underscores.
// Less common in JS, but used in APIs, JSON keys, and file names.
// ------------------------------------------------------------

var user_name = "Amit";
var total_item_count = 42;
var is_user_logged_in = false;

var api_config = {
    base_url: "https://api.example.com",
    api_key: "abc123",
    request_timeout: 5000
};



console.log("snake_case examples:", user_name, total_item_count, is_user_logged_in);


// ------------------------------------------------------------
// 3. PASCAL CASE (PascalCase)
// ------------------------------------------------------------
// Every word starts with a capital letter (including the first).
// Standard convention for class names and constructor functions.
// ------------------------------------------------------------

class UserAccount {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

function PersonObject(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

console.log("PascalCase examples: UserAccount, ShoppingCart, PersonObject");


// ------------------------------------------------------------
// 4. SCREAMING SNAKE CASE / CONSTANT CASE (SCREAMING_SNAKE_CASE)
// ------------------------------------------------------------
// All uppercase, words separated by underscores.
// Indicates values that should never change after declaration.
// ------------------------------------------------------------

var PI = 3.14159;
var MAX_LOGIN_ATTEMPTS = 5;
var API_BASE_URL = "https://api.example.com/v1";

var HTTP_STATUS_CODES = {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

console.log("SCREAMING_SNAKE_CASE examples:", PI, MAX_LOGIN_ATTEMPTS, API_BASE_URL);


// ------------------------------------------------------------
// 5. KEBAB CASE (kebab-case)
// ------------------------------------------------------------
// All lowercase, words separated by hyphens.
// NOT VALID for JavaScript identifiers (hyphen is minus operator).
// Commonly used in CSS class names, HTML attributes, URLs, file names.
// ------------------------------------------------------------

// JavaScript variable (INVALID - uncommenting will throw SyntaxError):
// var user-name = "Amit";  // SyntaxError

// CSS class name (VALID in HTML/CSS):
// <div class="main-container user-profile-card">

// File name examples:
// 07_Identifier_Rules.js  (snake_case file)
// identifier-rules.js     (kebab-case file)

console.log("kebab-case: NOT valid for JS variables. Use in CSS/HTML/file names only.");


// ------------------------------------------------------------
// 6. OTHER CASES & VARIATIONS
// ------------------------------------------------------------

// Flatcase / lowercase (all lowercase, no separators)
// Rarely used for multi-word identifiers because it's hard to read.
var flatcaseexample = "hard to read"; // Avoid for multi-word names

// COBOL-CASE or TRAIN-CASE (UPPER-KEBAB-CASE)
// All uppercase with hyphens. Used in HTTP headers sometimes.
// Example: Content-Type, X-Custom-Header
// Not valid as JS variable names.

console.log("flatcase example:", flatcaseexample);


// ------------------------------------------------------------
// SUMMARY TABLE
// ------------------------------------------------------------
/*
| Case Style            | Example              | JS Valid? | Typical Use in JS          |
|-----------------------|----------------------|-----------|----------------------------|
| camelCase             | myVariableName       | Yes       | Variables, functions       |
| snake_case            | my_variable_name     | Yes       | Object keys, APIs          |
| PascalCase            | MyVariableName       | Yes       | Classes, components        |
| SCREAMING_SNAKE_CASE  | MY_VARIABLE_NAME     | Yes       | Constants                  |
| kebab-case            | my-variable-name     | No        | CSS classes, file names    |
| flatcase              | myvariablename       | Yes       | Avoid for multi-word       |
| Train-Case            | My-Variable-Name     | No        | Rare                       |
*/


// ------------------------------------------------------------
// BEST PRACTICES
// ------------------------------------------------------------
// 1. Be consistent across your project / team.
// 2. Use camelCase for variables and functions.
// 3. Use PascalCase for classes and constructor functions.
// 4. Use UPPER_SNAKE_CASE for true constants.
// 5. Avoid single-letter names except for loop counters (i, j, k).
// 6. Choose descriptive names over short, cryptic ones.
// 7. Boolean variables should sound like yes/no questions: isActive, hasPermission.
// ------------------------------------------------------------

console.log("\n--- Summary ---");
console.log("camelCase    -> firstName, getUserData()");
console.log("snake_case   -> user_name, fetch_user_data()");
console.log("PascalCase   -> UserAccount, ShoppingCart");
console.log("CONSTANT_CASE-> MAX_LOGIN_ATTEMPTS, API_BASE_URL");
console.log("kebab-case   -> NOT valid for JS identifiers");