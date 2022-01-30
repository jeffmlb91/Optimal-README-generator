// function to generate markdown for README

function generateMarkdown(data) {
  return `
  #${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [License](license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}
    # Github
  ${data.github}  
      
  # Github Link
  ${data.githubLink}

  ## Questions
  If you have any question about this application or the functionality.
  Please contact me at my email ${data.email} or my GitHub page ${
    data.githubLink
  }.
  Thank you for using my application.
  `;
}

function generateMarkdown(data) {
  return `## Title
https://github.com/${data.UserName}/${data.title}
# Description
${data.description}
## Table of Contents
* [Description](#Description-section)
* [Installation](#Installation-section)
* [Usage](#Usage-section)
* [License](#License-section)
* [Contributing](#Contribution-section)
* [Test](#Test-section)
* [Questions](#Questions-section)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under the ${data.license} license.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributions
​Contributors: ${data.contributors}
# Test
The following is needed to run the test: ${data.tests}
# Github
${data.github}  
    
# Github Link
${data.githubLink}
# Questions
 If you have any question about this application or the functionality.
 Please contact me at my email ${data.email} or my GitHub page ${data.githubLink}.
 Thank you for using my application.
`;
}

module.exports = generateMarkdown;
