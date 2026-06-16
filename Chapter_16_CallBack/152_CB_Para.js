function greet(name, callback) {
    console.log("Welcone" + name)
    callback();
}
greet("Dev", function () {

    console.log("Welcome testing")
});