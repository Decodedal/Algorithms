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
}

const Heep = new maxHeep()

Heep.insert(55)
Heep.insert(155)
Heep.insert(355)

console.log(Heep)