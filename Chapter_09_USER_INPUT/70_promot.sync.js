const prompt = require("prompt-sync")();

let number1 = Number(prompt("Enter a Number: "));


if (isNaN(number1)) {
    console.log("Invalid Input! Please enter a valid numerical value.");
}
else if (number1 % 2 === 0) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}