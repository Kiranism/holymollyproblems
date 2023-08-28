class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(7);
console.log(root);
