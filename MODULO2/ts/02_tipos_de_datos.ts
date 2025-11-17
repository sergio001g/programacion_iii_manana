let edad: number = 30
let nombre: string = 'Maria'
let archivo: boolean = true
let valor: any = 6;


if(edad > 18) {
    console.log('Es mayor de edad')
} else {
    console.log('Es menor de edad')
}
 

let frutas: string[] = ['manzana', 'banana', 'cereza']
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}


enum estado {
    pendiente,
    enviado,
    entregado
}

console.log(estado);
console.log(estado.entregado)