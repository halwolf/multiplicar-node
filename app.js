const argv = require('./config/yargs').argv
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Codigo fuente

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.rainbow}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);



// console.log(process.argv);
// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);

// console.log('limite', argv.base);
// console.log(argv2);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));