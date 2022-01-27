// function to generate markdown for README

function generateMarkdown(response) {
  return `
  #${response.title} ${renderLicenseBadge(response.license)}

  ## description

  ${response.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Usage](#Usage)
  * [License](License)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  
  ## Installation 
  ${response.installation}

  ## usage
  ${response.usage}

  ## Tests
  ${response.tests}

  ## Contributing
  ${response.contributing}

  ## License
  ${response.license}
    # Github
  ${response.github}  
      
  # Github Link
  ${response.githubLink}

  ## Questions
  If you have any question about this application or the functionality.
  Please contact me at my email ${response.email} or my GitHub page ${response.githubLink}.
  Thank you for using my application.
  `
}























function generateMarkdown(response) {
  return `## Title
https://github.com/${response.UserName}/${response.title}
# Description
${response.description}
## Table of Contents
* [Description](#Description-section)
* [Installation](#Installation-section)
* [Usage](#Usage-section)
* [License](#License-section)
* [Contributing](#Contribution-section)
* [Test](#Test-section)
* [Questions](#Questions-section)
# Installation
The following necessary dependencies must be installed to run the application properly: ${response.installation}
# Usage
In order to use this app, ${response.usage}
# License
This project is licensed under the ${response.license} license.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributions
​Contributors: ${response.contributors}
# Test
The following is needed to run the test: ${response.tests}
# Github
${response.github}  
    
# Github Link
${response.githubLink}
# Questions
 If you have any question about this application or the functionality.
 Please contact me at my email ${response.email} or my GitHub page ${response.githubLink}.
 Thank you for using my application.
`;
}

module.exports = generateMarkdown;
