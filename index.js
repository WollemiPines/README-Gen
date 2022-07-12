// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions GitHub username
const promptUser = () => {
  return inquirer.prompt([  
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
    name: 'Usage',
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
) .then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});}

promptUser();

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