const axios = require("axios");
const request = require("request");

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     request.get(
//       "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",
//       (err, result) => {
//         if (result.statusCode !== 200) {
//           reject(err);
//         } else {
//           resolve(JSON.parse(result.body));
//         }
//       }
//     );
//   });
// }

// getUsers()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// axios
//   .get("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/")
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

function createUser(params) {
  return axios
    .post("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/", params)
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

function deleteUser(id) {
  return axios
    .delete(`http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`)
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

const newUser = {
  name: "Cristian",
  last_name: "Gutierrez",
  nacionalidad: "MX",
  biography: "Cualquier cosa",
  age: 25,
  gender: "M"
};

createUser(newUser)
  .then(({ data }) => {
    console.log(data);
    return deleteUser(data.id);
  })
  .then(response => {
    return console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

