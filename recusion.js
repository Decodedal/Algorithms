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

console.log(power(2,4))