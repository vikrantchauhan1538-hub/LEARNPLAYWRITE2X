async function asyncFunc() {
    try {

        let result = await Promise.reject("Promise is rejected");

    }
    catch (error) {
        console.log("Error is: " + error);

    }
    finally {
        console.log("This is finally block");
    }
}
asyncFunc();