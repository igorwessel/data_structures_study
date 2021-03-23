const { customError } = require('../helper');
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

  set value(newvalue) {
    this._value = newvalue;
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
    while (pointer.next) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  get length() {
    return this._size;
  }

  /**
   *    Search a node based in index
   *
   * @param {number} index
   * @throws If dont found throw a message "List index out of range"
   * @returns Node Value
   */
  get(index) {
    let pointer = this._head;
    for (let i = 0; i < this._size; i++) {
      if (i === index) {
        return pointer.value;
      }
      pointer = pointer.next;
    }
    throw new Error('List index out of range');
  }

  /**
   *    Search node based in index and change according with new value
   *
   * @param {number} index
   * @param {*} value
   * @returns The new value
   */
  set(index, value) {
    let pointer = this._head;
    for (let i = 0; i < this._size; i++) {
      if (i === index) {
        return (pointer.value = value);
      }
      pointer = pointer.next;
    }
    throw Error('List index out of range');
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
        pointer = pointer.next;
      }
      pointer.next = new Node(elem);

      //   for (let i = 0; i < this._size; i++) {
      //     // If exist next node in head, assign this node to the pointer and move forward
      //     if (pointer.next) {
      //       pointer = pointer.next;
      //     } else {
      //       // Not exist just insert new element in last position
      //       pointer.next = new Node(elem);
      //     }
      //   }
    } else {
      // If dont have element in a list just create a one
      this._head = new Node(elem);
    }

    this._size += 1;
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
console.log(list.values);
console.log(list.get(4));
console.log(list.set(4, 'listando'));
console.log(list.values);
console.log(list.indexOf('23'));
