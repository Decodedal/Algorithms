//Write a function called SAME which accepts two arrays. 
//The function should return true if every value in the 
//arry has it's corresponding value squared in the second array. The frequency of values must be the same.
//


//NAIVE SOLUTION Time complexity 0(n**2)
function same (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        //index of loops over the arr so it is the nested loop 
        let conrrectIndex = arr2.indexOf(arr1[i] ** 2)
        if (conrrectIndex === -1){
           return false
        }
        arr2.splice(conrrectIndex, 1)
    }
    return true
}

// console.log(same([1,2,3], [4,1,9]))

//Better solution time complexity is O(N)

function same2(arr1 , arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }
    for(let key in frequencyCounter1){
        //if the key squared is not in frequency counter 2 return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //if the key squared and the key dont have the same value return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

// console.log(same2([1,2,3,2], [9,1,4,4]))


function validAnagram(string1, string2){
    if (string1.length != string2.length){
        return false
    }
    let counter1 = {}
    let counter2 = {}
    for(letter of string1){
        counter1[letter] = (counter1[letter] || 0 ) + 1
    }
    for(letter of string2){
        counter2[letter] = (counter2[letter] || 0) + 1
    }
    for(key in counter1){
        if(!(key in counter2)){
            return false 
        }
        if(counter2[key] !== counter1[key]){
            return false
        }
    }
    return true
}

// console.log(validAnagram('azza', "zaza"))


//teacher solution

//this solution creates an object that keeps track of the letters in the first word and then
//compares that with the second word. It uses only 2 loops where my solution above used 3  

function teacherAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }
    const lookUp ={}
    
    //loop through first word and make obj to track letter count
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }
     console.log(lookUp)
    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if(!lookUp[letter]){
           return false
        }else{
            //if you can find the letter subtract one from its value 
            lookUp[letter] -=1;
        }
    }
    console.log(lookUp)
    return true
}

console.log(teacherAnagram('azzzza', "zaza"))