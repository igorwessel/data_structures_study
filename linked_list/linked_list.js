/*
    Lista Encadeada (Lista com Alocação Dinamica) (ENG: Linked List)
*/

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

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  get values() {
    let pointer = this._head;
    const values = [];
    for (let i = 0; i < this._size; i++) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  get length() {
    return this._size;
  }

  _getNode(index) {
    let pointer = this._head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return pointer;
      }
      pointer = pointer.next;
    }
    if (!pointer) {
      throw new Error('List index out of range');
    }
  }

  /**
   *    Search a node based in index
   *
   * @param {number} index
   * @throws If dont found throw a message "List index out of range"
   * @returns Node Value
   */
  get(index) {
    const node = this._getNode(index);
    return node.value;
  }

  /**
   *    Search node based in index and change according with new value
   *
   * @param {number} index
   * @param {*} value
   * @returns The new value
   */
  set(index, value) {
    const node = this._getNode(index);
    return (node.value = value);
  }

  /**
   *    Search in a node using the element
   *
   * @param {*} elem
   * @returns node index
   */

  indexOf(elem) {
    let pointer = this._head;
    let counter = 0;
    while (pointer) {
      if (pointer.value === elem) {
        return counter;
      }
      counter += 1;
      pointer = pointer.next;
    }
    throw new Error(`element ${elem} is not in list`);
  }

  /**
   *    Insert new element in last position
   *
   * @param {*} elem
   */
  push(elem) {
    if (this._head) {
      // Auxiliar variable to walk inside nodes
      let pointer = this._head;

      while (pointer.next) {
        // If exist next node in head, assign this node to the pointer and move forward
        pointer = pointer.next;
      }
      // Not exist just insert new element in last position
      pointer.next = new Node(elem);
    } else {
      // If dont have element in a list just create a one
      this._head = new Node(elem);
    }

    this._size += 1;
  }

  insert(index, elem) {
    let node = new Node(elem);

    if (index === 0) {
      node.next = this._head;
      this._head = node;
    } else {
      let pointer = this._getNode(index - 1);
      node.next = pointer.next;
      pointer.next = node;
    }
    this._size += 1;
  }

  remove(elem) {
    if (!this._head) {
      throw new Error(`element ${elem} is not in list`);
    } else if (this._head.value === elem) {
      this._head = this._head.next;
      this._size -= 1;
      return true;
    }

    let pointer = this._head.next;
    let ancestor = this._head;
    while (pointer) {
      if (pointer.value === elem) {
        ancestor.next = pointer.next;
        pointer = ancestor;
        this._size -= 1;
        return true;
      }

      ancestor = pointer;
      pointer = pointer.next;
    }
    throw new Error(`element ${elem} is not in list`);
  }
}

module.exports = LinkedList;
