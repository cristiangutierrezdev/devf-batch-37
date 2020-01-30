const Largometraje = require("./Largometraje");

class Documental extends Largometraje {
  constructor(titulo, duracion, director, tema) {
    super(titulo, duracion, director);
    this.tema= tema;
  }
}

module.exports = Documental;
