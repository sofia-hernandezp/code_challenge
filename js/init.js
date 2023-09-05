URL = 'https://jsonplaceholder.typicode.com/users'

const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const fecha = document.getElementById("date");
const boton = document.getElementById("btn");

function sendInformation (api) {
    
    let infoFormulario = {
        nombre: nombre.value,
        apellido: apellido.value,
        fechaNacimiento: fecha.value,
       };
    
       const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoFormulario),
        };

        fetch(api, options)
        .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       console.log(data.status)
       return data.json();
      }).then(infoFormulario => {
      console.log(infoFormulario);
      }).catch(e => {
      console.log(e);
      });
};

boton.addEventListener("click", (e) => {

    e.preventDefault();
    sendInformation(URL) ;

});

