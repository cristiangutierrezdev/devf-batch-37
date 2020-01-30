class Largometraje {
  constructor(titulo, duracion, director) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.director = director;
  }

  getInfo() {
    let info = `El titulo es: ${this.titulo}
    La duracion es: ${this.duracion}
    El director es: ${this.director}`;
    return info;
  }
}

module.exports = Largometraje