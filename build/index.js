#!/usr/bin/env node


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
/*
 start:dev - starts live server
 start - compile and render output
 build - compile into fresh build folder
*/
console.log(chalk.yellow('________________________'));
console.log(chalk.magenta(`Instructions\n> below you can select one of the given method\n> number accepted, string value will be ignored`));
console.log(chalk.yellow('________________________'));
class App {
    constructor() {
        this.output = (opr) => (`\n${chalk.green(`output: ${chalk.yellow(opr)}`)}\n_______________`);
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const promptMethod = yield inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'method',
                    message: chalk.bgCyan("Select one of the following method: "),
                    choices: ["Substraction", "Addition", "Division", "Multiplication"].map(m => {
                        return {
                            name: chalk.green(m),
                            value: m
                        };
                    })
                }
            ]);
            if (promptMethod.method) {
                console.log();
                const promptAmount = yield inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first',
                        message: chalk.bgCyan(`Enter your first amount: `)
                    },
                    {
                        type: 'input',
                        name: 'second',
                        message: '\n' + chalk.bgCyan(`Enter your second amount: `)
                    },
                ]);
                const first = Number(promptAmount.first);
                const second = Number(promptAmount.second);
                if (!isNaN(first) && !isNaN(second)) {
                    switch (promptMethod.method) {
                        case 'Addition':
                            let add = first + second;
                            console.log(this.output(add));
                            break;
                        case 'Substraction':
                            let sub = first - second;
                            console.log(this.output(sub));
                            break;
                        case 'Multiplication':
                            let multiply = first * second;
                            console.log(this.output(multiply));
                            break;
                        case 'Division':
                            let division = first / second;
                            console.log(this.output(division));
                            break;
                    }
                }
                else {
                    console.log(chalk.yellow('________________________'));
                    console.log(chalk.red('You entered invalid value. try again...'));
                    console.log(chalk.yellow('________________________'));
                    this.init();
                }
                if (!isNaN(first) && !isNaN(second)) {
                    const confirm = yield inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'confirm',
                            message: chalk.bgCyan('Do you want to use again: ')
                        }
                    ]);
                    if (confirm.confirm) {
                        this.init();
                    }
                }
            }
        });
    }
}
figlet.text('shahzaincalc', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}, ((err, data) => {
    console.log('\n');
    console.log(gradient.rainbow(data));
    console.log('\n');
    new App();
}));
