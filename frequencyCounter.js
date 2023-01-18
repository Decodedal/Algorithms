//Write a function called SAME which accepts two arrays. 
//The function should return true if every value in the 
//arry has it's corresponding value squared in the second array. The frequency of values must be the same.

//NAIVE SOLUTION
function same (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        let conrrectIndex = arr2.indexOf(arr1[i] ** 2)
        if (conrrectIndex === -1){
           return false
        }
        arr2.splice(conrrectIndex, 1)
    }
    return true
}

console.log(same([1,2,3], [4,9]))