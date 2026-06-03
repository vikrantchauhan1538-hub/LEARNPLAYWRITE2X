let score = [3, 4, 22, 42, 354];

// let grade = score.map(s => s > 70 ? "Pass" : "Fail")
// console.log(grade)

for (let i = 0; i < score.length; i++) {
    if (score[i] > 70) {
        console.log("Pass")
    } else { console.log("Fail") }

}

//  filter - can be 

let Passing = score.filter(s => s > 70);
console.log(Passing)

// reduce = sum of all array

let total = score.reduce((a, b) => a + b, 0)
console.log(total)

// flat 

let neteds = [[12, 3], [4], [4, 9]]
console.log(neteds.flat())