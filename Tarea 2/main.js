// =========================================
// DATOS DEL USUARIO
// =========================================

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let contrasena = prompt("Ingresa tu contrasena:");

// =========================================
// VALIDACIONES
// =========================================

if (nombre === "" || nombre === null) {
    console.error("Error: El nombre no puede estar vacio.");
}

else if (isNaN(edad) || edad < 18) {
    console.warn("Acceso denegado: Debes ser mayor de 18 anios.");
}

else if (!contrasena || contrasena.length < 6) {
    console.warn("Contrasena invalida: Debe tener al menos 6 caracteres.");
}

else {

    // =========================================
    // ACCESO CORRECTO
    // =========================================

    console.log("-------------------------------");
    console.log("¡BIENVENIDO AL SISTEMA!");
    console.log(`Usuario: ${nombre}`);
    console.log(`Edad actual: ${edad} anios`);
    console.log("-------------------------------");

    edad = edad + 10;

    console.log(`Resumen de perfil: El usuario ${nombre} tendra ${edad} anios dentro de una decada.`);

}