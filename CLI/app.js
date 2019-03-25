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
        figlet.textSync('Hola Mundo', { horizontalLayout: 'full' })
    )
);

main();

function main(){
    inquirer.prompt([
        {
            name: 'list',
            type: 'list',
            message: 'Seleccione la opcion que desea realizar: ',
            choices: [
                {
                    name: 'Programar nueva tarea:',
                    type: 'checkbox',
                    message: 'registration',
                    value: '1'
                },
                {
                    name: 'Ver las tareas programadas:',
                    type: 'checkbox',
                    message: 'create',
                    value: '2'
                },
                {
                    name: 'Eliminar tarea actual',
                    type: 'checkbox',
                    message: 'clone',
                    value: '3'
                },
                {
                    name: 'Ayuda',
                    type: 'checkbox',
                    message: 'clone',
                    value: '4'
                },
                {
                    name: 'Salir',
                    type: 'checkbox',
                    message: 'salir',
                    value: '5'
                }
            ]
        }
    ]).then(answers => {
        console.log(answers);
        switch (answers.list) {
            case '1':
                create()
                break;
            case '2':
                read()
                break;
            case '3':
                eliminarActual()
                break;
            case '4':
                ayuda()
                break;
            default:
                break;
        }
        //  if (answers.list == 1){
        //     pingShell()
        // }
    });
}


function read() {
    console.log('Tareas Programadas:')

    shell.exec('crontab -l')
    main()
}

function eliminarActual() {
    console.log('Eliminar tarea actual:')

    shell.exec('crontab -r')
    main()
}

function create() {
    console.log('Llene los campos para la ejecución de la tarea:')
    inquirer.prompt([
        {
            name: 'minutos',
            type: 'input',
            message: 'Ingresar los minutos: ',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
        {
            name: 'horas',
            type: 'input',
            message: 'Ingresa las horas:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
        {
            name: 'dias',
            type: 'input',
            message: 'Ingresa los días de la semana:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
            
        },
        {
            name: 'meses',
            type: 'input',
            message: 'Ingresa los meses:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
        {
            name: 'diasMes',
            type: 'input',
            message: 'Ingresa los días del mes:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
        {
            name: 'url',
            type: 'input',
            message: 'Ingresa la url para el archivo:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
        {
            name: 'command',
            type: 'input',
            message: 'Ingresa el comando para ejecutar el archivo:',
            validate: function validateFirstName(name){
                return name !== '';
            }       
        },
    ]).then(answer => {
        console.log(answer);
        //echo "0 17 * * * date >> /home/juliocaballero/Escritorio/Fecha.txt" |  crontab -
        // shell.exec(`echo ${answer.minutos} ${answer.horas} ${answer.dias} ${answer.meses} ${answer.diasMes} 
        // ${answer.command} ${answer.url} | crontab -`)
        shell.exec('echo "'+`${answer.minutos} ${answer.horas} ${answer.dias} ${answer.meses} ${answer.diasMes} ${answer.command} ${answer.url}`+'" |  crontab -')
        main();
    });
}

function ayuda(){
    console.log('TIPS:')
    console.log('utilizar * para indicar todo el tiempo ya se minutos horas etc..')
    console.log('se puede utilizar - para indicar un rango ejem. 1-5')
    console.log('Se puede utlizar / para repetir un tiempo ejemplo */5 se repetira cada 5(min,hrs,m etc)')
    inquirer.prompt([
        {
            name: 'list',
            type: 'list',
            message: 'Seleccione la opcion que desea realizar: ',
            choices: [
                {
                    name: 'Regresar al menu',
                    type: 'checkbox',
                    message: 'registration',
                    value: '1'
                },
                {
                    name: 'Salir del CLI',
                    type: 'checkbox',
                    message: 'create',
                    value: '2'
                }
            ]
        }
    ]).then(answers => {
        console.log(answers);
        switch (answers.list) {
            case '1':
                main()
                break;
            default:
                break;
        }
        //  if (answers.list == 1){
        //     pingShell()
        // }
    });
}
