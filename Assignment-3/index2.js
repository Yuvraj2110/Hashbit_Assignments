// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
function revStr(str) {
    let arr=str.split(" ");
    arr.reverse();
    return arr.join(" ");
}
console.log(revStr("I love my India"));
