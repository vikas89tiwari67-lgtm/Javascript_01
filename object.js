// singleton
// object.creat

//  object literals
const mysom = Symbol("key1")
const jsuser = {
    name: "vikas",
    [mysom]: "this is a symbo", //using  [] this we can use symbol data type ,
    age: 18,
    email: "abc@gmail.co,",
    isoLogged: false ,
    lastlogin: ['mondy', 'tuesday']
}
// console.log(jsuser.name);
// console.log(jsuser[mysom]);

jsuser.email='xyz@gmail.com'//using this we can overwrite any value 
// Object.freeze(jsuser)// if we use this so we cant change the value 

jsuser.greeting = function(){
    console.log("hello js ");
    
}
jsuser.greeting2 = function(){
    console.log(`this is greeting2 ${this.name}`);
    
}
jsuser.greeting();
jsuser.greeting2()



