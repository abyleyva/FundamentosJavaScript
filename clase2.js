var nombre='Aby',apellido='Leyva';

var nombreEnMayusculas=nombre.toUpperCase();
var apellidoEnMinusculas=apellido.toLocaleLowerCase();

var primeraLetraDelNombre=nombre.charAt(0);

var cantidadDeLetrasDelNombre=nombre.length;

var nombreCompleto=`${nombre} ${apellido.toUpperCase()}`;

var str=nombre.substr(1,2);
//DESAFIO: Mostrar al cliente: cual es la ultima letra de su nombre
var ultimaLetraDeSuNombre_Opcion1=nombre.substr(nombre.length-1,1);
var ultimaLetraDeSuNombre_Opcion2=nombre.charAt(nombre.length-1);
