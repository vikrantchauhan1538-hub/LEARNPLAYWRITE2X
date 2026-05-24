let vikrant_age = 18;
let vikrant_go_club = vikrant_age >= 18 ? "Vikr_go club" : "Not allowed";
console.log(vikrant_go_club)

// API
let actual_status_code = 200;
let expected_statuscode = "200";
let test_result = expected_statuscode === actual_status_code ? "PASS" : "FAIL";
console.log(test_result)

// url test_result
let environment = "prod";
let baseurl = environment === "stagging" ? "https://api.example.com" : "https://staging-spi.com"
console.log(baseurl)

//Nested Query
let age = 26;
let is_vik_age = age > 18 ? (age > 21 ? "He can make gf" : "he will be alone ") : "he doesnt haver an access";
console.log(is_vik_age)

// maximum between two number 
let a = 8;
let b = 23;
let max_number = a > b ? a : b;
console.log("maximum number between 2 digit is " + max_number);

//maximum between 3 digit 
let x = 430;
let y = 210;
let z = 1000;
let max_number_3_digit = (x > y && x > z) ? x : (y > z ? y : z);
console.log("maximum_number _between_3_digit " + max_number_3_digit)

// Number to check it is positive and Negative and Zero 
