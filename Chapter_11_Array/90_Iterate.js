let internet = ['firefox', 'safari', 'edge', 'opera'];

for (let i = 0; i < internet.length; i++) {
    console.log(internet[i])


}

console.log("----------------------")

//  for.....of

for (const x of internet) {
    if (x === "edge") {
        console.log("found it")
    }
}

console.log("----------------------")

//  for.....each

internet.forEach((x, index) => {
    console.log(x, index);


});

// for in 