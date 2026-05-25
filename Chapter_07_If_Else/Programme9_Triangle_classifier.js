// ✅ Triangle Classifier:

// Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides, 
//  determine if the triangle is 
//  equilateral (all sides are equal),
//   isosceles (exactly two sides are equal), or 
//   scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 112;
let b = 112;
let c = 1200;

if (a === b && b === c) {
    console.log("Triangle is Equilateral");
} else if (a === b || a === c || b === c) {
    console.log("Triangle is Isosceles");
} else {
    console.log("Triangle is Scalene");
}