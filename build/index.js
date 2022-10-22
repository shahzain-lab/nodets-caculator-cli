"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const ADDITION = "Addition";
const SUBTRACTION = "Subtraction";
const MULTIPLY = "Multiplication";
const DIVISION = "Division";
const operations = [
    {
        key: 'A',
        name: ADDITION
    },
    {
        key: 'S',
        name: SUBTRACTION
    },
    {
        key: 'M',
        name: MULTIPLY
    },
    {
        key: 'D',
        name: DIVISION
    },
];
console.log(`________________________\nInstructions\n> below you can select a key or press enter to open a dropdown\n> add one or more digits seperated by commas(,)\n> string value will be ignored \n________________________`);
const initCalculator = () => {
    const output = (opr) => (`output: ${opr}\n_______________`);
    inquirer_1.default.prompt([
        {
            type: 'expand',
            name: 'method',
            message: 'Press enter and select a method',
            choices: operations
        },
        {
            type: 'input',
            name: 'nums',
            message: 'enter digits seperated by commas(,)',
        }
    ]).then(ans => {
        const digits = ans.nums.split(',');
        const nums = digits
            .map((d) => Number(d.trim()))
            .filter((num) => !isNaN(num));
        console.log(`${ans.method} of ${nums}`);
        switch (ans.method) {
            case ADDITION:
                let add = nums.reduce((prev, curr) => prev + curr, 0);
                console.log(output(add));
                break;
            case SUBTRACTION:
                let sub = nums.reduce((prev, curr) => curr - prev, 0);
                console.log(output(sub));
                break;
            case MULTIPLY:
                let multiply = nums.reduce((prev, curr) => curr * prev, 1);
                console.log(output(multiply));
                break;
            case DIVISION:
                let division = nums.reduce((prev, curr) => curr / prev, 1);
                console.log(output(division));
                break;
        }
        initCalculator();
    }).catch(err => {
        console.log(`OOPS: ${err}`);
    });
};
initCalculator();
//# sourceMappingURL=index.js.map