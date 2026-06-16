//  Find largest number 

const arr = [23, 45, 12, 89, 67, 95, 4];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];

    }
}
console.log(max)


// smallest nu,ber 


let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];

    }
}
console.log(min)
