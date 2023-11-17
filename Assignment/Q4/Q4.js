// Q4. Write a program to print the first non-repeated character from a string?

function nonRepeat(str){
    var count=new Map();
    for(let i of str){
    //    console.log(i);
    count.set(i,(count.get(i) || 0) + 1);
       
    }
    for(let i of str){
        if(count.get(i)===1){
            return `The First non-repeated character is ${i}`;
        }
    }

    return `There is no non-repeated character`;
}

console.log(nonRepeat('bobby'));



