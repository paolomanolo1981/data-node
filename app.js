//const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, leerArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(comando)
switch (comando) {
    case "listar":
        console.log("comando listar");
        leerArchivo(argv.base,argv.limite)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(`${error}`);
            });
        break;
    case "crear":
        console.log("comando crear");
        crearArchivo(argv.base,argv.limite)
            .then(data => {
                console.log(`Nombre del archivo: ${data.nombre}`.green);
            })
            .catch(error => {
                console.log(`${error}`);
            })
        break;
    default:
        console.log("comando no existe");
}

////let base ="15";

//let argv2 =process.argv;
//let base = parametro.split("=")[1];
//console.log(argv.base);
//console.log("limite: " + argv.l);
//console.log(argv2);

//let data = "";
//for (let i = 1; i <= 12; i++) {
//    data += `${base} * ${i} = ${base * i}\n`;
//}

//fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
//    if (err) {
//        throw err;
//    } else {
//        console.log("archivo escrito correctamente");
//    }
    
//});

//crearArchivo(base)
//    .then(nombre_archivo => {
//        console.log(nombre_archivo);
//    })
//    .catch(error => {
//        console.log(error);   
//    })


//crearArchivo(base)
//    .then( data => {
//        console.log("Nombre del archivo: " + data.nombre);
//    })
//    .catch(error => {
//        console.log(`${error}`);
//    })

