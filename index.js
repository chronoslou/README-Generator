//node modules
const inquirer = require('inquirer');
const generatorMarkdown = require("./generateMarkdown.js");
const fs = require('fs');

//inquirer to generate questions
const questions = [
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "UserName",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "Email",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },        
        {
            type: "input",
            message: "What is the title for your project?",
            name: "Title",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: "input",
            message: "Please give description of your project.",
            name: "Description",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: "input",
            message: "What necessary dependencies must be installed to run this app?",
            name: "Installation",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: "input",
            message: "What is this app used for?",
            name: "Usage",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
            //list of license
            type: 'input',
            message:"What license did you use?",
            name: "license",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        {
            type: "input",
            message: "Please add contributors",
            name: "Contributor",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: "input",
            message: "What command do you use to test this App?",
            name: "Test",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        }
  ];

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile("./readme-demo"+fileName, data, function(err) {
        if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
})

}
    
// initialization function
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md", generatorMarkdown(data));
      })
}

// run the app
init();