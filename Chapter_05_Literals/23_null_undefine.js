// ============================================
// null vs undefined in JavaScript
// ============================================

/*
  SIMPLE EXPLANATION:

  undefined  = "I don't exist yet" (automatic / by default)
  null       = "I exist, but I am empty" (intentional / set by programmer)

  Think of it like a box:

  ┌─────────────────────────────────────────────┐
  │  undefined                                  │
  │  → The box doesn't exist yet.               │
  │  → JavaScript gives this automatically.     │
  └─────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────┐
  │  null                                       │
  │  → The box exists, but it is EMPTY.         │
  │  → The programmer purposely put nothing.    │
  └─────────────────────────────────────────────┘
*/

// ---------------------------------------------
// 1. undefined examples
// ---------------------------------------------

let userName;                  // declared but not assigned
console.log(userName);         // undefined
console.log(typeof userName);  // "undefined"

function greet() {
  // no return statement
}
console.log(greet());          // undefined

let person = {
  name: "Alice"
};
console.log(person.age);       // undefined (property doesn't exist)

let numbers = [10, 20, 30];
console.log(numbers[5]);       // undefined (index doesn't exist)


// ---------------------------------------------
// 2. null examples
// ---------------------------------------------

let user = null;               // programmer intentionally sets empty
console.log(user);             // null
console.log(typeof user);      // "object"  ← known JavaScript quirk!

let car = {
  brand: "Toyota",
  color: "Red"
};

car.color = null;              // we purposely clear the value
console.log(car.color);        // null


// ---------------------------------------------
// 3. Key Differences Summary
// ---------------------------------------------

/*
  ┌────────────────────┬─────────────────────┬─────────────────────┐
  │      Feature       │      undefined      │        null         │
  ├────────────────────┼─────────────────────┼─────────────────────┤
  │  Meaning           │ Not assigned yet    │ Intentionally empty │
  │  Who sets it?      │ JavaScript (auto)   │ Programmer (manual) │
  │  Type              │ undefined           │ object (bug/quirk)  │
  │  == check          │ null == undefined   │ true                │
  │  === check         │ null === undefined  │ false               │
  └────────────────────┴─────────────────────┴─────────────────────┘
*/

console.log(null == undefined);   // true  (loose equality)
console.log(null === undefined);  // false (strict equality)


// ---------------------------------------------
// 4. Practical Example
// ---------------------------------------------

let profile = {
  name: "Bob",
  email: null,          // we know email exists but is not provided
  phone: undefined      // phone was never mentioned / doesn't exist
};

console.log(profile.email);  // null     → "we know there is no email"
console.log(profile.phone);  // undefined → "we don't know about phone"


// ---------------------------------------------
// 5. Quick Tip
// ---------------------------------------------

/*
  Use === (strict equality) to tell them apart accurately.

  if (value === undefined) { ... }
  if (value === null)      { ... }
  if (value == null)       { ... }  // catches BOTH null and undefined
*/
