"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprimirUsuario = imprimirUsuario;
function imprimirUsuario(u) {
    console.log(u);
    console.log(u.id);
    console.log(u.nombre);
    console.log(u.correo);
}
var usuario1 = {
    id: 12,
    nombre: 'Carlos Andrés Zambrano',
};
var usuario2 = {
    id: 13,
    nombre: 'Pablo Escobar',
    correo: 'elpatron@delmal.com',
};
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);
