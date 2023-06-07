import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

//Plays when game opens
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

let playerName;

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a Millionaire (Project Capstone Edition)'
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


async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player';
        },       
    });
    playerName = answers.player_name;
    console.log(`Welcome to Who wants to be a Millionaire (Project Capstone Edition) ${playerName}!`)
}
await askName()        

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

//Question 2
async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'You are driving on a highway, and a car in the adjacent lane signals to merge into your lane. What should you do?',
        choices: [
            'a) Speed up to pass the merging car.',
            'b) Honk to assert your right-of-way.',
            'c) Adjust your speed and create space for the merging car.',
        ]
    });
    return handleAnswer(answers.question_2 == 'c) Adjust your speed and create space for the merging car.')
}
await question2()

//Question 3
async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'The road ahead is wet and slippery. How should you adjust your driving?',
        choices: [
            'a) Continue driving at the same speed.',
            'b) Increase your speed to maintain control.',
            'c) Reduce your speed and increase following distance.',
        ]
    });
    return handleAnswer(answers.question_3 == 'c) Reduce your speed and increase following distance.')
}
await question3()

//Question 4
async function question4() {
    const answers = await inquirer.prompt({
        name:'question_4',
        type: 'list',
        message: 'You enter a construction zone with reduced speed limits and orange cones.',
        choices: [
            'a) Maintain your speed since the construction doesnt affect your lane.',
            'b) Follow the posted speed limits and watch for workers or equipment.',
            'c) Speed up to get through the construction zone quickly.',

        ]
    });
    return handleAnswer(answers.question_4 == 'b) Follow the posted speed limits and watch for workers or equipment.');
}
await question4()

//Question 5
async function question5() {
    const answers = await inquirer.prompt({
        name:'question_5',
        type: 'list',
        message: 'A school bus stops ahead, and its red lights are flashing. What should you do?',
        choices: [
            'a) Pass the bus quickly since youre in a hurry.',
            'b) Stop until the bus turns off its red lights and resumes moving.',
            'c) Slow down but continue', 
        ]
    });
    return handleAnswer(answers.question_5 == 'b) Stop until the bus turns off its red lights and resumes moving.');
}
await question5()

function winner() {
    console.clear();
    const msg = `Congrats, ${playerName} ! \nHere's   $ 1, 000, 000`;
    figlet(msg, (err,data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
await winner()