// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

function romanToInt(s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (sym[curr] > sym[next]) {
      total += sym[curr];
    } else {
      total -= sym[next];
    }
  }

  return total;
}

console.log(romanToInt("LVIII"));
