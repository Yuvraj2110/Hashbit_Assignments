// 10.Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array
 let arr=[1,2,3,4,5,6,7,8,8];
 let total=arr.reduce((acc,curr,i,arr)=>acc+curr,0);
 console.log(total);
