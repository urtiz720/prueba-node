const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite) => {
    console.log('=================='.green);
    console.log(`Tabla de ${ base }`.gray);
    console.log('=================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido no es un numero ---> ${base} <---`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                return reject(err);
            else
                return resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}