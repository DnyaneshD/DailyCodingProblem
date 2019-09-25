// Given a list of integers, return the largest product that can be made by multiplying
// any three integers.

// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
// You can assume the list has at least three integers.

function largestProduct(arr) {
  if (arr.length < 3) {
    return -1;
  }
  if (arr.length === 3) {
    return arr;
  }

  let threeElements = arr.slice(0, 3);
  const reducer = (accumulator, currentValue) => accumulator * currentValue;

  for (let index = 3; index < arr.length; index++) {
    const tempThreeEle = JSON.parse(JSON.stringify(threeElements));

    const existingNumber = tempThreeEle.reduce(reducer);

    const absNum = tempThreeEle.map(x => Math.abs(x));

    const minNumber = Math.min(...absNum);

    tempThreeEle.splice(tempThreeEle.findIndex(x => x === minNumber), 1);

    tempThreeEle.push(arr[index]);

    const newNumber = tempThreeEle.reduce(reducer);

    if (existingNumber < newNumber) {
      threeElements = tempThreeEle;
    }
  }

  return threeElements;
}

console.log(largestProduct([-10, -10, 5, -6]));
