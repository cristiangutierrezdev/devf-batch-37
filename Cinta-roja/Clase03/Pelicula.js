const Largometraje = require("./Largometraje");

class Pelicula extends Largometraje {
  constructor(titulo, duracion, director, genero, personajes) {
    super(titulo, duracion, director);
    this.genero = genero;
    this.personajes = personajes;
  }
}

module.exports = Pelicula;
