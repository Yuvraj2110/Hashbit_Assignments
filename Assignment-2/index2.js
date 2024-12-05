// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

 function calculate(op,a,b){
     switch(op){
         case 'add':
             return a+b;
         case 'sub':
             return a-b;
         case 'mul':
             return a*b;
         case 'div':
             return a/b;
         default:
             return "Invalid operation";
     }
 }
 console.log(calculate('mul',6,3));