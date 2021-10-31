//TODO: Create a function that returns a license badge based on which license is passed in
// function to generate markdown for README
function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
};

//Create a function to generate markdown for README

function generateMarkdown(data) {
    return `# ${data.title}
  ## Table of Contents:
    1. [Description](#description) 
    2. [Installation](#Installation)
    3. [Usage](#Usage)  
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [License](#License)
    7. [GitHub](#GitHub)
    8. [E-mail](#E-mail)
  ## Description
  ${data.description} 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${licenseBadge(data)}
  ## GitHub
  ${data.github}
  ## E-mail
  ${data.email}`
}
  module.exports = generateMarkdown;











/*// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return `
  # ${data.Title}
    [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
    # Description
    ${data.Description}
    # Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application properly: ${data.Installation}
    # Usage
    ​This application is used for ${data.Usage}
    # License
    This project is license under the ${data.License} license.
    # Contributing
    ​Contributors: ${data.Contributor}
    # Tests
    To run tests, you need to run the following command: ${data.Test}
    # Questions
    If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
  
  
  `
}
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
*/
module.exports = generateMarkdown;
