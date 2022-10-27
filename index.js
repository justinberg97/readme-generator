// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
    return inquirer.prompt([
      {
          type: "title",
          name: "title",
          message: "What is the name of your project?",
        },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "description",
        message: "What does your project do?",
      },
      {
        type: "input",
        name: "installation",
        message: "What did you need to install before working on the project?",
      },
      {
        type: "input",
        name: "usage",
        message: "How does your project work?",
      },
      {
        type: "list",
        name: "licence",
        message: "What licence did you need?",
        choices: ['MIT', 'APACHE', 'GNU', 'NONE']
      },
      {
        type: "input",
        name: "contributors",
        message: "Were there any other programmers contributing to this project?",
      },
      {
        type: "input",
        name: "tests",
        message: "Did you run any tests?",
      },
      {
        type: "input",
        name: "questions",
        message: "If a reviewer needs to ask additonal questions, please provide your email address?",
      },
      {
        type: "input",
        name: "portfolio",
        message: "what is the url of your github username?"
      }
    ]);
  };

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFile('./readme.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to readme.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
