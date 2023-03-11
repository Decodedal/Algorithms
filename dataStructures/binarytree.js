//this tree is not ordered in any particular way. In order to fully search 
//You will have to visit every node in the tree

//BFS Breadth first search visting evry node on the same level before moving on to the next level 

//DFS Following one node path all the way down to a leaf before moving on to any siblings 
//approaches are pre order we start with the root node and add that to our arr of nodes
//then we explore one side adding node to arr and then expolring its children 

//Post order we only visit a node after we explore its children
//in order we explore half the childeren explore the parent then return and explore the right half

//so whats the diffrence 
//bfs will have more memory storage so if you have many nodes and not theat many layers might not be the best 

//pre order is good for capturing a tree in order to reconstruct it later


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

    bfs(){
        let que = [];
        let nodeList = [];
        que.push(this.root);
        // if(!this.head) return nodeList;
        while(que.length){
            let node = que.pop();
            nodeList.push(node.value);
            if(node.left) que.push(node.left);
            if(node.right) que.push(node.right);
        }
        return nodeList;
    }

    DFSPreOrder(){
        let nodeArr = [];
        const traverse = (node) =>{
            nodeArr.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(this.root);
        return nodeArr;
    }

    DFSPostOrder(){
        let nodeArr = [];
        const traverse = (node) =>{
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            nodeArr.push(node.value)
        }
        traverse(this.root);
        return nodeArr;
    }

    DFSInOrder(){
        let nodeArr =[];
        const traverse = (node) =>{
            if(node.left) traverse(node.left);
            nodeArr.push(node.value);
            if(node.right)traverse(node.right);
        }
        traverse(this.root);
        return nodeArr;
    }

}

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
newTree.insert(1);
newTree.insert(17);

// console.log(newTree.DFSPreOrder())
console.log(newTree.DFSPreOrder())
console.log(newTree.DFSPostOrder())
console.log(newTree.DFSInOrder())