let sum = [3, 4, 9, 20];
let target = 9; // वह नंबर जिसे हमें ढूंढना है
// let foundIndex = -1;
for (let i = 0; i < sum.length; i++) {

    if (sum[i] === target) {
        // foundIndex = i;

        console.log("Element" + target + " found at index:" + i);
        break;
    }
}



// if (foundIndex !== -1) {
//     console.log(`Element ${ target } found at index: ${ foundIndex }`);
// } else {
//     console.log(`Element ${ target } not found in the array.`);
// }