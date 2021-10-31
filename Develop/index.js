// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please enter a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of this application',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Is there any collaborators for this project?',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'What license was used for this README?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What command do you use to test this App?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
