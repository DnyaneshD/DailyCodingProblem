// Solution 1
function findPositiveInteger(arr) {
  const sortedArr = quick_Sort(arr);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] && (sortedArr[i] > 0 || sortedArr[i + 1] > 0)) {
      if (sortedArr[i + 1] - sortedArr[i] > 1) {
        result = sortedArr[i + 1] + 1;

        if (result !== 1) {
          return result;
        }
      }
    }
  }
  return sortedArr[sortedArr.length - 1] + 1;
}

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    const left = [];
    const right = [];
    const pivot = origArray.pop();
    const newArray = [];

    for (let i = 0; i < origArray.length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

// Solution 2

function findPositiveIntegerS2(arr) {
  const positiveNumbers = [];

  arr.forEach(n => {
    if (n > 0) {
      positiveNumbers.push(n);
    }
  });

  for (let i = 1; i <= arr.length + 1; i++) {
    if (positiveNumbers.findIndex(x => x === i) === -1) {
      return i;
    }
  }
}

console.log(findPositiveIntegerS2([3, 4, 2, 1]));
