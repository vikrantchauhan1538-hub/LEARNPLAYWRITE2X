let student = { name: "Amit", age: 65 };

let a = { status: "pass" };
console.log(a.status)

let b = a;

console.log(b["status"])
b.status = "fail"
console.log(a.status)
console.log(b.status)