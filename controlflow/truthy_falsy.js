let getemail = "abc@gmai;.com"
if (getemail){
    console.log("got email");
}
else{
    console.log("no email found");
    
}

// falsy 
// false, 0, -0, bigint 0n, "", null, undefine, NaN


// all other are tuthy valsue 
// some are -- "0", "false", " ", [], {}, function(){



// Nullish Coalescing operator (??) : nulll and undefine

// ?? operator ignores null and undefined valuse 
let val 
val = 5??10
vel = null ?? 10
// in first calse ans will be 5 and in second case ans will be 10
// console.log(vel);




// Terniary Operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("grater than 80");


