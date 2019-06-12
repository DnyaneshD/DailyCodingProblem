// Given a string of round, curly, and square open and closing brackets,
// return whether the brackets are balanced (well-formed).
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.

function balancedBracket(input) {
  const arr = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    const diff =
      arr.length && element.charCodeAt(0) - arr[arr.length - 1].charCodeAt(0);

    if (diff && diff > 0 && diff <= 2) {
      arr.pop(element);
    } else {
      arr.push(element);
    }
  }
  return arr.length === 0;
}

//console.log(balancedBracket("([])[]({})"));
//console.log(balancedBracket("([)]"));
//console.log(balancedBracket("((((()))))"));
