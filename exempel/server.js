"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var Person = (function () {
    function Person(theName, theLastName, theAge) {
        this.lastName = theLastName, this.firstName = theName, this._age = theAge;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.pass = function () { };
    Person.prototype.setFullName = function (fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
        this.pass();
    };
    return Person;
}());
var PlayerAge = (function (_super) {
    __extends(PlayerAge, _super);
    function PlayerAge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PlayerAge.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (this._age >= 18) {
                this._age = age;
            }
            else {
                console.log("You cant play");
            }
        },
        enumerable: true,
        configurable: true
    });
    return PlayerAge;
}(Person));
var newperson = new Person("pelle", "svanslös", 5);
var secondPerson = new PlayerAge("sara", "svans", 14);
newperson.setFullName("Kalle", "Anka");
console.log(newperson.getFullName() + " " + newperson._age);
