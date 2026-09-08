let user = {
    name: "raj",
    price: 999,
    welmass: function(){
        console.log(`${this.name}, welcome to website`)// "this" key word is to refer current context like values under user 
        console.log(this);// it will print all current context (all valuse of user object)
        
    }

}
// user.welmass()
// user["name"]= "sam"
// user.welmass()

// console.log(this);//it will print empty object here in code editor but in concole it will print an object named window



// function one(){
//     console.log(this);// this timme it will print too many values 
//     let abc = "abc"
//     console.log(this.abc);// it will give undefine because it only work under object 
    
    
// }
// one()

// +++++++++++++++++++++++++++arrow function+++++++++++++++++++++++++++++++++++++
const arrow = () => {
    let user = "abc"
    console.log(user);
    
}
// arrow()


let add = (num1, num2) => num1+num2 // we are writing function in one line so we dont neet to write return keyword and curly braces 
let add1 = (num1, num2) => (num1+num2)// we can also write this type of function like this also
console.log(add(2,4))
console.log(add1(2,4))