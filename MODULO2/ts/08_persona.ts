class Persona {
  constructor(public id: number, public nombre: string, public edad?: number) {}
}

const p1 = new Persona(3, 'María');
const p2 = new Persona(4, 'Pedro', 33);

console.log(p1);
console.log(p1.id);
console.log(p1.nombre);
console.log(p1.edad);

console.log(p2);
console.log(p2.id);
console.log(p2.nombre);
console.log(p2.edad);