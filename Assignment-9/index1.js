// 1.Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

// let, const -> block scope
// var-> function scope

function scopeDiff() {
    let a=2;
    var b=3;
    if(1){
        let a=5;
        // var a=5 -> error

        var b=6;
        // let b=6; -> no error but will not change outer var b
    }
    console.log(a,b);// -> a is stll=2, b becomes 6

}
scopeDiff()