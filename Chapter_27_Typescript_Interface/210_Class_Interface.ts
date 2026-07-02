interface Executable {
    name: string;
    execute(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    execute(): void {
        console.log(`Executing test case: ${this.name}`);
    }
    getStatus(): string {
        return `Test case ${this.name} executed successfully.`;
    }
}

let testCase1 = new TestCase("amit chauhan");
testCase1.execute();
console.log(testCase1.getStatus());