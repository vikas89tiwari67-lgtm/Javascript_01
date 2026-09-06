const UserId = "abc" // we can not modify the value if we are using the const key word 
let Email = "abc@gmail.com" 
var name = "abc" //it is a primitive type so we don't use it most of the time it can't diffrencate b/w indentation and scope
pass = 1234 // we can also define variables like this but we don't use this 
let number // if values are not define it will print undefined
console.log(UserId);
console.table([UserId, Email, name, pass, number]) // using console.table([]) we can print multipal variable at a same time in tabuler formate
// changing values 
Email = "xyz@gmail.com"
name = "xyz"
pass = 09876
console.table([UserId, Email, name, pass, number])
/*
this is a commnet 
*/