//much faster form of search 
//rather than eliminating one element at a time you cna eliminate half of the remaining elements at a time
//Binary search only works on soted arrays! 

//psudo
//function accepts a sorted array and a value 
// create a keft pointer at the start of the array, and a right pointer at the end of the array
//while the left pointer comes before the right pointer
    //create a pointer in the middle 
    //if you find the value you want, return the index
    // if the value is too small, move the left pointer up
    //if the value is too large, move the right pointer down 
//if you never find the value, return -1

//my failed attampt
 const binarySearch = (arr, num) =>{
    
        let start = 0
        let end = arr.length -1
        let middle = Math.floor((arr.length -1) / 2)
  while(arr[middle] !== num){
    if(num === arr[middle]){
        return middle
    }
    if(num > arr[middle]){
       arr= arr.slice(middle + 1)
       start = middle + 1
    }
    if(num < arr[middle]){
       arr = arr.slice(start, middle)
       end = middle - 1
 }
   middle = Math.floor((arr.length -1) / 2)
}
 }

//  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],5))

// let test = [1,2,3,4]
// let test = [1,2,3,4,5,6,7,8,9,10]

// console.log(test[Math.floor((test.length -1) / 2)])

//teacher solution 

function binarySearchTeacher(arr, elem){
    let start = 0; 
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2)
    while(arr[middle] != elem){
        console.log([start, middle, end])
        if(elem < arr[middle]){
            end = middle -1
        }else{
            start = middle + 1
        }
        middle = Math.floor((start + end)/2)
        if(middle === 0 || middle === arr.length -1 ){
            return -1
        }
    }
    return middle
}

// console.log(binarySearchTeacher([2,5,6,9,13,15,28,30],50))
 
const binarySearchTakeTwo = (arr, num) =>{
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(num != arr[middle]){
        if(num > arr[middle]){
            start = middle + 1;
        }else{
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2)
        if(start > end){
            return - 1;
        }
    }
    return middle;
}

console.log(binarySearchTakeTwo([2,5,6,9,13,15,28,30],31))