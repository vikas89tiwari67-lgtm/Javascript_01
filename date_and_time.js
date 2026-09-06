let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toString());

// let newdate = new Date(2026,9,26)
// console.log(newdate.toDateString());

// let newdate = new Date(2026,9,26,5,3)
// console.log(newdate.toLocaleString());
// let newdate = new Date("2026-09-05")
// console.log(newdate.toLocaleString());
let newdate = new Date("05-09-2026")
// console.log(newdate.toLocaleString());

let timespan = Date.now()
console.log(timespan);
console.log(newdate.getTime());

console.log(Math.floor(Date.now()/100));//it will give anshwer in seconds and remove all the values after point 



// useing .get(we can get too many function like month day year time etc)
