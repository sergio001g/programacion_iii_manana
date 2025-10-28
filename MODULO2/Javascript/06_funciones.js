console.log("Fucniones");

console.log("Forma Clásica");

function saludar() {
    console.log("Hola desde una funcion clásica");
}
saludar();

console.log("Forma con Parametros y Retorno");

function sumar(a,b) {
    return a + b
}
let resultado = sumar(4,9);
console.log("La suma es: ", resultado);

console.log("Funcion Flecha");

const resta = (a,b) => {
    return a - b
}
let resultadoResta = resta(4,9);
console.log("La resta es: ", resultadoResta);

console.log("Funcion Retorno Directo");
const cuadrado = x => x * x;
console.log("Cuadrado de 5: ",cuadrado(5));

console.log("Funcion con Parametros por Defecto");
function saludar(nombre, saludo = "Hola") {
    return saludo +" "+ nombre;
}
let saludo1 = saludar("Carlos");
let saludo2 = saludar("Luis", "Buenos días");
console.log(saludo1);
console.log(saludo2);

console.log("Area de un triangulo")
function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

let base = 10;
let altura = 5;
console.log("El área del triángulo es:", areaTriangulo(base, altura));

console.log("Array o Arreglos");
let numeros = [10, 5, 26, 9];
let arrayvacio = new Array();
let arrayvacio2 = [];

console.log("Arreglo de numeros original", numeros)
console.log(arrayvacio);
console.log(arrayvacio2);
console.log("Acceso a los elementos del array");
console.log(numeros [0]);
console.log(numeros [3]);

console.log("Modificar elementos array");
numeros [0] = 100;
console.log(numeros);

console.log("Agregar elemento al array");
numeros.push(500);
console.log(numeros);

console.log("Agregar elemento al incio del array");
numeros.unshift(888);
console.log(numeros);

console.log("Eliminar el ultimo elemento del array");
numeros.pop();
console.log(numeros);

console.log("Eliminar el primer elemento del array");
numeros.shift();
console.log(numeros);

console.log("Iteracion de array del array");
let indice = 0;
console.log("Iteracion con While");
while (indice < numeros.length) {
    console.log("Valor", indice, "es", numeros[indice]);
    indice++;
}

console.log("Iteracion con For");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log("Iteracion con for ... of");
for (let valor of numeros) {
    console.log(valor);
}

console.log("Iteracion con for Each");
numeros.forEach(function(valor, indice) {
    console.log(indice, valor);
}); 
