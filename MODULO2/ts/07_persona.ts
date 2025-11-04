interface Persona {
  id: number;
  nombre: string;
  edad?: number;
}

const persona1: Persona = { id: 1, nombre: 'Ana' };
const persona2: Persona = { id: 2, nombre: 'Luis', edad: 28 };

console.log(persona1);
console.log(persona1.id);
console.log(persona1.nombre);
console.log(persona1.edad);

console.log(persona2);
console.log(persona2.id);
console.log(persona2.nombre);
console.log(persona2.edad);