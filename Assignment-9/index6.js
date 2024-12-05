// 6.Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
 const personToStr=(p)=>{
     return `Hello, my name is ${p.name}.
     I am a ${p.age} years old ${p.occupation} from ${p.city}`
 }
let person={
    name:"Yuvraj",
    age:"21",
    occupation:"Student",
    city:"Roorkee"
}
let str=personToStr(person);
console.log(str);