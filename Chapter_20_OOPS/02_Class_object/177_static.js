class playwright {
    static name = "playwright 2x";
    static version = "2.0.0";
    constructor(name_student, age_student, phone_student) {
        this.name = name_student;
        this.age = age_student;
        this.phone = phone_student;


    }
}
const C1 = new playwright("pramod", 25, 1234567890);
const C2 = new playwright("somya", 22, 9876543210);

console.log(playwright.name);
console.log(playwright.version);

console.log(C1.name);
console.log(C1.age);
console.log(C1.phone);

console.log(C2.name);
console.log(C2.age);
console.log(C2.phone);