// There are N couples sitting in a row of length 2 * N.
// They are currently ordered randomly, but would like to rearrange
// themselves so that each couple's partners can sit side by side.

// What is the minimum number of swaps necessary for this to happen?

function findRequiredSwaps(arr) {
  let numberOfSwaps = 0;
  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i] == arr[i + 1]) {
      continue;
    }
    if (arr[i] !== arr[i + 1]) {
      const index = arr.indexOf(arr[i], i);
      const temp = arr[i + 1];
      arr[i + 1] = arr[index];
      arr[index] = temp;

      numberOfSwaps++;
    }
  }
  return numberOfSwaps;
}

console.log(findRequiredSwaps([1, 2, 3, 4, 3, 5, 2, 1, 4, 5]));
