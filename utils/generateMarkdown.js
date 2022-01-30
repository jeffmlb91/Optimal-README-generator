// function to generate markdown for README

function generateMarkdown(data) {
  return `
  #${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [License](#license)
  * [Authors](#authors)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.authors}

  ## License
  ${data.license}
  
  ## Github
  ${data.github}  
      
  ## Github Link
  ${data.githubLink}

  ## Questions
  If you have any question about this application or the functionality.
  Please contact me at my email ${data.email} or my GitHub page ${
    data.githubLink
  }.
  Thank you for using my application.
  `;
}

function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
    case "GNU GPLv3":
      return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "GNU LGPLv3":
      return `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
    case "Mozilla Public 2.0":
      return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
    case "Apache 2.0":
      return `[Apache Licence 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "MIT":
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    case "Boost Software 1.0":
      return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
    case "The Unilicense":
      return `[The Unilicese](https://choosealicense.com/licenses/unlicense/)`;
  }
}
// function generateMarkdown(data) {
//   return `## Title
// https://github.com/${data.UserName}/${data.title}
// # Description
// ${data.description}
// ## Table of Contents
// * [Description](#description-section)
// * [Installation](#installation-section)
// * [Usage](#usage-section)
// * [License](#license-section)
// * [Contributing](#contribution-section)
// * [Test](#test-section)
// * [Questions](#questions-section)
// ## Installation
// The following necessary dependencies must be installed to run the application properly: ${data.installation}
// ## Usage
// In order to use this app, ${data.usage}
// ## License
// This project is licensed under the ${data.license} license.
// ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
// ## Contributions
// ​Contributors: ${data.contributors}
// ## Test
// The following is needed to run the test: ${data.tests}
// ## Github
// ${data.github}

// ## Github Link
// ${data.githubLink}
// ## Questions
//  If you have any question about this application or the functionality.
//  Please contact me at my email ${data.email} or my GitHub page ${data.githubLink}.
//  Thank you for using my application.
// `;
// }

module.exports = generateMarkdown;
