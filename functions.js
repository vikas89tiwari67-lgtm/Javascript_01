function saymyname(){
    console.log("vikas");
    
}
// saymyname()

// function addTwonum (n1,n2){
//     console.log(n1+n2);
    
// }
// addTwonum(2,3)


function addTwonum (n1,n2){
    // let result = n1+n2
    // console.log(result);
    // return result
    return n1 + n2

}
// let ans = addTwonum(2,3)
// console.log(ans);


function isuserlog (usern){
    if (usern === undefined){ //or we can write it as if(!usern){}
        console.log("please enter a user name ");
        return
    }
    return `${usern} just login`
}
// console.log(isuserlog("aman"));


function combine(...num){
    return num
}
console.log(combine(300,4400,500));
