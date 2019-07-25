// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.

function findPerfectNumber(num) {
  let arr = [];
  let tempNum = num;
  while (true) {
    let n = tempNum;
    while (n > 9) {
      arr.push(n % 10);
      n = Math.floor(n / 10);
    }
    arr.push(n);

    const sum = arr.reduce((a, c) => a + c);
    if (sum === 10) {
      return tempNum;
    }
    arr = [];
    tempNum = tempNum + 1;
  }
}

console.log(findPerfectNumber(62));
