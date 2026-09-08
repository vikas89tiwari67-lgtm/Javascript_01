// let a = 123 // global scope // it can be used anywhere in the code 

// if(true){
//     //block scope
//     let a = 798 // we can't use it out side this block
//     console.log(a);
    
// }
// for (let i  = 0; i  < 10; i ++) { // here i is only valide inside the loop we cann't use i out side the loop
//     const element = i*i
//     console.log(element)
    
// }

// console.log(a);



function one(){
    let user = "abc123"
    function two(){
        let web = "abc.com"
        console.log(user);
        
    }
    two()
    

}
one()