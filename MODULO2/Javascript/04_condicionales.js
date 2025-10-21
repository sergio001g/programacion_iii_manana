let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

let password = "pass123";
if (password === "pass12345") {
    console.log("Usuario logueado");
} else {    
    console.log("Acceso denegado");
}

let nota = 7;
if (nota >= 7) {
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
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

let edad2 = 20;
let tiene_licencia2 = true;
if (edad >= 18 && tiene_licencia) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}

// Estructura Switch
let dia = "lunes";


switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Último día laboral");
        break;
    default:
        console.log("Día normal");
}

let n1 = 10;
let n2 = 5;
let n3 = 12;

if (n1 >= n2 && n1 >= n3) {
    console.log("El número mayor es:", n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("El número mayor es:", n2);
} else {
    console.log("El número mayor es:", n3);
}


