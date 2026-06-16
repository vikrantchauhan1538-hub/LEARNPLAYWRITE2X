//console.log((200).toString())

// let name = "Vikrant";
// let reverse = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     reverse = reverse + name[i];
// }

// console.log("Reversed Name: " + reverse);

//check nu,nber is palindrom or not 

let str = "qwerewq"
let reverse1 = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse1 = reverse1 + str[i];
}
if (str === reverse1) {
    console.log(str + "string is Palindrom")
} else {
    console.log(str + "Not is palindrom")
}

//Anagrame
let str1 = "listen";
let str2 = "silent";

if (str1.length !== str2.length) {
    console.log("Not an Anagram");
} else {
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');

    if (s1 === s2) {
        console.log("Strings are Anagram");
    } else {
        console.log("Not an Anagram");
    }
}