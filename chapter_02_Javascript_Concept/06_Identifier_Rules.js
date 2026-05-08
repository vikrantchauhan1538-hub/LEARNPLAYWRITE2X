// ============================================================
// JavaScript Identifier Rules & Naming Conventions (Cases)
// ============================================================

// ------------------------------------------------------------
// 1. IDENTIFIER RULES (What is valid in JavaScript)
// ------------------------------------------------------------
// - Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// - After the first character, can also use digits (0-9)
// - Cannot use reserved keywords (e.g., var, function, class, return)
// - Case-sensitive: myVar and myvar are different
// - Should be meaningful and descriptive
// ------------------------------------------------------------

// Valid identifiers
var firstname = "Amit";
var _privateVar = "secret";
var $price = 100;
var version2 = "v2.0";

// Invalid identifiers (uncommenting any will throw SyntaxError)
// var 2ndVersion = "x";     // Cannot start with a number
// var my-name = "x";        // Hyphen is not allowed
// var my name = "x";        // Spaces are not allowed
// var class = "x";          // Reserved keyword


// ------------------------------------------------------------
// 2. CAMEL CASE (camelCase)
// ------------------------------------------------------------
// First word lowercase, each subsequent word capitalized.
// Most common convention in JavaScript.
// Usage: variables, functions
// ------------------------------------------------------------

var firstName = "Amit";
var totalItemCount = 42;
var isUserLoggedIn = true;

function getUserData() {
    return "User Data";
}

function calculateTotalPrice() {
    return 100;
}


// ------------------------------------------------------------
// 3. SNAKE CASE (snake_case)
// ------------------------------------------------------------
// All lowercase, words separated by underscores.
// Less common in JavaScript, but used in some APIs and JSON fields.
// Usage: object keys, API parameters, file names
// ------------------------------------------------------------

var user_name = "Amit";
var total_item_count = 42;
var is_user_logged_in = false;

var api_config = {
    base_url: "https://api.example.com",
    api_key: "abc123",
    request_timeout: 5000
};

function fetch_user_data() {
    return "User Data";
}


// ------------------------------------------------------------
// 4. PASCAL CASE (PascalCase)
// ------------------------------------------------------------
// Every word starts with a capital letter (including the first).
// Standard convention for class names and constructor functions.
// Usage: classes, constructors
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

// Constructor function (older style)
function PersonObject(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


// ------------------------------------------------------------
// 5. SCREAMING SNAKE CASE / CONSTANT CASE (SCREAMING_SNAKE_CASE)
// ------------------------------------------------------------
// All uppercase, words separated by underscores.
// Indicates values that should never change after declaration.
// Usage: constants, environment variables, configuration flags
// ------------------------------------------------------------

var PI = 3.14159;
var MAX_LOGIN_ATTEMPTS = 5;
var API_BASE_URL = "https://api.example.com/v1";
var DATABASE_CONNECTION_STRING = "postgres://localhost:5432/mydb";

var HTTP_STATUS_CODES = {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

var FEATURE_FLAGS = {
    ENABLE_BETA_FEATURES: false,
    SHOW_DEBUG_PANEL: true
};


// ------------------------------------------------------------
// 6. KEBAB CASE (kebab-case)
// ------------------------------------------------------------
// All lowercase, words separated by hyphens.
// NOT VALID for JavaScript identifiers (hyphen is minus operator).
// Commonly used in CSS class names, HTML attributes, URLs, file names.
// ------------------------------------------------------------

// JavaScript variable (INVALID):
// var user-name = "Amit";  // SyntaxError

// CSS class name (VALID in HTML/CSS):
// <div class="main-container user-profile-card">

// File name example (common practice):
// 06_Identifier_Rules.js  (snake_case file)
// identifier-rules.js     (kebab-case file)


// ------------------------------------------------------------
// 7. OTHER CASES & VARIATIONS
// ------------------------------------------------------------

// Upper Camel Case (same as PascalCase)
// Already covered above under PascalCase

// Flatcase / lowercase
// All lowercase, no separators. Rarely used for multi-word identifiers.
var flatcaseexample = "hard to read"; // Avoid for multi-word names

// COBOL-CASE or TRAIN-CASE (UPPER-KEBAB-CASE)
// All uppercase, hyphens. Used in HTTP headers sometimes.
// Content-Type, X-Custom-Header
// Not valid as JS variable names.


// ------------------------------------------------------------
// 8. SUMMARY TABLE
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
// 9. BEST PRACTICES
// ------------------------------------------------------------
// 1. Be consistent across your project / team.
// 2. Use camelCase for variables and functions.
// 3. Use PascalCase for classes and constructor functions.
// 4. Use UPPER_SNAKE_CASE for true constants.
// 5. Avoid single-letter names except for loop counters (i, j, k).
// 6. Choose descriptive names over short, cryptic ones.
// 7. Boolean variables should sound like yes/no questions: isActive, hasPermission.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 10. PRACTICAL EXAMPLES
// ------------------------------------------------------------

var MAX_CART_ITEMS = 20;                        // SCREAMING_SNAKE_CASE (constant)

class ProductCatalog {                          // PascalCase (class)
    constructor() {
        this.productList = [];                  // camelCase (property)
    }

    addProduct(productData) {                   // camelCase (method)
        this.productList.push(productData);
    }
}

function create_user_profile(userData) {        // snake_case (function - less common)
    return {
        user_name: userData.user_name,          // snake_case (object key)
        account_status: "active",               // snake_case (object key)
        created_at: new Date().toISOString()
    };
}

console.log("Identifier Rules and Naming Conventions loaded successfully.");
