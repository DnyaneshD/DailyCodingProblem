function interLeave(inputArray) {
  const popLimit = Math.floor(inputArray.length / 2);
  const queue = [];
  const stack = [];
  const output = [];

  for (let i = 0; i < popLimit; i++) {
    const element = inputArray.pop();
    queue.push(element);
  }

  for (let j = inputArray.length - 1; j >= 0; j--) {
    const element = inputArray[j];
    stack.push(element);
  }

  for (let k = 0; k <= Math.ceil(inputArray.length / 2); k++) {
    const stackElement = stack.pop();
    const queueElement = queue.shift();

    output.push(stackElement);
    if (queueElement) {
      output.push(queueElement);
    }
  }

  return output;
}

console.log(interLeave([1, 2, 3, 4, 5]));
