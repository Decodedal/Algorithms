//I am going to recreate the code for the linked list and node class to the best of my ability.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0; 
    }

    print(){
        //traverse the list and push each element to an array and then print the array
        let arr = [];
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            arr.push(current.val)
            current = current.next;
        }
        return arr
    }

    push(val){
        //create new node if list is empty make it the head and the tail.
        //else connect it to the next of the last node and change the new node to be the last node. 
        const node = new Node(val)
        if(this.head === null){
            this.head = node;
            this.tail = node; 
            this.length++
        }else{
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        return this
    }

    pop(){
        //return undefined if list empty 
        //traverse list find the second to last node and make that the new tail.
        if(this.length <= 1){
            this.head = null;
            this.tail = null;
            return this
        }
        let current = this.head;
        for(let i = 0; i < this.length -2; i++){
            current = current.next
            // console.log(current)
        }
        current.next = null;
        this.tail = current;
        this.length--
        return this;
    }

    shift(){
        //if the list length is 1 or 0 return an empty list
        //take the second element in the list and make it the new head
        if(this.length <= 1){
            this.head = null; 
            this.tail = null;
            this.length = 0;
            return this;
        }
        this.head = this.head.next;
        this.length--
        return this;
    }

    unshift(val){
        //if the list is empty new node becomes head and tail 
        //new node becomes new head and the old head becomes the new nodes next.
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        //as long as the index is not longer then the length or negative 
        //traverse the linked list till we find the node at the index;
        if(index < 0 || index > this.length) return undefined;
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        } 
        return current
    }

    set(index, val){
        //as long as the index is not longer then the length or negative 
        //get the node we are looking for and change its value
        if(index < 0 || index > this.length) return undefined;
        const targetNode = this.get(index);
        targetNode.val = val;
        return targetNode;
    }

    insert(index, val){
        //as long as the index is not longer then the length or negative 
        //get the node 1 before the index store its next in a var change its next to the new node and 
        //set the new node next to what was once their 
        const newNode = new Node(val);
        if(index < 0 || index > this.length) return undefined;
        const prev = this.get(index -1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++
        return this;
    }

    remove(index){
        //as long as the index is not longer then the length or negative 
        //get the index -1 change its next to be the next of next.
        if(index < 0 || index > this.length) return undefined;
        const prev = this.get(index -1);
        prev.next = prev.next.next;
        this.length--;
        return prev.next;
    }

    reverse(){
        //switch the head and the tail
        //go threw the list and change the next to point at the element that comes before it;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next; 
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

}

const list = new SinglyLinkedList()

list.push('1')
list.push('2')
list.push('3')
list.unshift("0")
list.insert(3,"puppy")
list.reverse()

console.log(list.print())
// console.log(list.get(-1))