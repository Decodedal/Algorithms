const sameFrequency = (num1, num2) =>{

    let counter = {}
    num1 = String(num1)
    num2 = String(num2)

    if(num1.length !== num2.length){
        return false
    }

    for(let i = 0; i < num1.length; i++){
      let currantNum = num1[i]
        counter[currantNum] ? counter[currantNum] += 1 : counter[currantNum] = 1
    }
    for(let j of num2){
        if(!counter[j]){
            return false
        }else{
            counter[j] -= 1
        }
    }
    return true
}

// console.log(sameFrequency(182, 281))

const areThereDuplicates = () =>{
    let counter = {};
    for(let i in arguments){
        counter[arguments[i]] = (counter[arguments[i]] || 0) + 1
    }
    for(let key in counter){
        if(counter[key] > 1) return true;
    }
    return false;
} ;

// console.log(areThereDuplicates("a","b","c","a"))

//Multiple Pointers - average Pair
function average(a,b){
    return (a + b) / 2 
}
//average first and last num if greater then target move top pointer lower and vice versa
function averagePair(arr, target){
    let point1 = arr[0]
    let point2 = arr[arr.length -1]
    for(let i = 0; i < arr.length; i++){
        let currentAvg = average(point1, point2)
        if(currentAvg === target) return true
            if(currentAvg > target){
                point2--
            }else{
                point1++
            }
        }
        return false
  }

//   console.log(averagePair([-1,0,3,4,5,6], 4.1))

//multiple pointers substring detector

function isSubsequence(str1, str2) {
    //check if str2 contains str1 in the exact right order but other letters can be in between
    let pointer1 = 0
    let pointer2= 0
    for(let i = 0 ; i < str2.length; i++){
        
        if(str1[pointer1] === str2[pointer2]){
           pointer1++
           pointer2++
        }
        else pointer2++
    }  
     return pointer1 === str1.length
  }

// console.log(isSubsequence('abc', 'acb'))

//sliding window 
// function maxSubarraySum(arr, target){
//     //add together the target num starting from front of arr
//     //loop through rmoving one at the begiing and adding one to the end till we reach less then then target away from the end
//     let max = 0
//     let tempSum = 0 
//     for(let i = 0; i < target; i++){
//         max += arr[i]
//     }
//     // console.log(max)
//     for(let j = target; j < arr.length; j++){
//         tempSum = arr[j] - arr[j-target] ;
//         max = Math.max(max, tempSum);
      
//     }
//     return max
//   }

//   console.log(maxSubarraySum([100,200,300,400], 2))


function maxSubarraySum(arr, num){
    if(arr.length < num ) return null;

    let max = 0 ;
    for(let i = 0; i < num; i++){
        max += arr[i]
    }
    let tempValue = max;
    for(let i = num; i < arr.length; i++){
        tempValue += arr[i] - arr[i-num]
        max = Math.max(max, tempValue)
    }
    return max;
}

//   console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))

//Sliging window This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }