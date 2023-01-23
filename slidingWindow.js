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
        console.log(temp, max)
    }
    return max
}

console.log(maxSubarrayNested([2,6,9,2,1,8,5,6,3], 3))



function maxSubarraySum(arr, num){
    let maxSum = 0; 
    let tempSum = 0; 
    if (arr.length<num)return null;
    for(let i = 0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i < arr.lenght; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}