// 5.Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
let arr=[1,2,3,4,5,6,7];
let odd=arr.filter((num,i)=>(num&1)==1);
console.log(odd);