#! /usr/bin/env node

import inquirer from "inquirer"; 

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer generated and show 
 
const randomNumber = Math.floor(Math.random() * 20 + 10); 


const answer = await inquirer.prompt([ 
{ 
    name: 'userGuessedNumber', 
    type: 'number', 
    message: 'Please guess a number between 10-20: ',
},
]);

if(answer.userGuessedNumber === randomNumber ){ 
    console.log('Congratulation! you guessed correct number.')
} else { 
    console.log('You guessed wrong number');
}