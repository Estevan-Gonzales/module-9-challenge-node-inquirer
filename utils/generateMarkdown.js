// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let info = license != "No License" ?  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' :  "";
  return info;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let info = license != "No License"  ?  'https://mit-license.org/' :  "";
  return info;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let info = license != "No License"  ?  "This application is covered under the MIT license.\n" + renderLicenseLink(license):  "This application is not covered by any license.";
  return info;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Module 9 Challenge - README Generator ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contributions)
  [Tests](#tests)
  [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  Please reach out to me through my Github profile or email with any questions or comments you may have.
  github.com/${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
