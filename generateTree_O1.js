// Generate a finite, but an arbitrarily large binary tree quickly in O(1).
// That is, generate() should return a tree whose size is unbounded but finite.

class Node {
  data = null;
  left = null;
  right = null;
}

function generate() {
  const node = new Node();
  node.data = 0;

  if (Math.random() < 0.5) node.left = generate();

  if (Math.random() < 0.5) node.right = generate();

  console.log(node);

  return node;
}

console.log(generate());
