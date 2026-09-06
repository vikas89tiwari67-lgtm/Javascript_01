"use strict" //treate all js code as newer version
// number = 2 to 2 to power 53
// bigint
// string = ""
// boolean = true/false
// null = standalone value
// undefined
// symbol = unique


// an important function "typeof"
// console.log(typeof 123);
// console.log(typeof "abc");
// console.log(typeof null); // it will return object 
// console.log(typeof undefined); // it will return undefined




// Primitive : String, Number, boolean, Null, Undefine, Symobol, Bigint 
//                 symbol
let firstsymbol = Symbol('123')
let symbol1 = Symbol('123')
console.log(firstsymbol==symbol1)
let bignumber = 287654345678909876543n



//Reference (Non primitive data type)
// Array, Object, Function

// Array
let array1 = [1,2,3,4]
let object1 = {
    name:"vikas",
    age:19,
}
console.log(array1);
console.log(object1);
console.log(object1.age);//by this we we can axes the elemet of the object datatype 

let myfunction = function(){
    console.log("Hello World")
}