export interface Usuario {
  id: number;
  nombre: string;
  correo?: string;
}

export function imprimirUsuario(u: Usuario): void {
  console.log(u);
  console.log(u.id);
  console.log(u.nombre);
  console.log(u.correo);
}

const usuario1: Usuario = {
  id: 12,
  nombre: 'Carlos Andrés Zambrano',
};

const usuario2: Usuario = {
  id: 13,
  nombre: 'Pablo Escobar',
  correo: 'elpatron@delmal.com',
};

imprimirUsuario(usuario1);
imprimirUsuario(usuario2);