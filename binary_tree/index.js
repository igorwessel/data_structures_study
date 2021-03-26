const Queue = require('../queue');

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
  constructor(elem = null, node = null) {
    if (node) {
      this.root = node;
    } else if (elem) {
      this.root = new Node(elem);
    } else {
      this.root = null;
    }
  }

  inorder_traversal(node = null) {
    if (!node) {
      node = this.root;
    }
    if (node.left) {
      this.inorder_traversal(node.left);
    }
    process.stdout.write(`${node.value} `);
    if (node.right) {
      this.inorder_traversal(node.right);
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
    process.stdout.write(`${node.value} `);
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

  levelorder_traversal(node = null) {
    if (!node) {
      node = this.root;
    }

    const queue = new Queue();
    queue.push(node);

    while (queue.length) {
      node = queue.pop();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      process.stdout.write(`${node.value} `);
    }
  }
}

module.exports = {
  BinaryTree,
  Node,
};
