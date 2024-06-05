// Write Unit Tests

// lib/shapes.test.js

// Import the shape classes for testing
const { Circle, Triangle, Square } = require('./shapes');

// Test the render method of the Circle class
test('Circle renders correctly', () => {
  const shape = new Circle();
  shape.setColor('green');

   // Check if the rendered SVG string matches the expected output
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

// Test the render method of the Triangle class
test('Triangle renders correctly', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test the render method of the Square class
test('Square renders correctly', () => {
  const shape = new Square();
  shape.setColor('red');
  expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
});

