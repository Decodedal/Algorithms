//Builds up the sort by gradually creating a larger half which is always sorted 
 
//psudo
//stat by picking the second element in the array 
//Now compare the second element with the one before it and swap if necessary. 
//Continue to the next element and if it is in the incorrect order, 
//iterate through the sorted portion to place the element in the correct place. 

function insertionSort(arr){
 for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j+1] = arr[j]
        console.log(arr)
    }
    arr[j+1] = currentVal
 }
 return arr
}

console.log(insertionSort([6,2,7,1,4]))