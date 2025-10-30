

class Figura {
  constructor() {
    if (new.target === Figura) {
      throw new Error('Figura es abstracta y no se puede instanciar directamente');
    }
  }

  area() {
    throw new Error('Método abstracto area() debe implementarse en la subclase');
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio * this.radio;
  }
}


try {
  
} catch (e) {
  console.log('OK: No se puede instanciar Figura ->', e.message);
}

const r = new Rectangulo(4, 3);
console.log('Área rectángulo 4x3:', r.area());

const c = new Circulo(5);
console.log('Área círculo r=5:', c.area().toFixed(2));