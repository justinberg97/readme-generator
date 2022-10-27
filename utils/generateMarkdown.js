// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license==='NONE') {
//     return "" ;
  
//   } else if (license==='Apache') {
//     return  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] 
    
//   } else if (license==='GNU') {
//   return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" ;
  
// // } else (licence==='MIT') {
// //   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" ;
// // }
// }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='NONE') {
    return ""
  
  } else {
    return "-[licence](#licence)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('===', license)
  if (license ==='NONE') {
    return "";
  } else {
    return `## Licence 
   this project is licenced under the ${license} licence`

  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, name, description, installation, usage, licence, contributors, tests, questions}) {
  console.log()
  return `# ${title}

  ## Description
  ${description}

  ## Name 
  ${name}

  ## Table of Contents
  -[Installation] (#installation)
  -[Usage] (#usage)
  -[Credits] (#credits)
  ${renderLicenseLink(licence)}

  ## Installation
  ${installation}

  ## Usage 
  ${usage}

  ## Credits
  ${contributors}

  ## Tests 
  ${tests}

  ## Questions
  ${questions}
 
  ${renderLicenseSection(licence)}

`;
}

module.exports = generateMarkdown;
