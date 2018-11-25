// let user:any[] = [0,1,2];
var Person = /** @class */ (function () {
    function Person(theName, theLastName, theAge, thePassword) {
        this.lastName = theLastName, this.firstName = theName, this.age = theAge, this.password = thePassword;
    }
    Person.prototype.fullName = function () {
        return (this.firstName + " " + this.lastName);
    };
    return Person;
}());
var newperson = new Person("pelle", "svanslös", 5, "fgf");
console.log(newperson.fullName() + " " + newperson.age);
