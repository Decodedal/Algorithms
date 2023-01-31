const jokerLaugh = (num) =>{
    if (num > 10) return console.log("BatMan!")
    console.log("HAAHHAHAHAHA")
    return jokerLaugh(num + 1)
}

// jokerLaugh(1)

function countDown(num){
    if(num <=0 ){
        return console.log("blast off")
        
    }
    console.log(num)
    num--
 return countDown(num)
}

// console.log(countDown(10))

function sumRange(num){
    if(num ===1) return 1;
    return num + sumRange(num -1)
}

// console.log(sumRange(40))

// iterated factorial 

function factorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i 
    }
    return total
}

// console.log(factorial(10))

//recursive factorial

function recursiveFactorial(num){
    if(num === 1) return 1
    return num * factorial(num -1)
}

// console.log(recursiveFactorial(10))

function power(num, pow){
  if(pow === 0) {
  return 1
  }
  return num * power(num, pow -1)
}

// console.log(power(2,4))

function arraySum(arr){
    if (arr.length === 0) return 0
    return arr[0] + arraySum(arr.slice(1))
}

// console.log(arraySum([1,2,3]))

function productOfArray(arr){
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
// console.log(productOfArray([1,2,3,10]))

function fib(num){
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2)
  }

//   console.log(fib(28))

function reverse(str){
    let rev = [];
    let arr = str.split("");
    function revIt(str){
         if(str.length === 0)return;
         rev.push(str.pop())
        return revIt(str);
       
    }
    revIt(arr);
    return rev.join("");
}

// console.log(reverse("dallas"))


function isPalindrome(str){
    let rev = [];
    let arr = str.split("");
    function revIt(str){
         if(str.length === 0)return;
         rev.push(str.pop())
        return revIt(str);
       
    }
    revIt(arr);
    return (rev.join("") === str);
  }

//   console.log(isPalindrome('tacocat'))

function someRecursive(arr, callback){
    if(arr.length === 0) return false
    if(callback(arr[0])) return true
    return someRecursive(arr.slice(1), callback);
  }

  function flatten(arr){
    let flattened = []
    function makeArray(arr){
        if (arr.length === 0)return 0
        if(!Array.isArray(arr[0])){
            flattened.push(arr[0])
            return makeArray(arr.slice(1))
        }else{
            flattened.push(...arr[0])
            return makeArray(arr.slice(1))
        }
    }
    makeArray(arr)
    return flattened
  }

console.log(flatten([1, [2, [3, 4], [[5]]]]))
