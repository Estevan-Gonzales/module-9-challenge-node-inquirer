// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const messages = [
    'Please provide a description:',
    'Please provide installation instructions:',
    'Please provide usage information:',
    'Please privide contribution guidelines:',
    'Please provide test instructions:',
    'What is your Github username?:',
    'What is your email address?:',
    'Please select license type:'
];

const types = ['input', 'input', 'input', 'input', 'input', 'input', 'input', 'list'];
const names = ['description', 'installation', 'usage', 'contributions', 'tests', 'github', 'email', 'license'];


let capturedInput = [];

for (let i = 0; i < messages.length; i++) {
    let section = {};
    section.type = types[i];
    section.name = names[i];
    section.message = messages[i];

    if (types[i] == 'list') {
        section.choices = ['MIT', 'No License']
    }

    capturedInput.push(section);
}


const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, capturedInput) {
    inquirer
    .prompt(capturedInput).then((data) => {
        fs.writeFile(fileName, generateMarkdown((data)), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        )});
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', capturedInput);
}

// Function call to initialize app
init();





