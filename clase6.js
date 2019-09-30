var aby={
    nombre: 'Aby',
    apellido: 'Leyva',
    edad: 28
}

var Aby2={
    nombre: 'Abis',
    apellido: 'Castro',
    edad: 20
}

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toLocaleUpperCase());
}

imprimirNombreEnMayusculas(aby);
imprimirNombreEnMayusculas(Aby2);
imprimirNombreEnMayusculas({nombre:'pepe'});
//imprimirNombreEnMayusculas();
//imprimirNombreEnMayusculas({apellido:'gomez'})