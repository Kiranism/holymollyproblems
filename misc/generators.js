function* generators() {
  yield 1;
  console.log("First Yield");
}

function* simpleGen() {
  yield 1;
  yield 2;
  yield 3;
}

var gen = simpleGen();
console.log("gen", gen.next());
console.log("gen", gen.next());
console.log("gen", gen.next());
console.log("gen", gen.next());
console.log("gen", gen.next());
