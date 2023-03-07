//creating the class structure for a binary search tree

//only important thing here is the root
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let currentNode = this.root;
            while(true) {
                if(newNode.value === currentNode.value)return undefined;
                if(newNode.value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
                if(newNode.value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left;
                    }
                }
            }
        }
    }

    // recursiveInsert(root, value){
    //     if()
    // }

    find(value){
        if(!this.root) return undefined;
        let currentNode = this.root;
        while(true){
            if(currentNode.value === value) return currentNode;
            if(currentNode.value > value){
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
            if(!currentNode)return undefined;
        }
    }
}

//instead of a next and prev we have a left and right 
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let newTree = new BinarySearchTree();
newTree.insert(10);
newTree.insert(7);
newTree.insert(15);
newTree.insert(3);

console.log(newTree.find(2));
//insanciating class
//notice it is a pain to insert into the tree this way we will make a method to sort for use where a node should go 
// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree)

//inserting a node psudo code
//create a new node starting at the root check if a root exists
//if their is a root check if the value of the new node is greater than or less than the value of the root 
//if greater
    //check to see if there is a node to the right 
        //if there is, move to that node and repeat these steps 
        //if not add that node as the right property
//if is less 
    //check to see if there is a node to the left
        //if yes move to that node and repete these steps
        //if there is not add that node as the left property
        
        
