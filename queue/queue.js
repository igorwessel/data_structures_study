/*
    First In First Out (FIFO)
*/
const Node = require('../node');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
    this._size = 0;
  }

  get length() {
    return this._size;
  }

  get values() {
    // O(N)
    let pointer = this._first;
    const values = [];
    while (pointer) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  toString() {
    // O(N)
    let pointer = this._first;
    let string = '';
    while (pointer) {
      string += `${pointer.value},`;
      pointer = pointer.next;
    }
    return string;
  }

  push(elem) {
    //O(1)
    const node = new Node(elem);
    if (!this._first && !this._last) {
      this._first = node;
      this._last = node;
    } else {
      this._last.next = node;
      this._last = node;
    }
    this._size += 1;
  }

  pop() {
    //O(1)
    if (this._first) {
      const node = this._first.next;
      const removed = this._first.value;
      this._first = node;
      this._size -= 1;
      return removed;
    }
    throw new Error('queue is empty');
  }

  peek() {
    //O(1)
    if (this._first) {
      return this._first.value;
    }
    throw new Error('queue is empty');
  }
}

module.exports = Queue;
