// index.js

// Import the fs module for file system operations
const fs = require('fs');

// Import the shape classes
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// Define the questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    // Validate that the input is no more than 3 characters
    validate: input => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

// Dynamically import inquirer and prompt the user
(async () => {
  const inquirer = await import('inquirer');

  // Use the inquirer module to prompt the user with the defined questions
  inquirer.default.prompt(questions).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    // Create an instance of the selected shape with the specified color
    let shapeInstance;
    switch (shape) {
      case 'Circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'Triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'Square':
        shapeInstance = new Square(shapeColor);
        break;
    }

    // Define the SVG content including the shape and text
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;

    // Write the SVG content to a file named logo.svg
    fs.writeFileSync('logo.svg', svgContent.trim());
    // Log a message indicating the file has been generated
    console.log('Generated logo.svg');
  });
})();
