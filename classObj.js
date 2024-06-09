// to create a class in js
class Customer{
    //es6
    // to create a constructor
    // constructor(){
    //     console.log("default constructor called")
    // }
    constructor(nam){
        this.name = nam; // to declare or initialise or use a varibale inside constructor/member function , we have to use this. followed by variable name
    }
    getName(){
        console.log(this.name);
    }
    hello(){
        console.log("hello");
    }
    //es7
    age = 21; // to declare a variable inside a class we not need to write any let var or const ;
    getAge = ()=>{
        console.log(this.age)
    }
}

const customer01 = new Customer("Rohan");
customer01.getName();
customer01.getAge();
// console.log(customer01.name)

class Guestcustomer extends Customer{

}
let newGuest = new Guestcustomer("Akash");
newGuest.getName();

// spread and rest oprator :
// let array = ["rohan","rahul","mrinal","kanu"];
// let newArray = [...array,"Jana"];
// console.log(newArray);


// let person = {
//     name:"Rohan",
//     age:20
// }
// let newPerson = {
//     ...person,
//     city:"Kolkata"
// }
// console.log(newPerson);
