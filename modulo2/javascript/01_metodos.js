console.log('Hola desde un archivo externo ');

// Duolingo — Métodos de arrays y strings aplicados a lecciones
const lecciones = [
  { id: 1, nombre: 'Saludos', xp: 10, completada: true },
  { id: 2, nombre: 'Presentaciones', xp: 10, completada: false },
  { id: 3, nombre: 'Comida', xp: 15, completada: false }
];

console.log('Total de lecciones:', lecciones.length);

// map: obtener nombres de lecciones
const nombres = lecciones.map(l => l.nombre);
console.log('Nombres de lecciones:', nombres);

// filter: lecciones no completadas
const pendientes = lecciones.filter(l => !l.completada);
console.log('Lecciones pendientes:', pendientes);

// reduce: sumar XP total
const xpTotal = lecciones.reduce((acc, l) => acc + l.xp, 0);
console.log('XP total del curso:', xpTotal);

// find: buscar una lección específica
const buscada = lecciones.find(l => l.nombre.includes('Sal'));
console.log('Lección buscada:', buscada);

// strings: normalizar nombre de idioma
const idioma = '  Inglés  ';
console.log('Idioma original:', idioma);
console.log('Idioma normalizado:', idioma.trim().toLowerCase());