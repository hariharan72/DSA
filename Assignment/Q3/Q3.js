// Write a program to check if two strings are a rotation of each other?

var rotationCheck = function(str1,str2){
    if(str1.length!==str2.length){
        return `${str1} and ${str2} are NOT Rotations of Each Other`;;
    }
    var conc=str1+str1;
    // console.log(conc)
    if(conc.includes(str2)){
        return `${str1} and ${str2} are Rotations of Each Other`;
    }else{
        return `${str1} and ${str2} are NOT Rotations of Each Other`;
    }
}


console.log(rotationCheck('bourborn','bornbour'));
console.log(rotationCheck('cracker','krecrac'));
