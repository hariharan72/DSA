// Q9. Write a program to reverse a stack.

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
}

var stroke = new stack();
stroke.add(1);
stroke.add(2);
stroke.add('rahul');
stroke.add('orps');
// stroke.remove()
// stroke.peek();
stroke.read();
stroke.reverse();



