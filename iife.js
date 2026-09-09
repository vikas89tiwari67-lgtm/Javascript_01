//  Immediatly Invoked Function Expression (IIFE)

(function One(){
    console.log(`Named IFFE Function`);
    
})(); // this is an iife function we neet to write this function in paranthises and one more parentasis to execute this and we need to end this function using ";" 


((name)=>{
    console.log(`unnamed IIFE Function  created by ${name}`);
})("abc");