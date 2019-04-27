﻿const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    },
}
const argv = require('yargs')
    .command('listar', "Imprime en consola la tabla de multiplicar", opts)
    .command("crear", 'crea un archivo de la tabla de acuerdo a la base y limite que le pases',opts)
    .help()
    .argv;

module.exports = {
    argv
}