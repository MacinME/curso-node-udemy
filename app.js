const { crearArchivo } = require('./operaciones/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(yargs);
// console.log(yargs.l);
// console.log('Base: ', yargs.b);
//option 'l',
//listar
//boolean
//default: false

// //console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, tabla = 5] = arg3.split('=');

crearArchivo(argv.b || argv.base, argv.l || argv.listar, argv.h || argv.hasta)
    .then(fileCreated => console.log(fileCreated, 'creado'))
    .catch(err => console.log(err));