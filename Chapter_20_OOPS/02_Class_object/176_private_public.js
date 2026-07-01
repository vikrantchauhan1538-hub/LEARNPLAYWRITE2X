class credentials {
    #apikey;
    user;

    constructor(name, key) {
        this.user = name;
        this.#apikey = key;

    }

    pramodgetauthor() {
        console.log("user name is " + this.user + " and api key is " + this.#apikey);
        return "Bearer " + this.#apikey;
    }

}
let cred = new credentials("admin", "secretKey_5677");
const apiToken = cred.pramodgetauthor();
console.log(apiToken);
console.log("*******************************************************");
console.log(cred.user);
console.log(cred.#apikey); // this will give error because #apikey is private and can not be accessed outside the class
console.log(apiToken);
