export function crearTarjeta(anuncio) {
    const newCard = document.createElement("figure");

    const div_h4 = document.createElement("div");
    div_h4.classList.add("div_contenidoTarjeta");

    const div_precio = document.createElement("div");
    div_precio.classList.add("div_contenidoTarjeta");

    const div_titulo = document.createElement("div");
    div_titulo.classList.add("div_contenidoTarjeta");

    const div_descripcion = document.createElement("div");
    div_descripcion.classList.add("div_contenidoTarjeta");

    const titulo = document.createElement("h1");
    titulo.textContent = anuncio.titulo;

    const descripcion = document.createElement("h3");
    descripcion.textContent = anuncio.descripcion;

    const precio = document.createElement("h2");
    precio.textContent = "Precio: $" + anuncio.precio;

    const puertas = document.createElement("h4");
    puertas.textContent = "Puertas: " + anuncio.puertas;
    const km = document.createElement("h4");
    km.textContent = "Kilometraje: " + anuncio.km;
    const potencia = document.createElement("h4");
    potencia.textContent = "Potencia: " + anuncio.potencia;

    div_descripcion.appendChild(descripcion);
    div_titulo.appendChild(titulo);
    div_precio.appendChild(precio);
    div_h4.appendChild(puertas);
    div_h4.appendChild(km);
    div_h4.appendChild(potencia);

    newCard.appendChild(div_titulo);
    newCard.appendChild(div_descripcion);

    newCard.appendChild(div_precio);
    newCard.appendChild(div_h4);

    newCard.classList.add("card");
    return newCard;
}
