const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');


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
]);