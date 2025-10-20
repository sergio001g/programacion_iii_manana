console.log("🧮 OPERADORES ARITMÉTICOS EN ALIACADEMY");

// Supongamos que estamos calculando promedios de un estudiante
let nota1 = 8.5;
let nota2 = 9.0;
let nota3 = 7.5;

console.log("Suma de notas:", nota1 + nota2 + nota3);
let promedio = (nota1 + nota2 + nota3) / 3;
console.log("Promedio del estudiante:", promedio.toFixed(2));

console.log("Comparaciones de notas:");
console.log("¿El promedio es mayor o igual a 8?", promedio >= 8);
console.log("¿El promedio es menor a 6?", promedio < 6);

console.log("Operadores lógicos:");
let aprobado = promedio >= 7 && promedio <= 10;
console.log("¿El estudiante aprueba?", aprobado);

console.log("Operadores adicionales:");
let diferencia = nota2 - nota3;
console.log("Diferencia entre nota más alta y más baja:", diferencia.toFixed(1));

let cuadrado = nota1 ** 2;
console.log("Ejemplo de potencia (nota1^2):", cuadrado);
