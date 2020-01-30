function bd(nombre) {
  let users = [
    {
      name: "Cristian",
      age: 25
    },
    {
      name: "Arnaud",
      age: 30
    },
    {
      name: "Jhon",
      age: 31
    }
  ];

  let user = users.filter(function(element) {
    return element.name === nombre;
  });

  setTimeout(() => {
    return console.log(user);
  }, 5000);
}

// ASYNC AWAIT ECMAScript 7

async function Superior(cualquierFuncion, param) {
  let result = 1;
  try {
    result = await cualquierFuncion(param);
  } catch (error) {
    console.log(error);
  }
  return result;
}


// PROMESA
function Superior(cualquierFuncion, param) {
  return new Promise(function(resolve, reject) {
    let result = cualquierFuncion(param);
    if (result === 0) {
      reject("No se encontro el usuario");
    }
    resolve(result);
  });
}

// THEN CATCH ECMAScript 6

Superior(bd, "Cristian")
  .then(function(element) {
    return element;
  })
  .catch(function(err) {
    console.log(err);
  });

console.log(1);
Superior(bd, "Cristian");
console.log(2);
