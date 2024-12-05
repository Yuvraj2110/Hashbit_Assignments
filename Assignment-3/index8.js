// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function func(num){
    if(num<10)return num;
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return func(sum);
}
console.log(func(4561));
