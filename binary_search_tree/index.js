const { BinaryTree, Node } = require('../binary_tree');

class BinarySearchTree extends BinaryTree {
  constructor(elem) {
    super(elem);
  }

  insert(elem) {
    let parent = null;
    let aux = this.root;
    const node = new Node(elem);
    while (aux) {
      parent = aux;
      if (elem < aux.value) {
        aux = aux.left;
      } else {
        aux = aux.right;
      }
    }
    if (!parent) {
      this.root = node;
    } else if (elem < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  min(node = null) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max(node = null) {
    if (!node) {
      node = this.root;
    }
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  remove(elem, node = 0) {
    if (node === 0) {
      node = this.root;
    }
    if (!node) {
      return null;
    }

    if (elem < node.value) {
      node.left = this.remove(elem, node.left);
    } else if (elem > node.value) {
      node.right = this.remove(elem, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let substitute = this.min(node.right);
        node.value = substitute;
        node.right = this.remove(substitute, node.right);
      }
    }
    return node;
  }

  search(elem, node = 0) {
    if (node === 0) {
      node = this.root;
    }
    if (!node) {
      return node;
    }

    if (node.value === elem) {
      return BinarySearchTree(node);
    }

    if (elem < node.value) {
      return this.search(elem, node.left);
    }
    return this.search(elem, node.right);
  }
}

function init() {
  const values = [61, 89, 66, 43, 51, 16, 55, 11, 79, 77, 82, 32];
  const tree = new BinarySearchTree();
  for (value of values) {
    tree.insert(value);
  }

  tree.postorder_traversal();
  console.log();
  tree.inorder_traversal();
  console.log();
  tree.levelorder_traversal();
  console.log();

  process.stdout.write('MIN:');
  process.stdout.write(tree.min().toString());
  console.log();
  process.stdout.write('MAX:');
  process.stdout.write(tree.max().toString());
  console.log();

  console.log('ROOT HEIGHT: ', tree.height());
}

module.exports = BinarySearchTree;
