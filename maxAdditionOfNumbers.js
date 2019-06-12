// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6,
// and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

function solution(arr) {
  let i = 2;
  let count = 0;
  let startWithZero = true;

  while (i < arr.length) {
    let j = startWithZero ? 0 : 1;
    let tempCount = 0;

    while (j < arr.length) {
      tempCount = tempCount + arr[j];
      j = j + i;
    }

    if (tempCount > count) {
      count = tempCount;
    }

    startWithZero = !startWithZero;
    if (startWithZero) {
      i++;
    }
  }

  return count;
}

console.log(solution([2, 4, 6, 2, 5]));
console.log(solution([5, 1, 1, 5]));
