// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function check(code){
    const stack =[];
    const brackets={'(':')','{':'}','[':']'};

    for(let i of code){
        if(brackets[i]){
            // console.log(i);
            stack.push(i);
        }else if(Object.values(brackets).includes(i)){
            const top = stack.pop();
            if (brackets[top] !== i) {
               return false;
            }
    }
}
return stack.length === 0;
}

var snippet='{ var a=1; var b=2; var c = a+b)+2';
console.log(`${check(snippet) ? 'Brackets are closed' : 'Brackets are not correctly closed/opened'}`);

