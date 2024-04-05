#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currencyRates = {
    USD: 1,
    PKR: 280,
    EUR: 0.89,
    GBP: 0.75,
    INR: 73.5,
    AUD: 1.31,
    CAD: 1.26,
    CHF: 0.91,
    CNY: 6.87,
    JPY: 110.5,
    // Add more currency rates here
};
const answers = await inquirer.prompt([
    {
        message: chalk.blue("Write The Currency Name Do You Have"),
        name: "fromCurrency",
        type: "list",
        choices: ['USD', 'PKR', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'CHF', 'CNY', 'JPY']
    },
    {
        message: chalk.blue("What The Currency do You Want To Convert"),
        name: "toCurrency",
        type: "list",
        choices: ['USD', 'PKR', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'CHF', 'CNY', 'JPY']
    },
    {
        message: chalk.blue("Enter Your Amount To Be Convert"),
        name: "amount",
        type: "number"
    }
]);
const fromAmount = currencyRates[answers.fromCurrency];
const toAmount = currencyRates[answers.toCurrency];
const amount = answers.amount;
const baseAmount = amount / fromAmount;
const convertAmount = baseAmount * toAmount;
console.log(chalk.green(`${amount} ${answers.fromCurrency} = ${convertAmount.toFixed(2)} ${answers.toCurrency}`));
