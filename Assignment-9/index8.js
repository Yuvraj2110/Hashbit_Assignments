// 8.Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
 let obj = {
   name: "Yuvraj",
   age: "21",
   occupation: "Student",
   city: "Roorkee",
 };
 function nothing(obj) {
     return Object.keys(obj);
 }
 console.log(nothing(obj));