const tu = new Object()


tu.id = "abc123"
tu.name= "abcde"
tu.email = "abc@gmail.com"
tu.isloogedin = false

// console.log(tu);

const sb = {
    email: "abcefg@gmail.com",
    name: {
        firstname: "abc",
        midname: "xyz",
        lastmane: "tuv"

    }

}
// console.log(sb);
// console.log(sb.name);
// console.log(sb.name.firstname);
// console.log(sb.name.lastmane);
// console.log(sb.name.midname);


const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// let obj3 = {obj1, obj2}
// let obj3 = Object.assign({},obj1,obj2)
let obj3 = {...obj1, ...obj2}
console.log(obj3);







