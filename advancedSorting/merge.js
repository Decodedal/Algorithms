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

// console.log(merge([1,4,6,9], [2,3,7,8,11, 15 , 22]))

//MERGING PSUDO CODE
//Create an empty arrray. take a look at the smallest values in each input array 
// while there are still values we havent looked at ...
  //if the value in the first array is smaller than the value in the second array, push the value in the firast array into our results and move on the next value in the first array 
  //if the value in the first array is larger than the value in the second array, push the valu in the second array into our results and move on to the next value in the second array 
  //Once we exhaust one arraym push in all remaining values from the other array


  const mergeAgain = (arr1, arr2) => {
    let sorted = [];
    let i = 0 ;
    let j = 0 ;
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
        i++
    }
    while( j < arr2.length){
        sorted.push(arr2[j]);
        j++
    }
    return sorted
  }

//   console.log(mergeAgain([2,4,6,8,10,66,99,123],[1,3,5,7,9]))


  //MERGE SORT PSUDOCODE
  //uses recustion 
  //Break up the array into halves until you have arrays that are empty or have one element 
  //Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

  const mergeSort = (arr) => {
    //base case 
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle))
    return mergeAgain(left, right)
    }

 let test = [1,2,3,4,5,6,7,8,9,10]

 let high = test.slice(test.length / 2)
 let low = test.slice(0,test.length / 2)

 console.log(mergeSort([4,7,9,10,22,41,1,4]))

 //time complexity is 0(n log n)
 //the decomposition of the initial array into all the smaller arrays down to one element is 0(log n)
 //the merge function run on each array is 0(n)
 //so we combine them to get 0(n log n)
 //the space complexity is 0(n) because we create more arrays depending on how many elemets are in the inital array. 
 //takes up more space then the simpler algorithms, bubble sort, selection sort, insertion sort. 