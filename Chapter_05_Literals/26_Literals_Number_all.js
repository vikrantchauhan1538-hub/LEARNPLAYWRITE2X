// ============================================
// 26 - All Number Literals in JavaScript
// ============================================

/*
  JavaScript has ONE number type: Number (IEEE-754 double-precision).
  In addition, BigInt handles arbitrarily large integers.

  ┌────────────────────────────────────────────────────────────┐
  │  Number categories in JS:                                  │
  │  1. Integer literals (decimal, binary, octal, hex)         │
  │  2. Floating-point literals                                │
  │  3. Exponential (scientific) notation                      │
  │  4. BigInt literals                                        │
  │  5. Special numeric values (Infinity, NaN)                 │
  │  6. Numeric separators (ES2021)                            │
  └────────────────────────────────────────────────────────────┘
*/

// ---------------------------------------------
// 1. Decimal Integers (Base 10)
// ---------------------------------------------
let dec1 = 42;
let dec2 = 0;
let dec3 = -100;
console.log("Decimal:", dec1, dec2, dec3);  // Decimal: 42 0 -100


// ---------------------------------------------
// 2. Binary Integers (Base 2) — prefix 0b or 0B
// ---------------------------------------------
let bin = 0b1010;      // 10 in decimal
let bin2 = 0B1111;     // 15 in decimal
console.log("Binary 0b1010:", bin);   // 10
console.log("Binary 0B1111:", bin2);  // 15


// ---------------------------------------------
// 3. Octal Integers (Base 8) — prefix 0o or 0O
// ---------------------------------------------
let oct = 0o17;        // 15 in decimal
let oct2 = 0O10;       // 8 in decimal
console.log("Octal 0o17:", oct);    // 15
console.log("Octal 0O10:", oct2);   // 8


// ---------------------------------------------
// 4. Hexadecimal Integers (Base 16) — prefix 0x or 0X
// ---------------------------------------------
let hex = 0xFF;        // 255 in decimal
let hex2 = 0xABC;      // 2748 in decimal
let hex3 = 0X1a3;      // 419 in decimal
console.log("Hex 0xFF:", hex);     // 255
console.log("Hex 0xABC:", hex2);   // 2748
console.log("Hex 0X1a3:", hex3);   // 419


// ---------------------------------------------
// 5. Floating-Point Literals
// ---------------------------------------------
let fl1 = 3.14;
let fl2 = -0.5;
let fl3 = .5;          // valid, but less readable
let fl4 = 2.;          // valid → 2.0
console.log("Floats:", fl1, fl2, fl3, fl4);


// ---------------------------------------------
// 6. Exponential (Scientific) Notation
// ---------------------------------------------
let exp1 = 1.5e3;      // 1.5 × 10³  = 1500
let exp2 = 2e-3;       // 2 × 10⁻³   = 0.002
let exp3 = 5E10;       // 5 × 10¹⁰   = 50000000000
console.log("1.5e3:", exp1);   // 1500
console.log("2e-3:", exp2);    // 0.002
console.log("5E10:", exp3);    // 50000000000


// ---------------------------------------------
// 7. BigInt Literals — suffix 'n'
// ---------------------------------------------
let big1 = 123456789012345678901234567890n;
let big2 = 0xFFn;        // hex BigInt
let big3 = 0o77n;        // octal BigInt
let big4 = 0b1010n;      // binary BigInt
console.log("BigInt:", big1);
console.log("Hex BigInt 0xFFn:", big2);   // 255n

// typeof check
console.log("typeof 42:", typeof 42);          // number
console.log("typeof 42n:", typeof 42n);        // bigint


// ---------------------------------------------
// 8. Numeric Separators (ES2021) — underscores
// ---------------------------------------------
let sep1 = 1_000_000;        // 1000000
let sep2 = 1_000.000_001;    // 1000.000001
let sep3 = 0xFF_FF;          // 65535
let sep4 = 0b1010_0001;      // 161
let sep5 = 1_000_000n;       // BigInt with separators
console.log("Separator 1_000_000:", sep1);
console.log("Separator 0xFF_FF:", sep3);


// ---------------------------------------------
// 9. Special Numeric Values
// ---------------------------------------------

// Infinity
let inf = Infinity;
let negInf = -Infinity;
console.log("Infinity:", inf);           // Infinity
console.log("-Infinity:", negInf);       // -Infinity
console.log("1 / 0:", 1 / 0);            // Infinity
console.log("-1 / 0:", -1 / 0);          // -Infinity

// NaN — Not a Number
let notNum = NaN;
console.log("NaN:", notNum);             // NaN
console.log("0 / 0:", 0 / 0);            // NaN
console.log("'abc' / 2:", "abc" / 2);    // NaN

// typeof is still "number" for Infinity and NaN!
console.log("typeof Infinity:", typeof Infinity);  // number
console.log("typeof NaN:", typeof NaN);            // number


// ---------------------------------------------
// 10. Summary Table
// ---------------------------------------------

/*
  ┌─────────────────────────────┬─────────────────────┬──────────────┐
  │ Literal Type                │ Example             │ typeof       │
  ├─────────────────────────────┼─────────────────────┼──────────────┤
  │ Decimal integer             │ 42                  │ number       │
  │ Binary integer              │ 0b1010              │ number       │
  │ Octal integer               │ 0o17                │ number       │
  │ Hexadecimal integer         │ 0xFF                │ number       │
  │ Floating-point              │ 3.14, .5, 2.        │ number       │
  │ Exponential notation        │ 1.5e3, 2E-4         │ number       │
  │ BigInt                      │ 9007199254740992n   │ bigint       │
  │ Infinity                    │ Infinity            │ number       │
  │ NaN                         │ NaN                 │ number       │
  └─────────────────────────────┴─────────────────────┴──────────────┘
*/

// ---------------------------------------------
// Quick Check Lab
// ---------------------------------------------
console.log("\n--- Quick Checks ---");
console.log(0b1111 === 15);            // true
console.log(0o20 === 16);              // true
console.log(0xF === 15);               // true
console.log(1e3 === 1000);             // true
console.log(typeof 999n === "bigint"); // true
