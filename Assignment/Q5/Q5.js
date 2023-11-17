// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(numberOfDiscs,tower1,tower2,tower3){
    if(numberOfDiscs===0){
        return 0;
    }
    if(numberOfDiscs===1){
        console.log(`move disc 1 from ${tower1} to ${tower3}`)
        return ;
    }
    towerOfHanoi(numberOfDiscs-1,tower1,tower2,tower3);
    console.log(`move disc ${numberOfDiscs} from ${tower1} to ${tower2}`)
    towerOfHanoi(numberOfDiscs-1,tower2,tower1,tower3);
}





towerOfHanoi(3,'A','B','C');