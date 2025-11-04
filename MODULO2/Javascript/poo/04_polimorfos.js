

class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando.`);
  }

  calcularVariaciones() {
    console.log(`${this.nombre} está calculando variaciones generales.`);
  }
}

class Programador extends Empleado {
  constructor(nombre, salario, lenguaje = 'JavaScript') {
    super(nombre, salario);
    this.lenguaje = lenguaje;
  }

  trabajar() {
    console.log(`${this.nombre} programa en ${this.lenguaje}.`);
  }

  calcularVariaciones() {
    console.log(`${this.nombre} calcula variaciones de versiones y diffs.`);
  }
}

class Disenador extends Empleado {
  trabajar() {
    console.log(`${this.nombre} diseña interfaces y prototipos.`);
  }

  calcularVariaciones() {
    console.log(`${this.nombre} revisa variaciones de estilos y layouts.`);
  }
}

class Gerente extends Empleado {
  trabajar() {
    console.log(`${this.nombre} coordina al equipo y planifica tareas.`);
  }

  calcularVariaciones() {
    console.log(`${this.nombre} analiza variaciones de costos y tiempos.`);
  }
}

const equipo = [
  new Programador('Ana', 1200, 'JS'),
  new Disenador('Luis', 1100),
  new Gerente('María', 2000),
];

equipo.forEach((empleado) => {
  empleado.trabajar();
  empleado.calcularVariaciones();
});
