import inquirer from "inquirer";
import chalk from "chalk";
function main() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter your first number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter your second number",
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Substract", "Multiplication", "Division"],
            message: "Enter Your Operator",
        },
    ])
        .then((answers) => {
        const { operator, num1, num2 } = answers;
        if (answers.operator == "Addition") {
            Addition(Number(num1), Number(num2));
        }
        else if (answers.operator == "Substract") {
            Substract(Number(num1), Number(num2));
        }
        else if (answers.operator == "Multiplication") {
            Multiplication(Number(num1), Number(num2));
        }
        else if (answers.operator == "Division") {
            Division(Number(num1), Number(num2));
        }
        else {
            console.log("Invailid operator");
        }
    });
}
function Addition(num1, num2) {
    const result = num1 + num2;
    console.log(chalk.green(`Sum: ${num1} + ${num2} =  ${result}`));
}
function Substract(num1, num2) {
    const result = num1 - num2;
    console.log(chalk.red(`Substract:${num1} - ${num2} = ${result}`));
}
function Multiplication(num1, num2) {
    const result = num1 * num2;
    console.log(chalk.blue(`Multiply:${num1} * ${num2} = ${result}`));
}
function Division(num1, num2) {
    const result = num1 / num2;
    console.log(chalk.yellow(`Division:${num1} / ${num2} = ${result}`));
}
main();
