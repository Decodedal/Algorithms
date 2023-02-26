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
        if(index < 0 || index >= this.length) return null;
        const median = this.length / 2;
        if(index <= median){
            let currentNode = this.head;
            for(let i = 0; i < index; i++){
                currentNode = currentNode.next;
            }
            return currentNode;
        }else{
            let currentNode = this.tail;
            for(let i = this.length - 1; i > index; i--){
                currentNode = currentNode.prev;
            }
            return currentNode;
        }
    }

    set(index, val){
        if(index < 0 || index >= this.length) return undefined;
        const target = this.get(index);
        target.val = val;
        return target        
    }

    insert(index, val){
        if(index < 0 || index >= this.length)return undefined;
        if(index ===  this.length) return !! this.push(val);
        if(index === 0) return !! this.unshift(val);
        const newNode = new Node(val);
        const target = this.get(index);
        let prev = target.prev;
        prev.next = newNode;
        target.prev = newNode;
        newNode.next = target;
        newNode.prev = prev;
        this.length++;
        return newNode;
    }
}


const doubley = new DoublyLinkedList()

doubley.push("0");
doubley.push("1");
doubley.push("2");
doubley.push("3");
doubley.push("4");
doubley.insert(2, "success")
// doubley.set(10, "Dally do dads")

// console.log(doubley.get(7))


// console.log(doubley.length)
console.log(doubley.print())