//given an array this helper function should designate an element as the pivot 
//it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
//the helper should do this in place should not create a new array 
//when complete the helper shoudl return the index of the pivot 

//pickng the pivot point can effect run time. 
//ideally the pivot should be chosen to that it's roughly the median value in the data set 
//for simplicity we'll always choose the pivot to be the first element 

//PSUDO CODE
// accept three arguments an array, start index(0) and an end index(arr.length-1)
//store the current pivot index in a variable to keep track of where it ends up 
//For loop 
 //if (pivot > current element){
//        pivot++
//     [arr[piv], arr[i]] = [arr[i], arr[piv]]
// } 

//my function yay it works

function pivot(arr){
    let pivot = 0 
    let swap = 1
    if(arr[0] > arr[1]){
        pivot++
        swap++
    }
    for(let i = 2; i<arr.length; i++){
        if(arr[0]>arr[i]){
            pivot++;
            [arr[swap], arr[i]] = [arr[i],arr[swap]]
            swap++
        }
    }
    [arr[0],arr[pivot]] = [arr[pivot],arr[0]]
    return arr
}

// console.log(pivot([5,2,3,10,12,2,1,33]))

function coltPivot(arr, start=0, end=arr.length){
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i],arr[swapIdx]]
        }
    }
    [arr[swapIdx], arr[start]] = [arr[start],arr[swapIdx]]
    console.log(arr)
    return swapIdx
}

console.log(coltPivot([5,2,3,10,12,2,1,33]))