

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  estudiar() {
    return `${this.nombre} está estudiando ${this.curso}.`;
  }
}


class CuentaBancaria {
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  depositar(monto) {
    if (monto <= 0) throw new Error('El monto debe ser positivo');
    this.#saldo += monto;
  }

  retirar(monto) {
    if (monto <= 0) throw new Error('El monto debe ser positivo');
    if (monto > this.#saldo) throw new Error('Fondos insuficientes');
    this.#saldo -= monto;
  }

  verSaldo() {
    return this.#saldo;
  }
}


const p = new Persona('Ana', 28);
console.log(p.saludar());

const e = new Estudiante('Luis', 20, 'Programación');
console.log(e.saludar());
console.log(e.estudiar());

const c = new CuentaBancaria('Ana');
c.depositar(1000);
c.retirar(250);
console.log(`Saldo de ${c.titular}:`, c.verSaldo());