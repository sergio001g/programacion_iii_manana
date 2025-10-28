let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

let password = "admin123";
if (password === "admin12345") {
    console.log("Usuario loguequeado");
} else {
    console.log("Acceso denegado");
}

let nota = 7;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tiene_licencia = true;
if (edad >= 18) {
    if (tiene_licencia) {
        console.log("Puede conducir");
    } else {
        console.log("No tiene licencia");
    }
} else {
    console.log("Menor de edad");
}

edad = 20;
tiene_licencia = true;
if (edad >= 18 && tiene_licencia) {
    console.log("Puede conducir");
} else {
    console.log("Menor de edad o no tiene licencia");
}

//estructura switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}

let n1=10;
let n2=5;
let n3=8;
switch (true) {
    case (n1>=n2 && n1>=n3):
        console.log("n1 es el mayor");
        break;
    case (n2>=n1 && n2>=n3):
        console.log("n2 es el mayor");
        break;
    default:
        console.log("n3 es el mayor");
}

let a = 10;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log("a es el mayor");
} else if (b > a && b > c) {
    console.log("b es el mayor");
} else {
    console.log("c es el mayor");
}
