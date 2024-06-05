# OOP-SVG-Logo-Maker

# Object-oriented Programming: SVG Logo Maker (Week 10 Challenge)

## Summary of Task

This week my task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. This application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application is deployed, I have provided a link to a walkthrough video at the end of this README that demonstrates its functionality and passes all of the tests. 

Below are the following Challenge requirements according to the 
**User Story** & **Acceptance Criteria**

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Additional Requirements

My application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. 


The application may be invoked by using the following command:

```bash
node index.js
```

Here is also the directory structure of the application:

```md
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

> **Important**: I also made sure to remove `dist` from the `.gitignore` file so that Git will track this folder and include it when I push up to my application's repository.

The application includes `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. 


Each shape class may be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test passes:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```


## Project View

![Terminal View Running App](<Assets/images/README Generator Screenshot 1.jpg>)

![Generated README View](<Assets/images/README Generator Screenshot 2.jpg>)



## Contact Information
Thanks for visiting!

If you would like to learn more, or contact me, feel free to reach me at the following:

<ul>
    <li>Video Walkthrough URL: https://drive.google.com/file/d/1oYwPr27hEmfn6YRfvPXoW6ssF9tVzFAS/view </li>
    <li>GitHub URL: https://github.com/mandrade09/OOP-SVG-Logo-Maker </li>
    <li>E-mail: mattandrade09@gmail.com </li>
    <li>Phone: 310.903.9150</li>
</ul>

<p>
<footer> &ndash; Matthew Andrade</footer>
</p>