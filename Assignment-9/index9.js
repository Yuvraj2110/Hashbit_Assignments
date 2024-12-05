// 9.Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
 let obj1={a:1,b:2};
 let obj2={b:2, c:3,d:5};
 function merge(a,b) {
     return Object.assign(a,b);
 }
 let obj3=merge(obj1,obj2);
 console.log(obj1,obj2);
 console.log(obj3);