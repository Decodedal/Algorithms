// const maxHeep = [0,1,2,3,4];

// const insert = (num) =>{
//     maxHeep.push(num);
//     if(maxHeep.length === 0) return maxHeep;
//     let child = maxHeep.length -1
//     let parent = (child - 1) / 2
//     while(parent > 1){
//         if(maxHeep[child] < maxHeep[parent]){
//            return maxHeep
//         }else{
//             [maxHeep[child], maxHeep[parent] =  maxHeep[parent], maxHeep[child]] 
//             let child = maxHeep.indexOf(num);
//             let parent = (child - 1) / 2
//         }
//     }
    
// }

// we need a class 

class maxHeep{
    constructor(){
        this.values = [10,8,7,5]
    }

    insert(value){
        this.values.push(value);
        this.bubbleUp()    
    }


    bubbleUp(){
        let childIdx = this.values.length-1;
        let child = this.values[childIdx];
        while(childIdx > 0){
                let parentIdx = Math.floor((childIdx - 1) / 2);
                let parent = this.values[parentIdx];
                if(child < parent) break;
                this.values[parentIdx] = child;
                this.values[childIdx] = parent;
                childIdx = parentIdx;
        }
    }    

    extractMax(){
        let max = this.values[0]
        let newRoot = this.values.pop();
        if(this.values.length > 0){
        this.values[0] = newRoot;
        this.sinkDown()
        }
        return max
    }

    sinkDown(){
        //if there is a left or a right that is greater then the root swap the root with the greater element 
        let idx = 0;
        let element = this.values[idx]; 
        const length = this.values.length;
         while(true){
            let leftChildIdx = (idx * 2) + 1
            let rightChildIdx = (idx * 2) + 2
            let leftChild, rightChild;
            let swap = null
            if(leftChildIdx < length){
            leftChild = this.values[leftChildIdx];
            if(leftChild > element){
                swap = leftChildIdx
            }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(rightChild > element && rightChild > leftChild){
                    swap = rightChildIdx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
         }
    }

}

const Heep = new maxHeep()

Heep.insert(55)
Heep.insert(155)
Heep.insert(355)

console.log(Heep)