// let score = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// let rowsum = score.map(row => row.reduce((a, b) => a + b, 0));
// console.log(rowsum)


// for loop alculate 
let score = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let rowsum = [];

for (let index = 0; index < score.length; index++) {
    let sum = 0;

    for (let j = 0; j < score[index].length; j++) {
        sum = sum + score[index][j];
    }

    rowsum.push(sum);
}

console.log(rowsum);