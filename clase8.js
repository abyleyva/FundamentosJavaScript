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

function imprimirNombreEnMayusculas(persona) {
    //var nombre=persona.nombre;
    var {nombre}=persona;
    console.log(nombre.toLocaleUpperCase());
}
function imprimirNombreYEdad(persona) {
    var {nombre}=persona;
    var {edad}=persona;

    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}
imprimirNombreEnMayusculas(aby);
imprimirNombreEnMayusculas(Aby2);
//imprimirNombreYEdad(aby);
//imprimirNombreYEdad(Aby2);

function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

