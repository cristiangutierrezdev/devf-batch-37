let ayudanteDeSanta = {
  name: "Ayudante de Santa",
  ojos: 2,
  patas: 4,
  color: "Cafe",
  Altura: "70cm",
  
  correr: function() {
    return "Run run";
  },
  comer() {
    return "estoy comiendo";
  }
};

ayudanteDeSanta.largo = "50cm";

ayudanteDeSanta.ladrar = function() {
  return "Guau guau";
};

console.log(ayudanteDeSanta.name);
