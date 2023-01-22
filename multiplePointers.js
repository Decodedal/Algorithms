 //write a function called sumZero which accepts a sorted array of integers. 
 //The function should find the first pair where the sum is 0. Return an array that 
 //includes both values that sum to zero or underfined if a pair does not exist

 //Naive Solution O(N**2)

 function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0 ){
                return [arr[i], arr[j]]
            }
        }
    }
 }

//  console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

//this solution is only possible because it is a sorted array. you have two pointers one looking
//at the begining and one looking at the end. and you compare them 

function sumZeroPointers(arr){
    let left = 0; 
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        console.log([arr[left], arr[right]])
        console.log(sum)
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}
//  console.log(sumZeroPointers([-4,-3,-2,-1,0,1,2,5]))

 //implement a function called count unique values which accepts a sorted array, and couts the unique values in the array. There can be negative values in the array. but it will always be sorted 

const countUniqueValues = (arr) =>{
    if(arr.length === 0) return 0 
    let point1 = 0
    let point2 = 1
    while(point2 < arr.length){
        if (arr[point1] === arr[point2]){
            point2++
        }else{
         point1++
         arr[point1] = arr[point2]
         point2++
        }
    }
    return point1 + 1
}
 
 
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// let test =[1,2,3,4]
// test[1] = test[2]
// console.log(test)