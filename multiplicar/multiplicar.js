const fs = require('fs');

let leerArchivo = (base,limite=10)  => {

    return new Promise((resolve, reject) => {
        let data = "";
        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    });
     
}


let crearArchivo = (base,limite) => {
    //let data = "";
    //for (let i = 1; i <= 12; i++) {
    //    data += `${base} * ${i} = ${base * i}\n`;
    //}

    //fs.writeFileSync(`tabla-${base}.txt`, data, err => {
    //    if (err) {
    //        throw new Error(`Error : ${err}`);
    //    } else {
    //        let nombre = `tabla`;
    //       return `tabla-${base}.txt`;
    //    }

    //});

   
    return new Promise((resolve, reject) => {
        let data = "";
        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err) {
                reject(`Error : ${err}`);
            } else {
                let nombre_archivo = `tabla-${base}.txt`;
                resolve({ nombre:nombre_archivo });
            }

        });
    });
    
   
}

module.exports = {
    crearArchivo,
    leerArchivo

}

