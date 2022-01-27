const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        message: "Name your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide the steps for installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide information about your application usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide instructions for testing your application:",
        name: "tests"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license.",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense"
        ]
      },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Provide the link to your GitHub profile:",
        name: "githubLink"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "List all authors:",
        name: "contributors"
    },


];
function writeToFile(fileName, response) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), response);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}
init();
// async function init() {
//     try {
//       const data = await inquirer.prompt(questions)
//        fs.writeToFile("README.md", generateMarkdown(data));
//       console.log("ReadMe is Completed README.md");

//     } catch (error) {
//       console.error(error);
//     }
//   }

//   init();





















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