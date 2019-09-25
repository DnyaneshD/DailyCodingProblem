function rotateArray1(arr, value) {
  while (value > 0) {
    const ele = arr.shift();
    arr.push(ele);

    value = value - 1;
  }
  return arr;
}

function rotateArray(arr, value) {
  while (value > 0) {
    value = value - 1;

    const firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstElement;
  }

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));
