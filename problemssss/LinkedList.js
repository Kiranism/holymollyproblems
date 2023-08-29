class Node {
  constructor(data) {
    this.data = data;
    this.head = null;
  }
}

let head = new Node(10);
head.head = new Node(5);

console.log(head);
