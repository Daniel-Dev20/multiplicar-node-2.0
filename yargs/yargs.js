const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base del número a multiplicar'
    })
    .check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un  numero'
    }
    return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta que número llegara la tabla'
    })
    .argv;

    module.exports = argv;