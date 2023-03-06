
    const fib = (n) =>{
        if( n < 1 ) return n;
        return fib(n-1) + fib(n-2)
    }

    // console.log(fib(5))

//lets learn fibonacci sequence with recursion
//first iterative fib 

const itFib = (num) =>{
    if(num < 3) return 1;

    let prev = 0;
    let curr = 1;

    for(let i = 2; i < num; i++){
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

console.log(itFib(10))