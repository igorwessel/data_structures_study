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

  inorder(node = null) {
    if (!node) {
      node = this.root;
    }
    if (node.left) {
      process.stdout.write('(');
      this.inorder(node.left);
    }
    process.stdout.write(node.value);
    if (node.right) {
      this.inorder(node.right);
      process.stdout.write(')');
    }
  }

  postorder_traversal(node = null) {
    if (!node) {
      node = this.root;
    }
    if (node.left) {
      this.postorder_traversal(node.left);
    }
    if (node.right) {
      this.postorder_traversal(node.right);
    }
    process.stdout.write(node.value);
  }

  height(node = null) {
    if (!node) {
      node = this.root;
    }

    let height_left = 0;
    let height_right = 0;

    if (node.left) {
      height_left = this.height(node.left);
    }

    if (node.right) {
      height_right = this.height(node.right);
    }

    if (height_right > height_left) {
      return height_right + 1;
    }

    return height_left + 1;
  }
}

function init() {
  const tree = new BinaryTree();
  const n1 = new Node('I');
  const n2 = new Node('N');
  const n3 = new Node('S');
  const n4 = new Node('C');
  const n5 = new Node('R');
  const n6 = new Node('E');
  const n7 = new Node('V');
  const n8 = new Node('A');
  const n9 = new Node('S');
  const n10 = new Node('E');
  const n11 = new Node('-');

  n10.left = n6;
  n10.right = n9;
  n6.left = n1;
  n6.right = n5;
  n5.left = n2;
  n5.right = n4;
  n4.right = n3;
  n9.left = n8;
  n9.right = n11;
  n8.right = n7;

  tree.root = n10;

  return tree;
}

const a = init();
// a.inorder();
process.stdout.write('Percurso em Pós Ordem: ');
a.postorder_traversal();
process.stdout.write('\n');
console.log(a.height());
