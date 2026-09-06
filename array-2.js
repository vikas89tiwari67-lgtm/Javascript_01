const mcu = ["iran man", "spider man", "thor"]
const dc = ["batman", "superman", "flash"]
// mcu.push(dc)//it returns array inside array
// console.log(mcu);
// console.log(mcu[3][2]);

// const all = mcu.concat(dc)//it returns new variable other thst this puch return same array // and concat can add only two array
// console.log(all)

// sprade operator 


const all_heros = [...mcu,...dc]// we can add as  many array we wnt not like concat 
// console.log(all_heros)

const another_array = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13,14],15],[16,17]]
// console.log(another_array.flat(Infinity)) // it flats all sab array in one array


// console.log(Array.isArray("vikas"));
// console.log(Array.from("vikas"));//it coverts any this to array
// console.log(Array.from({name: "vikas"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//it convert multipal inputs to array 

