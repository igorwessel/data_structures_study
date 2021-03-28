const { test, expect } = require('@jest/globals');
const LinkedList = require('.');

let mockedList = new LinkedList();
mockedList.push(1);
mockedList.push(2);

test('create a empty list', () => {
  const list = new LinkedList();
  expect(list.length).toBe(0);
});
test('return lenght of list', () => {
  expect(mockedList.length).toBe(2);
});

test('method push: if dont have elements in a list, add to the head', () => {
  const list = new LinkedList();
  list.push(1);
  expect(list._head).toHaveProperty('value');
  expect(list._head).toHaveProperty('next', null);
});

test('method push: if exist element, add to the last position', () => {
  mockedList.push(3);
  expect(mockedList.length).toBe(3);
  expect(mockedList.get(mockedList.length - 1)).toBe(3);
});

test('method get: get a value based in index', () => {
  expect(mockedList.get(1)).toBe(2);
});

test('method set: set a new value based in index', () => {
  expect(mockedList.get(0)).toBe(1);
  mockedList.set(0, 'one');
  expect(mockedList.get(0)).toBe('one');
});

test('method indexOf: search in a list based in element and return the index', () => {
  expect(mockedList.indexOf(2)).toBe(1);
});

test('method indexOf: search in a list based in element if not exist element in list throw a error', () => {
  expect(() => {
    mockedList.indexOf(1);
  }).toThrowError('element 1 is not in list');
});

test('method insert: insert a new element at index', () => {
  mockedList.insert(0, 'test');
  expect(mockedList.get(0)).toBe('test');
});

test('method remove: remove a element, receives an element as a parameter', () => {
  expect(mockedList.remove('one')).toBe(true);
});

test('method remove: remove a element if element not exist throw error', () => {
  expect(() => {
    mockedList.remove('5');
  }).toThrowError('element 5 is not in list');
});
