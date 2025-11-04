
var edad = 30;
var nombre = 'Maria';
var archivo = true;
var valor = 6;


if (edad > 18) {
    console.log('Es mayor de edad');
}
else {
    console.log('Es menor de edad');
}


var frutas = ['manzana', 'banana', 'cereza'];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


var estado;
(function (estado) {
    estado[estado["pendiente"] = 0] = "pendiente";
    estado[estado["enviado"] = 1] = "enviado";
    estado[estado["entregado"] = 2] = "entregado";
})(estado || (estado = {}));

console.log(estado);
console.log(estado.entregado);