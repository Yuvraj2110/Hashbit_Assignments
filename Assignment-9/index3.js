// 3.Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function nothing(arr) {
    arr.push(5);
    console.log(arr);
    arr.pop();
    console.log(arr);
}
let arr=[1,4,2,3,7,86,5,91,22];
nothing(arr);