class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  toString() {
    return String(this._value);
  }
}

class BinaryTree {
  constructor(elem = null) {
    if (elem) {
      this.root = new Node(elem);
    } else {
      this.root = null;
    }
  }

  simetric_traversal(node = null) {
    if (!node) {
      node = this.root;
    }
    if (node.left) {
      process.stdout.write('(');
      this.simetric_traversal(node.left);
    }
    process.stdout.write(node.value);
    if (node.right) {
      this.simetric_traversal(node.right);
      process.stdout.write(')');
    }
  }
}

function init() {
  const tree = new BinaryTree();
  const n1 = new Node('a');
  const n2 = new Node('+');
  const n3 = new Node('*');
  const n4 = new Node('b');
  const n5 = new Node('-');
  const n6 = new Node('/');
  const n7 = new Node('c');
  const n8 = new Node('d');
  const n9 = new Node('e');

  n6.left = n7;
  n6.right = n8;
  n5.left = n6;
  n5.right = n9;
  n3.left = n4;
  n3.right = n5;
  n2.left = n1;
  n2.right = n3;

  tree.root = n2;

  return tree;
}

const a = init();
a.simetric_traversal();
process.stdout.write('\n');
