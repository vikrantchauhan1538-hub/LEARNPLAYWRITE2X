let browser = ["chrome", "firefox", "safari", "edge", "opera"]

console.log(browser.length - 1)

// browser.pop();
// console.log(browser)

browser.shift();
console.log(browser)



for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
    if (browser[i] === "safari")
        console.log("safari is missing")
} 