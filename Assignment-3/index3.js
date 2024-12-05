// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let str = 'INDIA';
let arr=str.split('');
arr.splice(3,0,'O','N','E','S');
str=arr.join('');
 console.log(str);