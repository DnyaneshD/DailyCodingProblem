class Node {
  data = null;
  left = null;
  right = null;
}

function findMinimumLevelSum(node) {
  if (node === null) return 0;

  let result = null;
  let q = [];
  q.push(node);

  while (q.length !== 0) {
    let count = q.length;
    let sum = 0;

    while (count--) {
      let qNode = q.shift();

      sum = sum + qNode.data;

      if (qNode.left != null) q.push(qNode.left);
      if (qNode.right != null) q.push(qNode.right);
    }

    if (sum < result || result === null) result = sum;
  }

  return result;
}

function generateTree() {
  const node = new Node();
  node.data = 15;

  node.left = new Node();
  node.left.data = 6;

  node.right = new Node();
  node.right.data = 7;

  node.left.left = new Node();
  node.left.left.data = 4;

  node.right.right = new Node();
  node.right.right.data = 4;

  console.log(node);

  return node;
}

console.log(findMinimumLevelSum(generateTree()));
