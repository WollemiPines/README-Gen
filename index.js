// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = ('../generateMarkdown');


// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions GitHub username
const promptUser = () => {
  return  inquirer.prompt([  
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation Instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Guidelines:',
  },
  {
    type: 'input',
    name: 'contribue',
    message: 'Contribution guidelines:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test Instructions:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the best email contact:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Github username please:',
  },
  {
    type: 'checkbox',
    message: 'What licences apply?',
    name: 'licence',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },]
)};



const genReadMe = ({title, description, install, usage, contribue, test, email, github, licence}) =>

`# ${title}


## Table of Contents
1. [Project Description](#project-description)
1. [Installation Instructions](#install)
1. [Usage Guidelines](#usage)
1. [Contribution guidelines](#contribute)
1. [Test Instructions](#test)
1. [Questions](#questions)
1. [License](#licence)

## Project Description <a name="project-description"></a>
${description}

## Installation Instructions: <a name="install"></a>
${install}

## Usage Guidelines: <a name="usage"></a>
${usage}

## Contribution guidelines: <a name="contribute"></a>
${contribue}

## Test Instructions: <a name="test"></a>
${test}

## Questions <a name="questions"></a>
Please email any questions about this project to: ${email}
or contact me though my github: ${github}

## License <a name="licence"></a>
${licence}`
;


const init = () => {
  promptUser()
  
    // Use writeFileSync method to use promises instead of a callback function
    .then((responses) => fs.writeFileSync('ReadMe_'+responses.title +'.md', genReadMe(responses)))
    .then(() => console.log('Successfully wrote to ReadMe_' +'.md'))
    .catch((err) => console.error(err));
};

init();



/*
// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
fs.writeFile(fileName.projectName, JSON.stringify
  (response, null, 2));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// inquirer
//   .prompt
(
  [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


   ![NPM](https://img.shields.io/npm/l/inquirer)
  */