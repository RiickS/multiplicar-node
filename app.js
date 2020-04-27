// requireds
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');



// const argv = require('yargs')
//     .command('listar', 'imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { ListarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}

console.log(argv);

// console.log('Limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1]



// let data = '';

// for (let i = 1; i <= 10; i++) {

//     data += `${ base } * ${ i } = ${ base * i}\n`;

// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo tabla-${ base }.txt ha sido creado`);
// });