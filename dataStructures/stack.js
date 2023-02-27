// last in first out LIFO principal  
//something important is that insertian and removal must be constant time O(1)

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null; 
        this.last = null;
        this.length = 0; 
    }
    push(val){
        const node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            node.next = this.first;
            this.first = node;
        }
        this.length++;
        return this;
    }
    
    pop(){
        if(this.length <= 1){
            this.first = null;
            this.last = null;
            this.length = 0;
        }else{
            const newFirst = this.first.next;
            this.first.next = null;
            this.first = newFirst;
            this.length--;
        }
        return this;
    }
}

const stack = new Stack()

stack.push("Dallas")
stack.push("andrew")
stack.push("palumbo")
stack.pop()
stack.pop()


console.log(stack)