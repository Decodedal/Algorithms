//loop over the longer string
//loop over the shorter string 
//if the characters dont match, break out of the inner loop 
//if the characters do match, keep going
//if you complete the inner loop and finad a match, increment the count of matches 
//return the count 

const naiveStringSearch = (long, short) =>{
    let count = 0 
    for(let i = 0; i<long.length; i++){
       for(let j = 0; j < short.length; j++){
        console.log(short[j], long[i+j])
            if(short[j] !== long[i+j]){
                console.log("break")
                break;
            }
            if(j === short.length -1){
                count++;
            }
       }
    }
    return count
}

console.log(naiveStringSearch("lolrie loled", "lol"))