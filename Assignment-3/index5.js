// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
function correctfn(string, wrong, correct){
    return string.replace(wrong,correct);
}
console.log(correctfn("i am a learnar","learnar","learner"));