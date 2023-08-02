// function printPattern(col) {
//   let pattern = "";
//   for (let i = col; i >= 1; i--) {
//     let line = "";
//     for (let j = 0; j < i; j++) {
//       line += "* ";
//     }
//     pattern += line.trim() + "\n";
//   }
//   console.log(pattern);
// }

function printPattern(col) {
  let pattern = "";
  for (let i = col; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "* ";
    }
    pattern += line;
  }
  console.log(pattern);
}

console.log(printPattern(3));
