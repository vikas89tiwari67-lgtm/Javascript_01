let name = "vikas"
console.log(name+ 17 + "age")
// another way to do so 
console.log(`my name is ${name} and my age is ${19}`)

let gameName = new String ("anythin-gone") 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("g"));


let newstring = gameName.substring(0,4)//it can not hold negative value and ignore negative values 
console.log(newstring);
let anostring = gameName.slice(0,4)//it can hold negative values 
console.log(anostring);
let String2 = "   abcdefgh  &&&&gg"
console.log(String2)
console.log(String2.trim());//remove all the spaces it also have righttrim and lefttrim
console.log(String2.replace('&', '$'))
console.log(gameName.includes('g'));
console.log(gameName.split());
console.log(gameName.split('-'));

