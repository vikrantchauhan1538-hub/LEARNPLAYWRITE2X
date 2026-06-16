// let matrix_2D = [
//     ["Login", "Pass", 200],
//     ["checkout", "fail", 404],
//     ["search", "pass", 180]
// ];

// for (let index = 0; index < matrix_2D.length; index++) {
//     for (let j = 0; j < matrix_2D[index].length; j++) {
//         console.log(matrix_2D[index][j]);
//         if (matrix_2D[index][j] === "Login") {
//             console.log("user logged in successfully")
//             break;

//         } else {
//             console.log("not logged in ")
//         }

//     }
// }

let matrix_2D = [
    ["Login", "Pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let index = 0; index < matrix_2D.length; index++) {
    let testCaseName = matrix_2D[index][0];
    let status = matrix_2D[index][1];
    let code = matrix_2D[index][2];

    console.log(`Testing: ${testCaseName} -> Status: ${status}, Code: ${code}`);

    if (testCaseName === "Login") {
        console.log("-> user logged in successfully");
    } else {
        console.log("-> not logged in (This is a different test case)");
    }

    console.log("---");
}


// for let

for (let row of matrix_2D) {

    for (let cell of row) {
        Process.stdout.write(cell + " ")
    }
}