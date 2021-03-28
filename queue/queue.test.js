const { test, expect } = require('@jest/globals');
const Queue = require('.');

const mockedQueue = new Queue();
mockedQueue.push(1);
mockedQueue.push(2);

test('create a empty list', () => {
  let a = new Queue();
  expect(a.length).toBe(0);
});

test('should return values in queue, should return [1, 2] ', () => {
  expect(mockedQueue.values).toEqual([1, 2]);
});

test('method push: add a element in queue when queue is empty, first and last element is the same', () => {
  let a = new Queue();
  a.push(1);
  expect(a.length).toBe(1);
  expect(a._first._value).toBe(1);
  expect(a._last._value).toBe(1);
});

test('method push: add a element in queue when queue have elements, the first element dont change only last element', () => {
  let a = new Queue();
  a.push(1);
  a.push(2);
  expect(a.length).toBe(2);
  expect(a._first._value).toBe(1);
  expect(a._last._value).toBe(2);
});

test('method pop: remove first element in queue, 2,3,4 should remove 2', () => {
  expect(mockedQueue.pop()).toBe(1);
});

test('method pop: remove element when queue is empty throw a error', () => {
  const a = new Queue();
  expect(() => {
    a.pop();
  }).toThrowError('queue is empty');
});

test('method peek: return first element in queue, 2,3,4 should return 2', () => {
  expect(mockedQueue.peek()).toBe(2);
});

test('method peek: if queue is empty throw a error', () => {
  const a = new Queue();
  expect(() => {
    a.pop();
  }).toThrowError('queue is empty');
});

test('method toString: return a string "2, "', () => {
  const string = mockedQueue.toString();
  expect(string).toBe('2,');
});
