

const {crearTabla} = require('./helpers/multiplicar');

const argv = require('./yargs/yargs');

require('colors');

console.clear();








crearTabla(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.green))
               .catch(err => console.log(err));



