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
 console.log(sumZeroPointers([-4,-3,-2,-1,0,1,2,5]))