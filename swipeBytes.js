// Given an unsigned 8-bit integer, swap its even and odd bits.
// The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.
// For example, 10101010 should be 01010101. 11100010 should be 11010001.
// Bonus: Can you do this in one line?

function swipeBytes(bytes) {
  //   for (let index = 0; index < bytes.length; index + 2) {
  //     const element1 = bytes[index];
  //     const element2 = bytes[index + 1];
  //     bytes[index] = element2;
  //     bytes[index + 1] = element1;
  //   }

  const swapEvenOdd = char =>
    ((char << 1) & 0b10101010) | ((char >> 1) & 0b1010101);

  console.log(
    swapEvenOdd(bytes)
      .toString(2)
      .padStart(8, "0")
  );
}

console.log(swipeBytes(0b10101010));
