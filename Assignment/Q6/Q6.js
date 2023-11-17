// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function prefix(Postfix){
   const fix = [];
   const operators = new Set(['+','-','/','*']);

   for(let i of Postfix){
    // console.log(i);
    if(!operators.has(i)){
        fix.push(i);
    }else{
        const operand2=fix.pop();
        const operand1=fix.pop();
        const result=`${i}${operand1}${operand2}`;
        fix.push(result);
    }
   }
 return fix.pop();
}
var example = '34+6/'
console.log(prefix(example))


