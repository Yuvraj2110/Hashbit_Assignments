// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
function count(str){
    let c=0,v=0;
    let arr=str.split('');
    arr.forEach(char => {
        vowels.includes(char)?v++:c++;
    });
    return [c,v];
}
console.log(count("mhurwdseasxdfvdfgd"));