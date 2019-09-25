// Given an array of integers, write a function to determine whether
// the array could become non-decreasing by modifying at most 1 element.
// For example, given the array [10, 5, 7], you should return true,
// since we can modify the 10 into a 1 to make the array non-decreasing.
// Given the array [10, 5, 1], you should return false,
// since we can't modify any one element to get a non-decreasing array.

function determinNonDecreasingArray(array) {
  const newArray = [];
  let tempNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1] && tempNumber < array[i + 1]) {
      tempNumber = array[i];
    } else {
      newArray.push(array[i]);
    }
  }

  return true;
}

console.log(determinNonDecreasingArray([10, 5, 7]));
