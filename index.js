// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const messages = [
    'What is the name of the title?',
    'What is your name?',
    'How old are you?',
    'Where are you from'
];

const types = ['input', 'input', 'input', 'input'];
const names = ['title', 'name', 'age', 'location'];

let toAsk = [];

for (let i = 0; i < messages.length; i++) {
    section = {}
    section.type = types[i]
    section.name = names[i]
    section.message = messages[i];
    toAsk.push(section);
}

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, toAsk) {
    inquirer
    .prompt(toAsk).then((data) => {
        console.log(generateMarkdown(data));
        fs.writeFile(fileName, generateMarkdown((data)), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        )});
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', toAsk);
}

// Function call to initialize app
init();





