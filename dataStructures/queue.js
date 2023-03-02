// FIFO First In First Out like waiting in line 

//Que with an array 

let q = []

q.unshift("1")
q.unshift("2")
q.unshift("3")

q.pop()
console.log(q)

//class based Q 
class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

class Que{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0; 
    }


    enQue(value){
        const newNode = new Node(value)
        if(this.length = 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
        return this;
    }

    deQue(){
        if(this.length <= 1){
            this.first = null;
            this.last = null;
            this.length = 0;
        }
        const current = this.first;
        for(let i = 0; i < this.length -1; i++){
            console.log(current)
            current = current.next;
            console.log(current)
        }
        const poped = this.last;
        // current.next = null;
        this.last = current;
        this.length--;
        if(this.length === 1) this.first = current;
        return poped
    }
}

const que = new Que;

que.enQue(1)
que.enQue(2)
que.enQue(3)
que.deQue()
que.deQue()

console.log(que)

//needs fixing