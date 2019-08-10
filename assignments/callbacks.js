// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(items.length);
}

getLength()

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(items.slice(-1)[0]);
}

last()

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(x + y);
}

sumNums(3, 4)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(x * y);
}

multiplyNums(10, 5)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(items.includes('Notebook'));
}

contains()

/* STRETCH PROBLEM */

const newArr = [1, 2, 3, 1, 2, 3];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const unique = newArr.filter(function(x, y) {
    return newArr.indexOf(x) == y;
  });
  cb(unique);
}

removeDuplicates(newArr, function(result) {
  console.log(result);
})

