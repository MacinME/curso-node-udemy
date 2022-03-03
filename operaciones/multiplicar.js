const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(tabla, listar, hasta = 10) => {

    try {
        let i;
        let salida = '';
        let consola = '';


        for (i = 1; i <= hasta; i++) {
            salida += (`${tabla} x ${i} = ${tabla * i} \n`);
            consola += (`${tabla} x ${i} = ${tabla * i} \n`.america);

        }
        if (listar) {
            console.log('===================='.magenta)
            console.log('Tabla del : '.bgCyan.black, tabla);
            console.log('===================='.magenta);
            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
        return `${tabla}.txt`.yellow;

    } catch (error) {
        return error;
    }


};

module.exports = {
    crearArchivo
}