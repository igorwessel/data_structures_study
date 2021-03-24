const { test, expect } = require('@jest/globals');
const Stack = require('./stack');

const mockedStack = new Stack();
mockedStack.push(1);
mockedStack.push(2);
mockedStack.push('top');
mockedStack.push('test');

test('create a empty list', () => {
  let a = new Stack();
  expect(a.lenght).toBe(0);
});

test('should return values in stack', () => {
  expect(mockedStack.values).toEqual(['test', 'top', 2, 1]);
});

test('method push: add a element in stack', () => {
  let a = new Stack();
  a.push(1);
  expect(a.lenght).toBe(1);
  expect(a._top._value).toBe(1);
});

test('method pop: remove the top element in stack', () => {
  expect(mockedStack.pop()).toBe('test');
});

test('method pop: remove element when stack is empty throw a error', () => {
  const a = new Stack();
  expect(() => {
    a.pop();
  }).toThrowError('The stack is empty');
});

test('method peek: return the top element in stack', () => {
  expect(mockedStack.peek()).toBe('top');
});

test('method peek: if stack is empty throw a error', () => {
  const a = new Stack();
  expect(() => {
    a.pop();
  }).toThrowError('The stack is empty');
});

test('method toString: return a string of list', () => {
  const string = mockedStack.toString();
  expect(string).toBe('top\n2\n1\n');
});
