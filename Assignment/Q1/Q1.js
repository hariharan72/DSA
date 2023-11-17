// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
var sumPair=function(arr,sum){
    let result=[];
    for(let i=0;i<arr.length;i++){
         for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                result.push(arr[i],arr[j]);
            }
         }
    }

    return result;
}

var arr1=[1,2,3,4,5,6,7];
var givenSum=12;
console.log(sumPair(arr1,givenSum));





