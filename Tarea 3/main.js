// =========================================
// LISTA DE USUARIOS
// =========================================

const usuarios = [
  {id:1, first_name:"Harmony", last_name:"Twohig", email:"htwohig0@businesswire.com", gender:"Female", ip_address:"188.185.115.201"},
  {id:2, first_name:"Juan", last_name:"Perez", email:"juan@mail.com", gender:"Male", ip_address:"123.123.123.123"},
  {id:3, first_name:"Ana", last_name:"Gomez", email:"ana@mail.com", gender:"Female", ip_address:"111.111.111.111"},
  {id:4, first_name:"Luis", last_name:"Martinez", email:"luis@mail.com", gender:"Male", ip_address:"222.222.222.222"},
  {id:5, first_name:"Sofia", last_name:"Lopez", email:"sofia@mail.com", gender:"Female", ip_address:"333.333.333.333"}
];


// =========================================
// 1 - BUSCAR USUARIO POR ID
// =========================================

let idBuscado = parseInt(prompt("Ingresa el ID del usuario"));


// =========================================
// VARIABLE PARA GUARDAR EL RESULTADO
// =========================================

let usuarioEncontrado = null;


// =========================================
// RECORRER ARRAY Y BUSCAR USUARIO
// =========================================

for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].id === idBuscado) {

        usuarioEncontrado = usuarios[i];
        break;

    }

}


// =========================================
// MOSTRAR RESULTADO DE LA BUSQUEDA
// =========================================

if (usuarioEncontrado) {

    console.log("----------------------------");
    console.log("USUARIO ENCONTRADO");
    console.log(usuarioEncontrado);
    console.log("----------------------------");

} else {

    alert("Usuario no encontrado");

}


// =========================================
// 2 - CONTAR USUARIOS POR GENERO
// =========================================

const conteoGeneros = usuarios.reduce((acc, usuario) => {

    acc[usuario.gender] = (acc[usuario.gender] || 0) + 1;

    return acc;

}, {});


// =========================================
// MOSTRAR CANTIDAD POR GENERO
// =========================================

console.log("----------------------------");
console.log("CANTIDAD POR GENERO");
console.log(conteoGeneros);
console.log("----------------------------");