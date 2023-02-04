//CONCEPT 
//It's a combination to two things merging and sorting!
//Exploits the fact tha tarrays of 0 or 1 element are always sorted 
//Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

//splits up the nubers until their each an array by themselves then sorts them back layer by layer

//writing a function to merge two sorted arrays 
//given two arrays which are sorted this helper fuction should create a new array which is also sorted, 
//and consisits of all of the elements in the two input arrays.

function merge(arr1, arr2){
    let sorted = [];
    let i = 0;
    let j = 0; 
    while(i < arr1.length && j < arr2.length){
     if(arr1[i] < arr2[j]){
        sorted.push(arr1[i]);
        i++;
     }else{
        sorted.push(arr2[j]);
        j++;
     }
    }
    while( i < arr1.length){
        sorted.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        sorted.push(arr2[j]);
        j++
    }
    return sorted;
}

console.log(merge([1,4,6,9], [2,3,7,8,11, 15 , 22]))