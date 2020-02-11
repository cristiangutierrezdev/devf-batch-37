// var mensaje = "Hola mundo"; // --> String
// var edad = 9; // --> Number
// var estaVivo = false; // --> Boolean solo recibe true o false
// var cualquierCosa = null; // --> No existe
// var cualquierCosa2 = undefined; // --> Existe pero no tiene valor asignado

// var buttom = document.getElementById("btn");

// mensaje = "Hello world";

// if (edad < 10) {
//   console.log("Es MENOR a 10");
// } else if (edad > 20) {
//   console.log("Es mayor a 20");
// } else {
//   console.log(" es mayor a 10 pero menor que 20");
// }

// function suma(numeroA, numeroB) {
//   var resultado = numeroA + numeroB;
//   return resultado;
// }

// function compararPrecios(precio1, precio2) {
//   if (precio1 <= precio2) {
//     return "Son iguales";
//   } else {
//     return "Son distintos";
//   }
// }

// console.log(compararPrecios(1200, 1200))

// // buttom.addEventListener('click', function (params) {
// //   var titulo = document.getElementById("titulo")
// //   var rojo = document.getElementById("rojo")

// //   rojo.style.backgroundColor = "red"

// //   titulo.innerText = mensaje
// })

// var ayudanteDeSanta = {
//   color: "brown",
//   height: "small",
//   legs: 4,
//   friends: ["Bola de nieve", "Bart", "Lisa"],
//   ladrar() {
//     return "guau guau";
//   },
//   correr: function() {
//     return "run run";
//   }
// };

// console.log(ayudanteDeSanta.friends)
// console.log(ayudanteDeSanta.ladrar())
// console.log(ayudanteDeSanta.friends[2])

// ayudanteDeSanta.edad = 5;
// // console.log(ayudanteDeSanta)

// ayudanteDeSanta.comer = function() {
//   return "am am";
// };
// console.log(ayudanteDeSanta.comer())

// var users = [
//   {
//     name: "Cristian",
//     age: 25,
//     isActive: true
//   },
//   {
//     name: "Santiago",
//     age: 20,
//     isActive: true
//   },
//   {
//     name: "Deiby",
//     age: 24,
//     isActive: true
//   },
//   {
//     name: "Arnaud",
//     age: 30,
//     isActive: true
//   },
//   {
//     name: "Jhon",
//     age: 29,
//     isActive: false
//   }
// ];

// for (i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// var carros = [
//   {
//     marca: "Toyota",
//     color: "gris"
//   },
//   {
//     marca: "Renault",
//     color: "Naranja"
//   },
//   {
//     marca: "Porsche",
//     color: "Rosado"
//   }
// ]

// carros.push({marca: "Mazda", color: "Negro"})

// for (i=0; i<carros.length; i++){
//   console.log(carros[i].color)
// }

var cajaMorada = document.getElementById("morado");
var button = document.getElementById("btn");

cajaMorada.movimiento = function() {
  this.style.backgroundColor = "violet";
  this.style.right = "80%";
};

button.addEventListener("click", function() {

  var posicion = getComputedStyle(cajaMorada).right

  if(posicion === "0px"){
    cajaMorada.movimiento()
  } else {
    cajaMorada.style.right = "0px"
  }

});
