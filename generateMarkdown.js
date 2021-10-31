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
  return licenseString;
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
  
  ## GitHub
  ${data.description}
  ## Description
  ${data.github} 
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
}

module.exports = generateMarkdown;
