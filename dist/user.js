export class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this._name} and I'm ${this._age} years old`);
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
}
//# sourceMappingURL=user.js.map