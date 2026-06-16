function openBrowser() {
    return Promise.resolve("Browser opened");
}

function login() {
    return Promise.resolve("Logged in");
}

function searchProduct() {
    return Promise.resolve("Product found");
}

function addToCart() {
    return Promise.resolve("Added to cart");
}

async function runE2E() {
    let msg1 = await openBrowser();
    let msg2 = await login();
    let msg3 = await searchProduct();
    let msg4 = await addToCart();
    console.log(msg1 + " " + msg2 + " " + msg3 + " " + msg4);
}

runE2E();