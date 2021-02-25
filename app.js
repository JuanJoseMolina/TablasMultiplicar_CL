
const { crearTabla } = require('./helpers/multiplicar');

const  argv  = require('./config/yargs');


console.clear();


    // test a pasa sacar arugmentos directamente sin usar el packete yargs

    // const[, , arg3 = 'base=5']  = process.argv
    // const[, valor] = arg3.split('=')
    // console.log(valor);
    // const base = valor;


 crearTabla(argv.b, argv.c, argv.l)
     .then( nombrearchivo => console.log(nombrearchivo) )
     .catch( err =>  console.log( err ) );