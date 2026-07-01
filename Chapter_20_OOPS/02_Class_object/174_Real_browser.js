class testname {
    constructor(name, status, priority) {
        this.x = name;
        this.y = status;
        this.z = priority;
    }
    display() {
        console.log(this.x + " " + this.y + " " + this.z);
    }
}
const TN = new testname("Login", "pass", "High")
const TN2 = new testname("Signup", "fail", "Low")
TN.display();
TN2.display();