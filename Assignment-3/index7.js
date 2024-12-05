// Q7)
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
 //  Use array.map and array.reduce.
let newArr=students.map((num)=>{
    num.average=num.scores.reduce((sum,num)=>{
        return sum+=num;

    },0)/num.scores.length;
    delete num.scores;
    return num;
})
console.log(newArr);