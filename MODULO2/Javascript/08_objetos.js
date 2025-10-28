console.log("Objetos");

let persona = {
    nombre:"Ana",
    edad:30,
    ciudad:"Quito"
}
console.log(persona);
//acceder a una sola clave
console.log(persona.nombre);
console.log(persona.ciudad);
//otra manera de acceder a una clave
console.log(persona["edad"]);

console.log("Modificacion del objeto");
persona.nombre="Maria"
console.log(persona);
// añadir una clave
persona.direccion="Av. Occidental";
console.log(persona);
//eliminar clave al objeto
console.log("Eliminar clave al objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un Objeto");
for (let clave in persona){
    console.log(clave);
}
//otra manera de recorrer las claves
//Object keys solo muestra las claves
console.log("Mostrar claves con Object Keys");
console.log(Object.keys(persona));
//Object values solo muestra los valores
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));

console.log("Objetos Anidados");
let estudiante ={
    nombre:"Pedro",
    apellido:"Perez",
    contacto:{
        correo:"pedro@gmail.com",
        telefono: "02213472",
        celular: "0992577664"
    },
    materias: [
        {
            nombre:"Programacion III",
            calificacion:8
        },
        {
            nombre:"Base de datos II",
            calificacion: 9
        },
    ]
};
console.log("Estudiante ", estudiante);