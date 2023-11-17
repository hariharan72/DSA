// Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

function infix(prefix){
    const fix = [];
    const operators = new Set (['+','/','-','*']);

    for(let i=prefix.length-1;i>=0;i--){
        const symbol = prefix[i];
        if(!isOperator(symbol)){
            fix.push(symbol);
        }else{
            const operand1=fix.pop();
            const operand2=fix.pop();
            const infixexp =  `(${operand1} ${symbol} ${operand2})`;
            fix.push(infixexp)
        }
    }
    return fix.pop();
}

console.log(infix('+-ab-cd'));
