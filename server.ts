// let user:any[] = [0,1,2];


interface User{
    firstName:string;
    lastName:string;
    age:number;
    password:string;
}

class Person implements User{
    firstName:string;
    lastName:string;
    age:number;
    password:string;
    constructor(theName:string,theLastName:string,theAge:number,thePassword:string){this.lastName=theLastName, this.firstName=theName,this.age=theAge,this.password=thePassword;}
    fullName() {
        return(this.firstName+ " " +this.lastName);
    }
}
let newperson = new Person("pelle","svanslös",5,"fgf");


console.log(newperson.fullName()+" "+ newperson.age);
