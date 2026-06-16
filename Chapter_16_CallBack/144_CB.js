function test(assertion, callback) {
    console.log("test complete");
    callback();

}

test('has title', () => {

    console.log("playwrite callback example")
})