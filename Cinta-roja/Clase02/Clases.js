class Carro {
  constructor(llantas, motor,marca,color){
    this.llantas = llantas
    this.motor = motor
    this.marca = marca
    this.color = color
  }

  andar(){
    return "Run run"
  }

  pitar(){
    return "Pi Pi"
  }

}

let carroBMW = new Carro(4,2000,"BMW","Gris")
let carroNissan = new Carro(4,1400,"Nissan","Rojo")

console.log(carroBMW)
console.log(carroNissan)