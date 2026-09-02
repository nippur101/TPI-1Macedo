const ListaLibros = (() => {
	const contenedor = document.getElementById("listaLibros");

	function crearTarjeta(libro) {
		return `
			<article class="libro">
				<h3>${libro.titulo}</h3>
				<p><strong>Autor:</strong> ${libro.autor}</p>
				<p><strong>Género:</strong> ${libro.genero}</p>
				<p><strong>Año:</strong> ${libro.año}</p>
			</article>
		`;
	}

	function mostrar(librosAMostrar) {
		contenedor.innerHTML = librosAMostrar.map(crearTarjeta).join("");
	}

	return {
		mostrar
	};
})();

export const mostrarLibros = ListaLibros.mostrar;
