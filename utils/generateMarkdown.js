// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

  
  ${renderLicenseSection(licence)}
`;
}

module.exports = generateMarkdown;
