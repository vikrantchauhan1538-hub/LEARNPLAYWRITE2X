class Car {
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;


    }
    drive() {
        console.log(this.name + " is driving");
    }


}
const car1 = new Car("BMW");
const car2 = new Car("Audi");
const car3 = new Car("Mercedes");
car1.drive();
car2.drive();
car3.drive();