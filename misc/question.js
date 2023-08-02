const arr = [
  "hello",
  "apple",
  "world",
  "this",
  "is",
  "an",
  "array",
  "of",
  "words",
];

const calculateWeightage = (arr) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const obj = {};

  for (let i = 0; i < alphabet.length; i++) {
    obj[alphabet.charAt(i)] = i + 1;
  }

  let arrofSum = [];
  for (let i = 0; i < arr.length; i++) {
    let formArrayWithSplitedLetters = arr[i].split("");
    let sumOfOne = formArrayWithSplitedLetters.reduce(
      (prev, curr) => prev + obj[curr],
      0
    );
    arrofSum.push({ sum: sumOfOne, position: i });

    console.log(formArrayWithSplitedLetters, sumOfOne);
  }

  const sortedArr = arrofSum.sort((a, b) => a.sum - b.sum);
  const minimum = sortedArr[0].sum + sortedArr[1].sum;
  const pair1 = arr[sortedArr[0].position];
  const pair2 = arr[sortedArr[1].position];
  return { minimum: minimum, pair1: pair1, pair2: pair2 };
};

// console.log(calculateWeightage(arr));

const arry = ["abc", "def"];

const wot = arry.includes("abc");
// console.log(wot);

function printStar() {
  let star = 3;
  for (let i = 0; i < star; i++) {
    console.log(i);
    for (let j = i; i < star; j++) {
      console.log(j);
    }
  }
  return star;
}

// console.log(printStar());
for (let i = 1; i <= 3; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
