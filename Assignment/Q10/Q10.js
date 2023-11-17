// Q10. Write a program to find the smallest number using a stack.


class stack{
    constructor(){
        this.items = [];
        this.length=0;
    }
    add(element){
        this.items.push(element);
        this.length +=1;
    }
    remove(){
        this.items.pop();
        this.length -=1;
    }
    peek(){
        console.log(this.items[this.length-1]);
    }
    read(){
        console.log('Original stack : ',this.items)
    }
    reverse(){
        console.log('Reversed stack : ',this.items.reverse());
    }
    small(){
        this.items.sort((a,b)=>a-b)
        console.log(`smallest number of the array is : ${this.items[0]}`);
    }
}

var stroke = new stack();
stroke.add(321);
stroke.add(21);
stroke.add(45);
stroke.add(32);
// stroke.remove()
// stroke.peek();
stroke.read();
// stroke.reverse();
stroke.small();




