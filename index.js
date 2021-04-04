//node modules
const inquirer = require('inquirer');
const generatorMarkdown = require("./generateMarkdown.js");
const fs = require('fs');

//inquirer to generate questions
const questions = [
        {
            type: 'input',
            message:"What's the project title?",
            name:'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message:"Describe your project?",
            name:'description',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message:"How do you install your app?",
            name:'installation',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message:"Instructions to follow",
            name:'instructions',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message:"Any Credits?",
            name:'installation',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message:"How do you use your app?",
            name:'usage',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            //list of license
            type: 'list',
            message:"What license did you use?",
            name:'license',
            choices: ['The MIT license', 'The GPL license', 'Apache license', 'GNU license', 'N/A'],
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}, 
        },
        {
            type: 'input',
            message:"How do you install your app?",
            name:'installation',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}, 
        },
        {
            type: 'input',
            message:"GitHub username?",
            name:'git',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}, 
        },
        {
            type: 'input',
            message:"E-mail:",
            name:'email',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
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

module.exports = generatorMarkdown

// run the app
init();