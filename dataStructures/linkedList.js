// A group of elements with no index where each element is pointing towards the next 
//structure contains a head tail and length property
//Linked list consisits of nodes and each node has a value and a pointer to another node or null

//seems like the reason they are useful is that they are not indexed. Arrays have poor preformance time when adding to the beginning becuase the whole array has to be re indexed. Linked lists are much easyer to make changes to no re-indexing.
//the traid off is their is no random access  

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//bad way of representing a linked list 

// let first = new Node("This")
// first.next = new Node("Is")
// first.next.next = new Node("Linked")
// first.next.next.next = new Node("List")

// console.log(first)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0 ;
    }

    push(val){
        const newNode = new Node(val)
        //edgecase for if the list is empty
         if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
         }else{
            //take the current tail and point it towards the new incomeing tail 
            this.tail.next = newNode;
            //Set the tail to now be the new mode
            this.tail = newNode;
         }
         this.length++;
         return this;
    } 

    traverse(){
       let current = this.head;
       while(current){
        console.log(current.val);
        current = current.next;
       } 
    }
     get(index){
       if(index < 0 || index >= this.length) return null;
       let current = this.head;
       let i = 0 
       while(index !== i){
        current = current.next;
        i++
       } 
       return current;
    }

    set(index, val){
    let foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false
    }

    pop(){
        if(!this.head)return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            //currrent is always lagging one behind 
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        //handles the edge case where the list is empty after a pop
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
        } 
    
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next; 
        this.length--; 
        if(this.length === 0) this.tail = null;
        return current;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.tail;
        }
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this
    }
    // !! just converts the return value to a bool 
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index ===  this.length) return !! this.push(val);
        if(index === 0) return !! this.unshift(val);
        const newNode = new Node(val);
        let prev = this.get(index - 1)
        let target = prev.next;
        prev.next = newNode;
        newNode.next = target; 
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length -1) return this.pop();
        if(index === 0) return this.shift();
        let prev = this.get(index -1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("I dont know why I say goodbye");
list.push("I say hello");

list.insert(3, "jelly bean");
list.remove(2);
list.traverse();
// list.get(3)

// list.pop()
// list.pop()
// list.shift()
// list.unshift("new head")
// list.traverse()


//unshift psudo code 
// no node? return undefined 
// store the current head in a var
//set the head the be the current head.next
//this.length--
//return valur of the node removed 

//get method psudo code 
//Takes an idex and returns the node value at that index 

// remove psudo code
// <0 or > this.length return false
// index == lengt -1 this.pop
// index == 0, shift
// get(index -1) set next to be next.next