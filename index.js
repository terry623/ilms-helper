const inquirer = require('inquirer');

async function testPrompt() {
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Select toppings',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' = The Meats = '),
        {
          name: 'Pepperoni',
        },
        {
          name: 'Ham',
        },
        {
          name: 'Ground Meat',
        },
        {
          name: 'Bacon',
        },
      ],
      validate: answer => {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      },
    },
  ]);
  console.log(JSON.stringify(answers, null, '  '));
}

testPrompt();
