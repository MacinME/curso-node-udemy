const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base para multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la lista de la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Defini la cantidad de columnas a ejecutar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;