var v = 12; 4
let l = 34;
const c = 89;

//Reclararation of var 

var browser = "Chrome";
var browser = "firefox";

// Reassignment of var 
browser = "edge";

console.log(browser)

//Example of Leaked var 

var testcase = ["login", "logout", "signup"];

for (var i = 0; i < testcase.length; i++) {
    console.log(testcase[i]);

}
console.log(i);

// function 

function greet() {
    console.log("hi this is exapmple of funciton");
}

greet();
greet();