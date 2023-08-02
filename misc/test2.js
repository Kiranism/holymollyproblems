// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced

  // INPUT [(]) => NOT BALANCED 
// Valid Expression: "[()]{}{()()}"

// Push [ onto the stack.
// Stack: [ [ ]

// Push ( onto the stack.
// Stack: [ [, ( ]

// Pop ( from the stack since ) matches it.
// Stack: [ [ ]

// Push ] onto the stack.
// Stack: [ [, ] ]

// Pop ] from the stack since ] matches [.
// Stack: [ ]

// Input: exp = “[(])”
// Output: Not Balanced

// function checkExp(str) {
//   const stack = [];
//   const validBrackets = "[](){}";
//   let i = 0;
//   while (i < str.length) {
//     stack.push(str[i]);
//     i++;
//     const open = stack[stack.length - 2];
//     const close = stack[stack.length - 1];
//     const check = open + close;
//     if (validBrackets.includes(check)) {
//       stack.pop();
//       stack.pop();
//     }
//   }
//   return stack.length ? "NOT BALANCED" : "BALANCED";
// }

function checkExp(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    switch (c) {
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return "NOT BALANCED";
        }
    }
  }
  return stack.length === 0 && "BALANCED";
}

console.log(checkExp("[()]{}{[()()]()}"));
console.log(checkExp("[(])"));

// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}
// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

function sortArr(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
console.log(sortArr([0, 0, 1, 2, 0, 1, 2]));
