interface User {
    firstName: string;
    lastName: string;
    _age: number;

}

class Employee {
}

class Person implements User {
    firstName: string;
    lastName: string;
    _age: number;

    constructor(theName: string, theLastName: string, theAge: number) { this.lastName = theLastName, this.firstName = theName, this._age = theAge }
    public getFullName() {
        return this.firstName + " " + this.lastName
    }
    protected pass() { }
    public setFullName(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
        this.pass();
    }

}

class PlayerAge extends Person {
    get age(): number {
        return this._age;
    }
    set age(age: number) {
        if (this._age >= 18) {
            this._age = age;
        }
        else {
            console.log("You cant play");
        }
    }
}

let newperson = new Person("pelle", "svanslös", 5);
let secondPerson = new PlayerAge("sara", "svans", 14);
newperson.setFullName("Kalle", "Anka");

console.log(newperson.getFullName() + " " + newperson._age);
