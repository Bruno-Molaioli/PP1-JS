const API_URL = "http://127.0.0.1:8000/autos/" //  URL de autos

/* 1° GET Generico*/
async function obtenerAutos() {
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();

    // Muestra los datos tal cual vienen de Python
    document.getElementById("pantalla").textContent = JSON.stringify(datos, null, 2);
  } catch (error) {
    console.error("Error al obtener autos:", error);
  }
}

/* 2°  POST - CREAR AUTO NUEVO */
async function crearAuto(nuevoAuto) {
  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoAuto)
    });

    const datos = await respuesta.json();
    console.log("respuesta POST: ", datos);

    obtenerAutos(); // Recarga la lista en pantalla
  } catch (error) {
    console.error("Error al crear auto:", error);
  }
}

const formularioCrear = document.getElementById("form-crear");
formularioCrear.addEventListener("submit", (e) => {
  e.preventDefault();

  const datosFormulario = {
    id: parseInt(document.getElementById("id").value),
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    anio: parseInt(document.getElementById("anio").value),
    precio: parseFloat(document.getElementById("precio").value)
  };
  crearAuto(datosFormulario);
});

/* 3° PUT - EDITAR AUTO EXISTENTE */
async function editarAuto(nuevoAuto, id) {
  try {
    const respuesta = await fetch(`${API_URL}${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoAuto)
    });

    const datos = await respuesta.json();
    console.log("respuesta PUT: ", datos);

    obtenerAutos();
  } catch (error) {
    console.error("Error al editar auto:", error);
  }
}

const formularioEditar = document.getElementById("form-editar");
formularioEditar.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = parseInt(document.getElementById("edit-id").value);

  const datosFormulario = {
    marca: document.getElementById("edit-marca").value,
    modelo: document.getElementById("edit-modelo").value,
    anio: parseInt(document.getElementById("edit-anio").value),
    precio: parseFloat(document.getElementById("edit-precio").value)
  };

  editarAuto(datosFormulario, id);
});

/* 4° DELETE - BORRAR AUTO */
async function borrarAuto(id) {
  try {
    const respuesta = await fetch(`${API_URL}${id}/`, {
      method: "DELETE"
    });

    const datos = await respuesta.json();
    console.log("respuesta DELETE: ", datos);

    obtenerAutos();
  } catch (error) {
    console.error("Error al borrar auto:", error);
  }
}

function borrarDesdeBusqueda() {
  const id = document.getElementById("buscar-id").value;
  if (!id) { alert("Por favor ingresa un ID para borrar"); return; }
  
  if (confirm(`¿Estás seguro de que quieres borrar el auto con ID ${id}?`)) {
    borrarAuto(id);
  }
}


/* 5° GET POR ID - BUSCAR AUTO POR ID */
async function buscarPorId() {
  const id = document.getElementById("buscar-id").value;
  if (!id) { alert("Por favor ingresa un ID"); return; }

  try {
    const respuesta = await fetch(`${API_URL}${id}/`);
    const auto = await respuesta.json();

    // Rellena el formulario de edición con los datos que trajo de Python
    document.getElementById("edit-id").value = auto.id;
    document.getElementById("edit-marca").value = auto.marca;
    document.getElementById("edit-modelo").value = auto.modelo;
    document.getElementById("edit-anio").value = auto.anio;
    document.getElementById("edit-precio").value = auto.precio;

  } catch (error) {
    console.error("Error al buscar auto por ID:", error);
  }
}

/* SECCION FAVORITOSS*/

// 1. Helper para leer lo que hay guardado en la memoria del navegador
function getFavorites() {
  const favs = localStorage.getItem('autos_favs');
  return favs ? JSON.parse(favs) : [];
}

// 2. Helper para agregar o quitar de la lista 
function toggleFavorite(autoId) {
  let favs = getFavorites();
  const idStr = String(autoId);

  if (favs.includes(idStr)) {
    favs = favs.filter(id => id !== idStr); // Si ya estaba, lo saca
    alert(`ID ${idStr} quitado de favoritos.`);
  } else {
    favs.push(idStr); // Si no estaba, lo agrega
    alert(`ID ${idStr} guardado en favoritos.`);
  }

  localStorage.setItem('autos_favs', JSON.stringify(favs));
  mostrarFavoritosEnPantalla(); // Actualiza la cajita roja en el HTML
}

// 3. Funcion intermedia limpia para el boton 
function presionarBotonFavorito() {
  const idActual = document.getElementById('buscar-id').value;
  if (!idActual) {
    alert("Por favor, ingresá o buscá un ID de auto primero para agregarlo a favoritos.");
    return;
  }
  toggleFavorite(idActual);
}

// 4. Funcion para pintar los IDs guardados en la nueva pantalla
function mostrarFavoritosEnPantalla() {
  const listaFavs = getFavorites();
  const contenedorFavs = document.getElementById("pantalla-favoritos");
  
  if (contenedorFavs) {
    if (listaFavs.length === 0) {
      contenedorFavs.textContent = "No tenés ningún auto guardado en favoritos.";
    } else {
      contenedorFavs.textContent = JSON.stringify(listaFavs, null, 2);
    }
  }
}

// 5. Ejecución inicial: Carga los favoritos apenas se abre la pagina
mostrarFavoritosEnPantalla(); 