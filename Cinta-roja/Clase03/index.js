const Pelicula = require("./Pelicula");
const Documental = require("./Pelicula");

class Cine {
  constructor(sala) {
    this.sala = sala;
  }
  play(largometraje) {
    return `se esta reproduciendo ${largometraje.getInfo()} en la sala ${
      this.sala
    }`;
  }
}

let miPelicula = new Pelicula(
  "The big fish",
  120,
  "Jose Alberto",
  "Drama",
  "Jack el protagonista"
);
let miDocumental= new Documental(
  "Frontera Verde",
  180,
  "Jhon",
  "Tribus",
  "Indigenas"
);

let miCine = new Cine(5)

console.log(miCine.play(miPelicula))
console.log(miCine.play(miDocumental))

