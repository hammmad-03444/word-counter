#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your sentence here to calculate the words"
    }]);
const word = answers.Sentence.trim().split(" ");
console.log(chalk.blueBright.bold(`your words are here ${word}`));
console.log(chalk.yellowBright.italic.bold(`your sentence contains ${word.length} words .`));
