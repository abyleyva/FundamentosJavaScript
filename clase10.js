const EdadBase=18;
var aby={
    nombre: 'aby',
    apellido:'leyva',
    edad:18,
    ingeniero : true,
    cocinero : false,
    dj : false,
    guitarrista : false,
    programador: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} :` );
    if (persona.ingeniero){
        console.log('es Ingeniero');
    }
    else {
        console.log('No es Ingeniero');
    }
    if (persona.cocinero){
        console.log('es Cocinero');
    }
    else {
        console.log('No es Cocinero');
    }
    if (persona.dj){
        console.log('es DJ');
    }
    else {
        console.log('No es DJ');
    }
    if (persona.guitarrista){
        console.log('es guitarrista');
    }
    else {
        console.log('No es guitarrista');
    }
    if (persona.programador){
        console.log('es programador');
    }
    else {
        console.log('No es programador');
    }
    
};

imprimirProfesiones(aby);

function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad>=EdadBase) {
        console.log(`y es mayor de Edad con ${persona.edad} años`)
    }
    else{
        console.log(`y es menor de Edad con ${persona.edad} años`)
    }
}
imprimirSiEsMayorDeEdad(aby);