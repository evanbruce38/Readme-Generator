// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please list the table of contents for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for how to use your app, provide screenshots as needed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply to your app?'
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Movilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like to have other developers contribute to your project, please specify the guidelines you would like them to follow.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'please list your collaborators, if any, with links to their github profiles.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe how users may be able to run tests for your application.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email for users to reach out to if they have further questions about your application.'
    },
];

// TODO: Create a function to write README file
function writeReadmeFile(answers) {}

// TODO: Create a function to initialize app
function init() {
    .then((answers) => {
        console.log(answers)
        const generatedReadMe = generateMarkdown(answers);
        console.log(generatedReadMe);
        fs.writeFile('README.md', generatedReadMe, (err) => {
            if (err) throw err;
            console.log('Succesfully generated README');
        });
    });
};

// Function call to initialize app
init();
