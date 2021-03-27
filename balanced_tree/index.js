const BinarySearchTree = require('../binary_search_tree');
const { Node } = require('../binary_tree');

class AVLTree extends BinarySearchTree {
  constructor(elem) {
    super(elem);
  }

  _getBalanceFactor(root) {
    return this.height(root.left) - this.height(root.right);
  }

  height(root = this.root) {
    let height = 0;
    if (root === null || typeof root == 'undefined') {
      height = -1;
    } else {
      height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    }
    return height;
  }

  _rotationLeftLeft(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  _rotationRightRight(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  _rotationLeftRight(node) {
    node.left = this._rotationLeftLeft(node.left);

    return this._rotationRightRight(node);
  }

  _rotationRightLeft(node) {
    node.right = this._rotationRightRight(node.right);

    return this._rotationLeftLeft(node);
  }

  insert(elem) {
    const node = new Node(elem);
    if (!this.root) {
      this.root = node;
    } else {
      this.root = this._insertHelper(this.root, node);
    }
  }

  _insertHelper(root, node) {
    if (root === null) {
      root = node;
    } else if (node.value < root.value) {
      root.left = this._insertHelper(root.left, node);

      if (root.left !== null && this._getBalanceFactor(root) > 1) {
        if (node.value < root.left.value) {
          root = this._rotationRightRight(root);
        } else {
          root = this._rotationLeftRight(root);
        }
      }
    } else if (node.value > root.value) {
      root.right = this._insertHelper(root.right, node);
      if (root.right !== null && this._getBalanceFactor(root) < -1) {
        if (node.value > root.right.value) {
          root = this._rotationLeftLeft(root);
        } else {
          root = this._rotationRightLeft(root);
        }
      }
    }
    return root;
  }
}

function init() {
  const left_left = [1, 2, 3];
  const right_right = [3, 2, 1];
  const left_right = [3, 1, 2];
  const right_left = [1, 3, 2];

  const tree = new AVLTree();

  for (value of test) {
    tree.insert(value);
  }
  tree.inorder_traversal();
  console.log();
  console.log(tree.height());
}

init();
