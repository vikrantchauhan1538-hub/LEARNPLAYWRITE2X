// Confusing and tricky == vs === comparisons in JavaScript

console.log("--- NaN comparisons ---");
console.log(NaN == NaN);       // false: NaN is never equal to anything, including itself
console.log(NaN === NaN);      // false: strict equality also fails for NaN
console.log(Object.is(NaN, NaN)); // true: use Object.is for NaN checks

console.log("--- Array coercion ---");
console.log([] == false);      // true: [] coerces to empty string "" which coerces to 0 which is falsy
console.log([] == 0);          // true: [] -> "" -> 0
console.log([""] == false);    // true: [""] -> "" -> 0 -> false
console.log([0] == false);     // true: [0] -> "0" -> 0 -> false
console.log([1] == true);      // true: [1] -> "1" -> 1 -> true
console.log([2] == true);      // false: [2] -> "2" -> 2, and 2 !== 1

console.log("--- Object coercion ---");
console.log({} == "[object Object]"); // true: {} toString() returns "[object Object]"
console.log({} == {});         // false: different object references
console.log({} === {});        // false: different object references

let obj = {};
console.log(obj == obj);       // true: same reference
console.log(obj === obj);      // true: same reference

console.log("--- null and undefined edge cases ---");
console.log(null == undefined);  // true: they are loosely equal
console.log(null === undefined); // false: different types
console.log(null == 0);        // false: null does NOT coerce to 0 with ==
console.log(null == "");       // false: null does NOT coerce to empty string
console.log(undefined == 0);   // false: undefined does NOT coerce to 0
console.log(undefined == "");  // false: undefined does NOT coerce to empty string
console.log(undefined == null);// true

console.log("--- Zero and boolean edge cases ---");
console.log(0 == false);       // true: 0 coerces to false
console.log(0 === false);      // false: different types
console.log("" == false);      // true: empty string coerces to false
console.log("" === false);     // false: different types
console.log("0" == false);     // true: "0" coerces to 0, then to false
console.log("0" === false);    // false: different types

console.log("--- Negative zero and infinity ---");
console.log(-0 == 0);          // true: -0 and 0 are loosely equal
console.log(-0 === 0);         // true: -0 and 0 are strictly equal (exception in JS)
console.log(Object.is(-0, 0)); // false: Object.is distinguishes -0 and 0
console.log(Infinity == -Infinity);  // false
console.log(Infinity === -Infinity); // false

console.log("--- String object vs string primitive ---");
let strPrim = "hello";
let strObj = new String("hello");
console.log(strPrim == strObj);  // true: strObj coerces to primitive
console.log(strPrim === strObj); // false: different types (object vs string)

console.log("--- More array and object quirks ---");
console.log([null] == 0);      // true: [null] -> "" -> 0
console.log([undefined] == 0); // true: [undefined] -> "" -> 0
console.log([null, undefined] == ","); // true: [null, undefined] -> "," -> string comparison
console.log([] == ![]);       // true: ![] is false, [] coerces to false
console.log([] == []);        // false: different references
console.log([] === []);       // false: different references

console.log("--- typeof NaN gotcha ---");
console.log(typeof NaN);       // "number": NaN is technically a number type
console.log(NaN == "number");  // false

console.log("--- Boolean object vs primitive ---");
let boolPrim = false;
let boolObj = new Boolean(false);
console.log(boolPrim == boolObj);  // true: boolObj coerces to primitive
console.log(boolPrim === boolObj); // false: different types
console.log(boolObj == true);      // false: boolObj coerces to false, false != true
