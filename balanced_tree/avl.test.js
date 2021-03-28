const { test, expect, beforeEach } = require('@jest/globals');
const AVLTree = require('.');

const left_left = [1, 2, 3];
const right_right = [3, 2, 1];
const left_right = [3, 1, 2];
const right_left = [1, 3, 2];

function addToTree(tree, array) {
  for (value of array) {
    tree.insert(value);
  }
}

let tree;

beforeEach(() => {
  tree = new AVLTree();
});

test('create a empty list', () => {
  expect(tree.root).toBe(null);
});

test('method insert: should add value respectic properties from binary tree, min values in left and max values in right', () => {
  addToTree(tree, [10, 9, 12]);
  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(9);
  expect(tree.root.right.value).toBe(12);
});

test('method insert: should do left left rotation when have subtree in right of the right subtree', () => {
  addToTree(tree, left_left);
  expect(tree.root.value).toBe(2);
  expect(tree.root.left.value).toBe(1);
  expect(tree.root.right.value).toBe(3);
});

test('method insert: should do right right rotation when have subtree in left of the left subtree', () => {
  addToTree(tree, right_right);
  expect(tree.root.value).toBe(2);
  expect(tree.root.left.value).toBe(1);
  expect(tree.root.right.value).toBe(3);
});

test('method insert: should do left right rotation when have right subtree of the left subtree', () => {
  addToTree(tree, left_right);
  expect(tree.root.value).toBe(2);
  expect(tree.root.left.value).toBe(1);
  expect(tree.root.right.value).toBe(3);
});

test('method insert: should do right left rotation when have left subtree of the right subtree', () => {
  addToTree(tree, right_left);
  expect(tree.root.value).toBe(2);
  expect(tree.root.left.value).toBe(1);
  expect(tree.root.right.value).toBe(3);
});

test('method remove: remove element and should do left left rotation when have subtree in right of the right subtree', () => {
  addToTree(tree, [50, 40, 60, 65]);
  expect(tree.remove(40)).toBeUndefined();
  expect(tree.root.value).toBe(60);
  expect(tree.root.left.value).toBe(50);
  expect(tree.root.right.value).toBe(65);
});

test('method remove: remove element and should do right right rotation when have subtree in left of the left subtree', () => {
  addToTree(tree, [20, 10, 30, 5, 15]);
  expect(tree.remove(30)).toBeUndefined();
  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(20);
  expect(tree.root.right.left.value).toBe(15);
});

test('method remove: remove element and should do left right rotation when have right subtree of the left subtree', () => {
  addToTree(tree, [50, 40, 60, 45]);
  expect(tree.remove(40)).toBeUndefined();
  expect(tree.root.value).toBe(50);
  expect(tree.root.left.value).toBe(45);
  expect(tree.root.right.value).toBe(60);
});

test('method remove: remove element and should do right left rotation when have left subtree of the right subtree', () => {
  addToTree(tree, [50, 40, 60, 55]);
  expect(tree.remove(40)).toBeUndefined();
  expect(tree.root.value).toBe(55);
  expect(tree.root.left.value).toBe(50);
  expect(tree.root.right.value).toBe(60);
});
