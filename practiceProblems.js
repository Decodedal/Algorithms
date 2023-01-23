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

console.log(isSubsequence('abc', 'acb'))