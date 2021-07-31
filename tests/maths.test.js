const { sum, subtract } = require('../maths');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 41 + 80 to equal 121', () => {
  expect(sum(41, 80)).toBe(121);
});

test('subtract 9 - 3 to equal 6', () => {
  expect(subtract(9, 3)).toBe(6);
});
