class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    print(){
        let arr = [];
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            let obj = {
                "val" : currentNode.val,
                "prev" : currentNode.prev,
                "next" : currentNode.next
            }
            arr.push(obj)
            currentNode = currentNode.next
        }
        return arr;
    }

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
            this.length++;
            return newNode
        }
    }

    pop(){
        if(this.length <= 1){
            this.head = null;
            this.tail = null; 
            this.length = 0;
            return this;
        }
        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail
        this.length--;
        return this;
    }

    shift(){
        if(this.length <= 1){
            this.head = null;
            this.tail = null; 
            this.length = 0;
            return this;
        }
        const newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        this.length--
    }

    unshift(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }else{
            const oldHead = this.head;
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
            this.length++;
            return this;
        }
    }

    get(index){
        if(index < 0 || index > this.lenght) return undefined;
        const median = Math.floor(this.length/2)
        if(index <= median){
            let currentNode = this.head;
            for(let i = 0; i < index; i++){
                currentNode = currentNode.next;
            }
            return currentNode;
        }else{
            let currentNode = this.tail;
            for(let i = this.length; i > index; i--){
                currentNode = currentNode.prev;
            }
            return currentNode;
        }
    }
}


const doubley = new DoublyLinkedList()

doubley.push("1");
doubley.push("2");
doubley.push("3");
console.log(doubley.get(3))


// console.log(doubley.length)
// console.log(doubley.print())