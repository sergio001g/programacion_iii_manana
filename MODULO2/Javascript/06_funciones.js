console.log("FUNCIONES");
console.log("FORMA CLÁSICA");
function saludar () {
    console.log("Hola desde una función clásica");
}
saludar();

console.log("FORMA CON PARÁMETROS Y RETORNOS");
function sumar (a, b) {
    return a + b;
}
resultado = sumar(4, 9);
console.log("la suma es ", resultado);

console.log("FUNCIONES FLECHAS");
const resta = (a,b) =>{
    return a - b;
}
let resultadoResta = resta(9, 5);
console.log("la resta es ", resultadoResta);

console.log("FUNCIÓN RETORNO DIRECTO");
const cuadrado = x => x * x;
console.log("el cuadrado de 5 es ", cuadrado(5));

console.log("FUNCIÓN CON PARÁMETROS POR DEFECTO");
function saludar (nombre, saludo = "Hola") {
    return saludo + " " + nombre;
}
let saludo1 = saludar("Francisco");
let saludo2 = saludar("Francisco", "Buenos días");
console.log(saludo1);
console.log(saludo2);

function parImpar (n) {
    if (n % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(parImpar(5));

function areaTriangulo (a, b) {
    return (a * b) / 2;
}
console.log("El área es ", areaTriangulo(5, 8));