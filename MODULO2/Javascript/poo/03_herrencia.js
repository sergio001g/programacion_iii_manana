class animales {
    constructor(nombre) {
        this.nombre = nombre
    }
}


class perro extends animales {
    constructor(pedro) {
        super(pedro)
        this.edad = 17
    }
}

class gato extends animales {
    constructor(lizi) {
        super(lizi)
        this.edad = 17
    }
    hacerRuido() {
        console.log(this.nombre + ' está haciendo ruido')
    }
}
const migato = new gato('lizi')
const migato2 = new gato('lizi2')
migato2.hacerRuido()
migato.hacerRuido()
