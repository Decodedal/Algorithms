// FIFO First In First Out like waiting in line 

//Que with an array 

// let q = []

// q.unshift("1")
// q.unshift("2")
// q.unshift("3")

// q.pop()
// console.log(q)

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
        this.size = 0; 
    }


    print(){
        let currentNode = this.first;
        for(let i = 0; i < this.size; i++){
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
    }

    enQue(value){
        const node = new Node(value)
        if(!this.first){
            this.first = node;
            this.last = node;
            this.size++
        }else{
            this.last.next = node;
            this.last = node;
            this.size++
        }
        return this
    }

    deQue(){
        if(this.size <= 1){
            this.first = null;
            this.last = null;
            this.size = 0;
        }else{
            this.first = this.first.next;
            this.size-- ;
        }
        return this;
    }


//my mistake was that to remove from this linked list at the end you have to go all the way through the list to the end adding to the end and removing from the beginning keeps time complexity to O(1)

    // enQue(value){
    //     const newNode = new Node(value)
    //     if(this.length = 0){
    //         this.first = newNode;
    //         this.last = newNode;
    //     }else{
    //         newNode.next = this.first;
    //         this.first = newNode;
    //     }
    //     this.length++;
    //     return this;
    // }

    // deQue(){
    //     if(this.length <= 1){
    //         this.first = null;
    //         this.last = null;
    //         this.length = 0;
    //     }
    //     const current = this.first;
    //     for(let i = 0; i < this.length -1; i++){
    //         console.log(current)
    //         current = current.next;
    //         console.log(current)
    //     }
    //     const poped = this.last;
    //     // current.next = null;
    //     this.last = current;
    //     this.length--;
    //     if(this.length === 1) this.first = current;
    //     return poped
    // }
}

const que = new Que;

que.enQue(1)
que.enQue(2)
que.enQue(3)
que.deQue()
que.deQue()

console.log(que)
que.print()

//needs fixing