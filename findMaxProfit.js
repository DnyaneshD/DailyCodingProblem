// Given an array of numbers representing the stock prices of a company in chronological
// order and an integer k, return the maximum profit you can make from k buys and sells.
// You must buy the stock before you can sell it, and you must sell the stock before you
// can buy it again.

// For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.

function findMaxProfit(array, value) {
  const arrayProfits = [];

  for (let i = 0; i < array.length; i++) {
    const valueOfI = array[i];

    let profit = 0;
    let maxProfitKey = null;

    for (let j = i + 1; j < array.length; j++) {
      const valueOfJ = array[j];

      if (profit < valueOfJ - valueOfI) {
        maxProfitKey = j;
        maxProfitValue = valueOfJ;
        profit = valueOfJ - valueOfI;
      }
    }

    if (profit > 0) {
      arrayProfits.push({
        maxProfitkey_i: i,
        maxProfitkey_j: maxProfitKey,
        profit
      });
    }
  }
}

console.log(findMaxProfit([5, 2, 4, 0, 1], 2));
