async function parllel() {
    let [r1, r2, r3] = await Promise.all([Promise.resolve("Hello"), Promise.resolve("World"), Promise.resolve("!")]);

}
console.log(parllel())