const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const color = require('colors/safe');

// let base = 'q';
// let argv2 = process.argv;
// console.log('limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.red}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}