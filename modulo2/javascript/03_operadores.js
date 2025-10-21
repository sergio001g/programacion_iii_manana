console.log("Duolingo — Operadores en JavaScript");

// Ejemplo aritmético con contexto Duolingo: XP de hoy y bonus
let xpHoy = 10;
let xpBonus = 20;

console.log("suma (XP total hoy)");
let suma = xpHoy + xpBonus;
console.log("Resultado de la suma", suma);

console.log("resta (XP neto si quito el bonus)");
let resta = xpHoy - xpBonus;
console.log("Resultado de la resta", resta);

console.log("multiplicacion (XP multiplicado por un combo)");
let multiplicacion = xpHoy * 2;
console.log("Resultado de la multiplicacion", multiplicacion);

console.log("division (XP promedio por 2 sesiones)");
let division = xpBonus / 2;
console.log("Resultado de la division", division);

console.log("modulo (vidas restantes mod 5)");
let modulo = xpHoy % 5;
console.log("Resultado del modulo", modulo);

console.log("potencia (bonus elevado al nivel)");
let nivel = 2;
let exponente = nivel ** 3;
console.log("Resultado del exponente", exponente);

console.log("incremento (subir de nivel)");
xpHoy++;
console.log("Resultado del incremento", xpHoy);

console.log("decremento (perder una vida)");
xpHoy--;
console.log("Resultado del decremento", xpHoy);

console.log("comparacion (igualdades y orden)");
const nivelStr = "5";
const nivelNum = 5;
console.log("igualdad debil ==", nivelStr == nivelNum);
console.log("igualdad estricta ===", nivelStr === nivelNum);
console.log("diferente debil !=", nivelStr != nivelNum);
console.log("diferente estricto !==", nivelStr !== nivelNum);
console.log("mayor que >", nivelNum > 3);
console.log("menor que <", nivelNum < 3);
console.log("mayor o igual que >=", nivelNum >= 5);
console.log("menor o igual que <=", nivelNum <= 5);

console.log("operadores logicos (reglas de progreso)");
const racha = 7;
const minimoRacha = 5;
const limiteXP = 50;
const xpTotalHoy = suma;
console.log("y And &&", racha >= minimoRacha && xpTotalHoy >= limiteXP);
console.log("o Or ||", racha >= minimoRacha || xpTotalHoy >= limiteXP);
console.log("negacion Not !", !(nivelNum === 5));