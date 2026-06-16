function print() {
    console.log("Hi Print")


}
// print();

// Callback from 

function placeorder(item, callback) {
    console.log("place order")
    callback();

}

// Anonymus function
placeorder("burger", function () {

    console.log("anonymus function")



});

console.log("*************************************")


// calll functionas argument

placeorder("Pizza", print)




console.log("*************************************")
// arrow function 

placeorder("burger", () => {

    console.log("arrow function")



});
