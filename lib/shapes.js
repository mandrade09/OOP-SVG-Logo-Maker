// lib/shapes.js
// Create Shape Classes

// Define a base Shape class that other shapes will inherit from
class Shape {
    constructor(color) {
      this.color = color;
    }
  
// Method to update the color of the shape
    setColor(color) {
      this.color = color;
    }
  }

// Define a Circle class that extends Shape
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }

// Define a Triangle class that extends Shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// Define a Square class that extends Shape
  class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }

// Export the classes for use in other files
  module.exports = { Circle, Triangle, Square };