// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your project's description?",
            name: "description",
        },
        {
            type: "input",
            message: "What are your installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is your usage information?",
            name: "usage",
        },
        {
            type: "input",
            message: "What are your contributing guidelines?",
            name: "contributing",
        },
        {
            type: "input",
            message: "What are your test instructions?",
            name: "test",
        },
        {
            type: "list",
            message: "Choose a license from the following list:",
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD T-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v2.1",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "GNU Lesser General Public License v3.0",
                "Mozilla Public License 2.0",
                "The Unilicense",
            ],
            name: "license",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        }
    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);

        fs.writeFile('Demo-README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });


// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }
const generateReadme = ({ title, description, installation, usage, contributing, test, license, github, email }) =>
`
# ${title}
## Description:
${description}
##Installation:
${installation}
##Usage:
${usage}
##Contributing:
${contributing}
##Tests:
${test}
##Questions:
${github}
${email}
`;

//     // TODO: Create a function to initialize app
//     function init() { }

// // Function call to initialize app
// init();
