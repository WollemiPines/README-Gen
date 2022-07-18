// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



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
    choices: ['GNU GPLv3', 'MIT', 'BSD 3', 'Apache'],
  },]
)};


function licenceMarkdown(licence) {
  if (licence == 'GNU GPLv3'){
    return (`Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/> 
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

    https://www.gnu.org/licenses/gpl-3.0.en.html`);
   }
  if (licence == 'MIT'){
    return (`Copyright © 2022 <copyright holders>
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    https://mit-license.org/
    `)
   }
  
  if (licence == 'BSD 3'){
    return(`The Clear BSD License

    Copyright (c)
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted (subject to the limitations in the disclaimer
    below) provided that the following conditions are met:
    
         * Redistributions of source code must retain the above copyright notice,
         this list of conditions and the following disclaimer.
    
         * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
    
         * Neither the name of the copyright holder nor the names of its
         contributors may be used to endorse or promote products derived from this
         software without specific prior written permission.
    
    NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY
    THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
    CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
    PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
    BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
    IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    POSSIBILITY OF SUCH DAMAGE.
    https://choosealicense.com/licenses/bsd-3-clause-clear/
    `)
   }

  if(licence == 'Apache'){
    return (`Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `);
  }
}

function licenceBadge(licence) {
  if (licence == 'GNU GPLv3'){
    return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');

   }
  if (licence == 'MIT'){
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
   }
  
  if (licence == 'BSD 3'){
    return('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)')
   }

  if(licence == 'Apache'){
    return (`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `);
  }
}



const genReadMe = ({title, description, install, usage, contribue, test, email, github, licence}) =>

`${licenceBadge(licence)}

# ${title}

## Project Description <a name="project-description"></a>
${description}

## Table of Contents
1. [Project Description](#project-description)
1. [Installation Instructions](#install)
1. [Usage Guidelines](#usage)
1. [Contribution guidelines](#contribute)
1. [Test Instructions](#test)
1. [Questions](#questions)
1. [License](#licence)

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
or contact me though my github:[${github}:](https://github.com/${github})

## License <a name="licence"></a>
${licenceMarkdown(licence)}

`
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