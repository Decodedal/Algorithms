//linear search psudocode 
//this function accepts an array and a value
//Loop through the array and check of the current array element is equal to the value 
//if it ism retryn the index at which the element is found 
// if the value is never found, return -1 

const linearSearch = (arr, val) => {

    for(let i in arr){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,65,6], 7))