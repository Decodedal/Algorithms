var longestCommonPrefix = function(strs) {
   let total = 0
  for(let i = 0; i < strs[0].length; i++){
    let temp =strs[0][i]
    let counter = 0 
    for(let j = 0; j< strs.length; j++){
        if(strs[j][i] === temp){
           counter++
        }
    }
    console.log("*******")
    if(counter === strs.length){
        total += 1
    }else{
        break
    }
  }
  if(total === 0) return ""
   return strs[0].slice(0,total)

};

console.log(longestCommonPrefix(["flower","flow","flight"]))

//loop through the list comparing the letter 
//loop again to compair to the words in the list 

// console.log("flower".slice(0,0))