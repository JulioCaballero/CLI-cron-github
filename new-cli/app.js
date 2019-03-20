const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const shell = require('shelljs');

clear();

console.log('');
console.log('');

console.log(
    chalk.green(
        figlet.textSync('Hola Mundo', {font: 'doom', horizontalLayout: 'full'})
    )
);

inquirer.prompt([
    {
        name: 'list',
        type: 'list',
        message: '¿Qué hacer?',
        choices: [
            {
                name: 'ping',
                type: 'checkbox',
                message: 'Ping',
                value: '1'
            },
            {
                name: 'whois',
                type: 'checkbox',
                message: 'Who is',
                value: '2'
            },
            {
                name: 'wget',
                type: 'checkbox',
                message: 'Wget',
                value: '3'
            },
            {
                name: 'Salir',
                type: 'checkbox',
                message: 'Salir',
                value: '4'
            }
        ]
    }
]).then(answers => {
    console.log(answers);
    switch(answers.list){
        case '1':
            pingShell()
          break;
        case '2':
            whoisShell()
          break;
        case '3':
            wgetShell()
          break;
        default:
          // code block
      } 
    //  if (answers.list == 1){
    //     pingShell()
    // }
});

function pingShell(){
    console.log('Ping')
    inquirer.prompt([
        {
            name: 'ping',
            type: 'input',
            message: 'Ingresa la ip o url: '
        }
    ]).then(answer=>{
        console.log(answer);
        shell.exec('ping ' + answer.ping)
    });
}

function whoisShell(){
    console.log('Who is')
    inquirer.prompt([
        {
            name: 'whois',
            type: 'input',
            message: 'Ingresa la ip o url: '
        }
    ]).then(answer=>{
        console.log(answer);
        shell.exec('whois ' + answer.whois)
    });
}

function wgetShell(){
    console.log('Wget')
    inquirer.prompt([
        {
            name: 'wget',
            type: 'input',
            message: 'Ingresa la ip o url: '
        }
    ]).then(answer=>{
        console.log(answer);
        shell.exec('wget ' + answer.wget)
    });
}
