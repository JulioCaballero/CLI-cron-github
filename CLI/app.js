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
        message: 'Selecciona la operción que requieras: ',
        choices: [
            {
                name: 'Ingresar cuenta de Github',
                type: 'checkbox',
                message: 'registration',
                value: '1'
            },
            {
                name: 'Crear Repositorio',
                type: 'checkbox',
                message: 'create',
                value: '2'
            },
            {
                name: 'Clonar Repositorio',
                type: 'checkbox',
                message: 'clone',
                value: '3'
            },
            {
                name: 'Eliminar Repositorio',
                type: 'checkbox',
                message: 'delete',
                value: '4'
            },
            {
                name: 'Abrir Repositorio con Visual Studio Code (Merge)',
                type: 'checkbox',
                message: 'code',
                value: '5'
            },
            {
                name: 'Salir',
                type: 'checkbox',
                message: 'salir',
                value: '6'
            }
        ]
    }
]).then(answers => {
    console.log(answers);
    switch(answers.list){
        case '1':
            registration()
          break;
        case '2':
            create()
          break;
        case '3':
            clone()
          break;
        case '4':
            deleteShell()
          break;
        case '5':
            code()
          break;
        default:
          break;
      } 
    //  if (answers.list == 1){
    //     pingShell()
    // }
});

function registration(){
   console.log('Llene los campos correctamente')
    inquirer.prompt([
        {
            name: 'email',
            type: 'input',
            message: 'Ingresa tu correo:'
        },
        {
            name: 'pwd',
            type: 'password',
            message: 'Ingresa tu contraseña:'
        }
    ]).then(answer=>{
        console.log(answer);
        shell.exec('ping ' + answer.ping)
    });
}

function create(){
    console.log('Llene los campos correctamente')
     inquirer.prompt([
         {
             name: 'email',
             type: 'input',
             message: 'Ingrese el nombre del Repositorio'
         },
         {
             name: 'pwd',
             type: 'password',
             message: 'Ingresa tu contraseña:'
         }
     ]).then(answer=>{
         console.log(answer);
         shell.exec('ping ' + answer.ping)
     });
 }
