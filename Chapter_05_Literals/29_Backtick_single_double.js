// ============================================
// 29 - Backtick vs Single vs Double Quotes
// ============================================

/*
  ONE SIMPLE RULE:

  Single (' ')  and Double (" ")  → plain text only
  Backtick (` `)                 → plain text + variables + multiline

  Think of it like pens:

  ┌──────────────────────────────────────────────┐
  │  'hello'  or  "hello"  → normal pen          │
  │  `hello ${name}`       → magic pen (extra powers)
  └──────────────────────────────────────────────┘
*/

// Single and Double — exactly the same, no special powers
let a = 'Hello';
let b = "Hello";
console.log(a === b);   // true

// Backtick — can do 2 extra things:
let name = "John";
let age = 25;

// 1. Embed variables (template literals)
let msg = `Hi, I am ${name} and I am ${age} years old.`;
console.log(msg);

// 2. Multiline strings
let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you.`;
console.log(poem);

// ---------------------------------------------
// Summary
// ---------------------------------------------

/*
  ┌──────────┬─────────────────┬─────────────────┬─────────────────────┐
  │  Quote   │  Variables ${}  │   Multiline     │      Use case       │
  ├──────────┼─────────────────┼─────────────────┼─────────────────────┤
  │   ' '    │       ❌        │       ❌        │  Simple text        │
  │   " "    │       ❌        │       ❌        │  Simple text        │
  │   ` `    │       ✅        │       ✅        │  Dynamic / long     │
  └──────────┴─────────────────┴─────────────────┴─────────────────────┘
*/
