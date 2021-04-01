//node modules
const inquirer = require('inquirer');
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
inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `README.md`;

        fs.writeFile(filename, data, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });