//as we loop through the array we compare each item to the one that comes after it and we ask if the number is 
//larger then the number that comes after it. If it is then we swap
//each pass the largest number "Bubbles to the top "
  
//swap function 
const swap = (arr, idx1, idx2) =>{
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

//psudo code 
//start looping with a variable called i the end of the array towards the beginning 
//Start an inner loop with a variable called j from the beginning until i - 1
//if arr[j] is greater than arr[j+1], swap those two values!
//return sorted arr

const myBubble = (arr1, arr2) =>{

}


//less optimized 

const notsogoodbubble = (arr) =>{
    
    for(let i = 0; i<arr.length; i++){
        console.log(arr)
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

// console.log(notsogoodbubble([37,45,29, 8, 2 , 66, 1]))

//optimized 

const optimizedBubble = (arr) =>{
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        console.log(arr)
       noSwaps = true
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

console.log(optimizedBubble([8,1,2,3,4,5,6]))
// console.log(optimizedBubble([37,45,29, 8, 2 , 66, 1]))