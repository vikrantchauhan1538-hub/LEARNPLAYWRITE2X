let fruit = ["banana", "Apple", "cherry"]

fruit.sort();
console.log(fruit)

let number = [3, 9, 4, 1, 0]
number.sort();
console.log(number)

let number1 = [1, 2, 7, 8, 14, 32, 21, 67, 69, 43]
number1.sort();
console.log(number1)
number1.sort((a, b) => a - b);
console.log(number1)

number1.sort((a, b) => b - a);
console.log(number1)