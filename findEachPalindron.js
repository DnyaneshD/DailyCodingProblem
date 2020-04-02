// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// Given a string, split it into as few strings as possible such that each string is a palindrome.
// For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].
// Given the input string abc, return ["a", "b", "c"].

function findPalindrome(input) {
  const stack = [];
  const output = [];
  let stringPointer = 0;

  for (let i = 0; i < input.length; i++) {
    if (stack[stack.length - 1] && stack[stack.length - 1] === input[i]) {
      stack.pop();
    } else if (
      stack[stack.length - 2] &&
      stack[stack.length - 2] === input[i]
    ) {
      stack.pop();
      stack.pop();
    } else {
      stack.push(input[i]);
    }

    if (stack.length === 0) {
      output.push(input.substring(stringPointer, i + 1));
      stringPointer = i + 1;
    }
  }

  return output;
}

console.log(findPalindrome("racecarannakayak"));
