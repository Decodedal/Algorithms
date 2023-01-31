//write a fuction which takes in a string and returns counts of each charactter in the string. 

// charCount("aaaa"); should return {a:4}

const charCount = (word) => {
    if (word === ""){
        return {}
    }
    word = word.toLowerCase()
    let counter = {}
    for (let i = 0; i < word.length; i++){
        if(word[i] in counter){
            counter[word[i]]++
        }else{
            counter[word[i]] = 1
        }
    }
    return counter
}


// console.log(charCount("Resis peces "))


// let myObj = {
//     Dallas:"name",
//     codeing:"game",
//     num:1
// }

// console.log(myObj.num+=1)

function videoCharCount(str){
    //return an object with keys that are lowercase alphanumeric characters in the string
    //make object to return 
    //loop over string for each char 
        //if char/num is key in object add one to count 
        //if not in object add it and set value to 1
        //if space or period dont do anything
    //return at end
    let object = {}
    for (let char of str){
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)){
            object[char] = ++object[char] || 1;
        }
    }
    return object
}

// console.log(videoCharCount("This iS a TEst..."))

function isString(str){
    let q = ''
    if(typeof(str)== "string"){
        q = "Dallas" || "Poop"
    }
    return q
}

console.log(isString("hi"))