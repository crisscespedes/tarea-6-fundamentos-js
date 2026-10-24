//Usamos la palabra clave function para indicar que sera una funcion 
function saludar (){
    console.log("Hola mundo");
}
//Asi llamamos a la funcion saludar
saludar();

function suma (){
    return 2 + 2;
}

//Podemos llamar de dos formas a una funcion 
let resultado = suma();
console.log(resultado);

console.log(suma());

//Funciones con parametros
let a;
let b;
function sumar (a,b){
    return a + b;
}
console.log(sumar(a));

function sumita(b){
    return b + 2;
}
console.log("Reemplazamos b por el 5 y mostramos el resultado: ",sumita(5));

console.log(sumar(4,5));
console.log(typeof sumar())


function sumando(c,d){
    console.log(arguments);
    return c + d;
}
let res = sumando(5,6,1,2,3);
console.log(res);

//Funciones con variables locales
let total = 0;
function sumadito(x,y){
    let aux = x + y;
    total = aux;
    return total;
}

console.log(sumadito(11,11));
