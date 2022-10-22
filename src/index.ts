import inquirer from 'inquirer';

/*
 start:dev - starts live server
 start - compile and render output
 build - compile into fresh build folder
*/

const ADDITION="Addition";
const SUBTRACTION="Subtraction";
const MULTIPLY="Multiplication";
const DIVISION="Division";

const operations: {key: string; name: string;}[] = [
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

console.log(`________________________\nInstructions\n> below you can select a key or press enter to open a dropdown\n> add one or more digits seperated by commas(,)\n> number accepted, string value will be ignored \n________________________`);

const initCalculator = (): void => {


    const output = (opr: number) => (
        `output: ${opr}\n_______________`
    )

    inquirer.prompt([
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
    ]).then((ans: {method: string; nums: string}) => {
        // console.log(ans)
        const digits = ans.nums.split(',');
        const nums = digits
        .map((d: string) => Number(d.trim()))
        .filter((num: number) => !isNaN(num))
        console.log(`${ans.method} of ${nums}`)
        switch(ans.method) {
            case ADDITION: 
                let add = nums.reduce((prev: number, curr: number) => prev + curr, 0);
                console.log(output(add));
                break;
            
            case SUBTRACTION: 
                let sub = nums.reduce((prev: number, curr: number) => curr - prev, 0);
                console.log(output(sub));
                break;
            case MULTIPLY:
                let multiply = nums.reduce((prev: number, curr: number) => curr * prev, 1);
                console.log(output(multiply));
                break; 
            case DIVISION:
                let division = nums.reduce((prev: number, curr: number) => curr / prev, 1);
                console.log(output(division));
                break;     
        }
        initCalculator();
    }).catch(err => {
        console.log(`OOPS: ${err}`)
    })

    
}

initCalculator()