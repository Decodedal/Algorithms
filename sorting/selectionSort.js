//Similar to bubble sort, 
//but instead of first placing large values into sorted position, 
//it places small values into sorted position
//sorted data accummulating at the begining   

// my attempt not working 
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i
        console.log(`pass ${i}`)
        for(let j = i + 1; j < arr.length; j++){
            if(arr[min] > arr[j]) min = j
            // console.log(min)
            
        }
        if(arr[min] !== arr[i]){
             [arr[i], arr[min]]  = [arr[min], arr[i]]
            // console.log(arr[min], arr[i])
        }
    }
     return arr
}

console.log(selectionSort([1,6,3,22,5,97,3,1,43]))

//Store the first element as the smallest value you've seen so far. Compare this item to the next item in the array 
//until you find a smaller number. 
//if a smaller number is found, designate that smaller number to be the new "minimum" and continue intil the end of the array.
//if the minimum is not the value you initially began with, swap the two values