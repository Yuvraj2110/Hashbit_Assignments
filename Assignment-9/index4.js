// 4.Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let arr=[1,2,3,4,5];
let sqrd=arr.map((num,i)=>{return Math.pow(num,2)});
console.log(sqrd);