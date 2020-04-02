// Given a string, return the first recurring character in it, or null
// if there is no recurring character.
// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

function findMatchingChar(input) {
  const arr = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];

    if (arr.findIndex(i => i === element) > -1) {
      return element;
    }
    arr.push(element);
  }
  return null;
}

console.log(findMatchingChar("acbc"));
