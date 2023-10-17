// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const inquirer = require('inquirer');
const fs = require('fs');

let toWrite = "This is a test message. Beep. Boop.";

fs.writeFile('index.txt', toWrite, (err) =>
err ? console.log(err) : console.log('Successfully created index.html!')
);
