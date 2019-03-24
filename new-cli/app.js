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
        figlet.textSync('Hola Mundo', {horizontalLayout: 'full'})
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
                name: 'Cron',
                type: 'checkbox',
                message: 'Cron',
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
            cronShell()
          break;
        case '2':
            whoisShell()
          break;
        case '3':
            wgetShell()
          break;
        default:
           //code block
      } 
    //   if (answers.list == 1){
    //      pingShell()
    //  }
});

function cronShell(){
    var cron;
    inquirer.prompt([
        {
            name: 'minuto',
            type: 'input',
            message: 'A que minuto desea programarlo? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'hora',
            type: 'input',
            message: 'A que hora desea programarlo? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'dia',
            type: 'input',
            message: 'A que dia del mes desea programarlo? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'mes',
            type: 'input',
            message: 'A que mes del año desea programarlo? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'diaSemana',
            type: 'input',
            message: 'A que dia de la semana desea programarlo? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'ejecutar',
            type: 'input',
            message: 'Que comando desea ejecutar? ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        },
        {
            name: 'direccion',
            type: 'input',
            message: 'Escriba la direccion del programa a ejecutar ',  
            validate: function validateFirstName(name){
                return name !== '';
            }          
        }
    ]).then(answer=>{        
        cron = answer;
        //console.log(cron);        
        console.log( answer.minuto + ' ' + answer.hora + ' ' + answer.mes + ' ' + answer.diaSemana + ' ' +
        answer.ejecutar + ' ' + answer.direccion);
    });    
}

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
