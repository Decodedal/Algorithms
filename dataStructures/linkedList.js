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
    

}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye")
list.push("I dont know why I say goodbye")
list.push("I say hello")


// list.pop()
// list.pop()
list.traverse()
