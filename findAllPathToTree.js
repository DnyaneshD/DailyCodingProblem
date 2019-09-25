class Node {
  data = null;
  left = null;
  right = null;
}

function createTree() {
  const node = new Node();
  node.data = 10;
  node.left = new Node();
  node.left.data = 8;
  node.right = new Node();
  node.right.data = 6;

  findAllPaths(node, [], 0);
}

function findAllPaths(node, path, pathLen) {
  if (node === null) {
    return;
  }

  path[pathLen] = node.data;
  pathLen++;

  if (node.left === null && node.right === null) {
    printArray(path, pathLen);
  } else {
    findAllPaths(node.left, path, pathLen);
    findAllPaths(node.right, path, pathLen);
  }
}

function printArray(ints, len) {
  for (let i = 0; i < len; i++) {
    console.log(ints[i] + " ");
  }
  console.log(" ");
}

console.log(createTree());
