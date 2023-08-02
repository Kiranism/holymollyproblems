// function pattern1(num) {
//   let pattern = "";
//   for (let i = 0; i < num; i++) {
//     pattern += "*****" + "\n";
//   }
//   return pattern;
// }

function pattern1(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

// console.log(pattern1(5));

function pattern2(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern2(5));

function pattern3(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern3(5));

function pattern4(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i;
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern4(5));

// function pattern5(num) {
//   let pattern = "";
//   for (let i = num; i > 0; i--) {
//     for (let j = i; j > 0; j--) {
//       pattern += "* ";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }

function pattern5(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern5(5));

function pattern6(num) {
  let pattern = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern6(5));
//     *    4,*,4
//    ***   3,*,3
//   *****  2,*,2
//  ******* 1,*,1
// *********0,*,0

function pattern7(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    for (let j = 0; j < num - 1 - 1; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern7(5));

function pattern8(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      pattern += "*";
    }
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}
// console.log(pattern8(5));

function pattern9(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      pattern += "*";
    }
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}

function pattern7(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    for (let j = 0; j < num - 1 - 1; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(pattern7(3));
console.log(pattern9(3));
