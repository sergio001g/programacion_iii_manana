console.log("Bucles For");
for (let i=1; i<=10; i++) {
    console.log("Número:", i);
}
suma=0;
for (let i=1; i<=10; i++) {
    suma += i;
}
console.log("Suma total:", suma);

let numero = 4;
console.log("Tabla de multiplicar del", numero);
for (let i=1; i<=10; i++) {
    console.log(numero, "x", i, "=", numero*i);
}

nombre="francisco";
for (let i=0; i<=nombre.length; i++) {
    console.log(nombre[i]);
}
nombree="francisco";
for (let i=0; i<nombree.length; i++) {
    console.log(nombree[i]);
}

for(let i=1; i<=10; i++) {
    console.log("cuadrado de", i, "es", i**2);
}

console.log("Bucles While");
let i = 1;
while (i <= 6) {
    console.log("Indice:", i);
    i++;
}

let miArreglo=[-1,3,1,2,3];
let indice=1
while (indice<miArreglo.length){
    console.log("valor", indice, "es", miArreglo[indice])
    indice++;
}

let num=1
while (num<=10){
    if (num%2==0)
        console.log("Numero", num, "es par");
        num++;
}

let x = 5;
do {
    console.log("El valor de x es:", x);
    x--;
} while (x!=0);

let numeroo = 5;
let z = 1;
while (z <= 10) {
    console.log(numeroo, "x", z, "=", numeroo * z);
    z++;
}

let mult=1

let miArreglo2 = [7, 12, 15, 10, 9];
let indice2 = 1;
let mayor = miArreglo2[0]; 
while (indice2 < miArreglo2.length) {
    if (miArreglo2[indice2] > mayor) {
        mayor = miArreglo2[indice2]; 
    }
    indice2++;
}
console.log("El número mayor es:", mayor);
