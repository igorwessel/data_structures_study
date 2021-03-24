/*
    Last In First Out (LIFO)
*/
const Node = require('./node');

class Stack {
  constructor() {
    this._top = null;
    this._size = 0;
  }

  get lenght() {
    return this._size;
  }

  get values() {
    // O(N)
    let pointer = this._top;
    const values = [];
    while (pointer) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  toString() {
    // O(N)
    let pointer = this._top;
    let string = '';
    while (pointer) {
      string += `${pointer.value}\n`;
      pointer = pointer.next;
    }
    return string;
  }

  push(elem) {
    // O(1)
    // insert a element in stack
    const node = new Node(elem);
    node.next = this._top;
    this._top = node;
    this._size += 1;
  }

  pop() {
    // O(1)
    // remove top element in stack
    if (this._size > 0) {
      const node = this._top;
      this._top = this._top.next;
      this._size -= 1;
      return node.value;
    }
    throw new Error('The stack is empty');
  }

  peek() {
    // O(1)
    // return top element in stack without remove
    if (this._size > 0) {
      return this._top.value;
    }
    throw new Error('The stack is empty');
  }
}

const stack = new Stack();

module.exports = Stack;
