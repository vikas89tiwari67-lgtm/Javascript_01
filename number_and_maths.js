// const score = 400
// console.log(score)
// const balance = new Number(600) // it will specify that balance have number value
// console.log(balance)// it will data type also

// console.log(balance.toString());//now this is string 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//give ans upto 2 decimial point 

// let num = 2212.897
// console.log(num.toPrecision(4));// roundoff to the deasised position 


// let Hundreds = 100000000
// console.log(Hundreds.toLocaleString());//by using this we can put commas b/w zeros accoring to numbersystem



//+++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-3));//convert to +ve
// console.log(Math.round(3.7));
// console.log(Math.ceil(4.2));//give top value op for this will be 5
// console.log(Math.floor(4.9));// give lower value op for this will be 4
// console.log(Math.max(2,3,2,4))
// console.log(Math.min(2,3,4,3))



console.log(Math.random());//it will give values b/w 0 and 1 
console.log(Math.random()*10)//it will increase rage from 0 to 10
console.log((Math.random()*10) +1)// it will modify the range from 1 to 10
console.log(Math.floor((Math.random()*10)+1)) // it will remove all the point values and give floor integer value 


// important formula 
let min = 10
let max = 20
console.log(Math.floor((Math.random()*(max-min+1))+min)) //using this we can print random rumber from our deasirable range 

