import { libros } from "./data.js";
import { mostrarLibros } from "./render.js";

const filtroGenero = document.getElementById("filtroGenero");

function filtrarLibros() {
	const generoSeleccionado = filtroGenero.value;
	const librosFiltrados = generoSeleccionado === "Todos"
		? libros
		: libros.filter((libro) => libro.genero === generoSeleccionado);

	mostrarLibros(librosFiltrados);
}

filtroGenero.addEventListener("change", filtrarLibros);
filtrarLibros();
