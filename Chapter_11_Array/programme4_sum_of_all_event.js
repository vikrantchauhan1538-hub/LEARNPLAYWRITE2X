let sum = [3, 4, 9, 20]
// let add = 0;

// let total = sum.reduce((a, b) => a + b, 0)
// console.log(total)


// sum.forEach(num => {
//     add += num;
// });
// console.log("Total Sum:", add);

// add = 0;

// for (let i = 0; i < sum.length; i++) {
//     add = add + sum[i];

// }
// console.log("sum be each loop " + add)


// //  sum of even element 

let add = 0;

for (let j = 0; j < sum.length; j++) {
    if (sum[j] % 2 === 0) {
        add = add + sum[j];

    }

}
console.log("sum be even loop " + add)


let evenSum = sum.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);

console.log("Modern Way Even Sum:", evenSum);

let oddsum = sum.filter(x => x % 2 != 0).reduce((a, b) => a + b, 0)
console.log(oddsum)