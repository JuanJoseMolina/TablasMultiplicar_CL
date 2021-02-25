const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            default: 5,
            describe: 'introducir la base de la tabla',
            type: 'number'
        }).check((argv, options) => {
            const base = argv._
            if (isNaN(argv.base)) {
              throw new Error("La base tiene que ser un numero")
            } else {
              return true // tell Yargs that the arguments passed the check
            }
          })
        .option('l', {
            alias: 'longitud',
            default: 10,
            describe: 'longitud de la tabla de mutiplicar',
            type: 'number'
        })
        .check((argv, options) => {
            const base = argv.longitud
            if (isNaN(argv.longitud)) {
              throw new Error("La longitud tiene que ser un numero")
            } else {
              return true // tell Yargs that the arguments passed the check
            }
          })
        .option('c', {
            alias: 'vconsola',
            default: false,
            describe: 'True -> crea la lista en la consola',
            type: 'boolean'
        })
        
        .argv


        module.exports= argv;