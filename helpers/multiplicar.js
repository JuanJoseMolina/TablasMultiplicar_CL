const { green } = require('colors');
const fs = require('fs');
const colors = require('colors');

const crearTabla = async(base, c, longitud) => {
    

    try {
        console.clear();

        let paraconsola = '';
        let parafichero = '';
        
        for (let i = 1; i <= longitud; i++) { 

            paraconsola += `${base} ${colors.green('x')} ${i} = ${base * i}\n`;
            parafichero += `${base} x ${i} = ${base * i}\n`;
        }

        if (c){       

            console.log(' ================================= '.bgRed);
            console.log(`          TABLA DEL ${base}         `);
            console.log(' ================================= '.bgRed);
            console.log( paraconsola )

        }

        
        fs.writeFileSync(`./Tablas/Tabla de ${base}.txt`, parafichero);
        console.log('Grabado correctamente!');

        return `Tabla de ${base}.txt`
        
    } catch (error) {
        throw error;
    }


   
    
}

module.exports = { crearTabla }