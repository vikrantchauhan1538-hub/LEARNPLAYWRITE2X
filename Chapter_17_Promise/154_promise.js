let promise = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Food is ready and ready for delieverd")


    } else {
        reject("Food is not ready yet, please wait")
    }


})
console.log(promise)