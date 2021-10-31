
function init() {
    
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generate = require('./generateMarkdown');
    const path = require('path');

    inquirer
     .prompt([

        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'please enter a description of your project',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use of this application',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'Is there any collaborators for this project?',
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'What license was used for this README?',
            choices: ["MIT", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: 'input',
            name: 'Test',
            message: 'What command do you use to test this App?',
        },
    ]).then((response) => {

        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
    });

}
init();























/*// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "UserName",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "Email",
        },
        
        {
            type: "input",
            message: "What is the title for your project?",
            name: "Title",
        },
        {
            type: "input",
            message: "Please give description of your project.",
            name: "Description",
        },
        {
            type: "input",
            message: "What necessary dependencies must be installed to run this app?",
            name: "Installation",
        },
        {
            type: "input",
            message: "What is this app used for?",
            name: "Usage",
        },
        {
            type: "input",
            message: "What license was used for this README?",
            name: "License",
        },
        
        {
            type: "input",
            message: "Please add contributors",
            name: "Contributor",
        },
        {
            type: "input",
            message: "What command do you use to test this App?",
            name: "Test",
        }
        
    ]).then(() => {

    })
}
//questions()


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./generatedReadme"+fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully wrote: ' + fileName);
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeToFile("generatorReadme.md", generatorMarkdown(data))
    })
   
}

// Function call to initialize app
init();
*/