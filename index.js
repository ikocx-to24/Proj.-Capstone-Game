import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

//Plays when game opens
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a Millionaire (Streets Edition)'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
      ${chalk.bgGreen('HOW TO PLAY')}
      I am a game on your computer.
      Just choose the correct answer using the arrow keys and press enter.
      If you get any questions wrong I will be ${chalk.bgRed('killed')}
      So please get it all right....

    `);
}
await welcome()

//Asking the player name
let playerName;

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player';
        },
    });
}
await askName()         //Add 'Welcome to "Game title Player" later

//Corrert or Incorrect Answer
async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...')
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}.`});
    }else{
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!`})         //Perhaps tell them the correct answer?
        process.exit(1);
    }
}

//Question 1
async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'You approach a crosswalk, and the pedestrian signal turns green. What should you do?',
        choices: [
            'a) Slow down and proceed with caution.',
            'b) Speed up to cross the intersection before pedestrians.',
            'c) Stop and allow pedestrians to cross.',
        ],
    });
    return handleAnswer(answers.question_1 == 'c) Stop and allow pedestrians to cross.');
}
await question1()



