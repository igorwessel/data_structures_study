class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get next() {
    return this._next;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  set next(node) {
    this._next = node;
  }
}

module.exports = Node;
