//This pattern involves creating a window which can either be an array or number from one position to another 
//Depending on a certain condition the window either increases or closes and a new window is created 
//Very useful for keeping track of a subset of data in an array/string etc

//  write a function calles maxSubarraySum which accept an array of integers and a number called n. 
//The function should calculate the maximum sum of n consecutive elements in the array 

//nieve approach 
function maxSubarrayNested(arr, num){
    if (num>arr.length){
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i<arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[ i + j];
        } 
        if(temp > max){
            max = temp;
        }
        // console.log(temp, max)
    }
    return max
}

// console.log(maxSubarrayNested([2,6,9,2,1,8,5,6,3], 3))


//sliding window approach we calculate the sum the first time then simply subtract a number from the begining and add the next number on at the end. 
function maxSubarraySum(arr, num){
    //short circit for edge case
    if (arr.length<num)return null;
   
    let maxSum = 0; 
    let tempSum = 0; 
    //loop time find out itital sum 
    for(let i = 0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.lenght; i++){
        tempSum += arr[i] - arr[i-num] ;
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null;
 
//     let total = 0;
//     for (let i=0; i<num; i++){
//        total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//        currentTotal += arr[i] - arr[i-num];
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }


console.log(maxSubarraySum([100,200,300,400], 2))
