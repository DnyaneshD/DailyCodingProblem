// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the
// new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function solution(arr) {
  const leftArr = [];
  const rightArr = [];
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    leftArr.push(multiplyLeft(arr, i));
  }

  for (let j = 0; j < arr.length; j++) {
    rightArr.push(multiplyRight(arr, j));
  }

  for (let k = 0; k < arr.length; k++) {
    finalArr.push(leftArr[k] * rightArr[k]);
  }

  return finalArr;
}

function multiplyLeft(arr, index) {
  let product = 1;
  for (let i = index - 1; i > -1; i--) {
    product = product * arr[i];
  }
  return product;
}

function multiplyRight(arr, index) {
  let product = 1;
  for (let i = index + 1; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}

console.log(solution([1, 2, 3, 4, 5]));
