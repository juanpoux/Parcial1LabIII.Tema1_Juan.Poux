import { Anuncio, Anuncio_Auto } from "./anuncio.js";
import { crearTarjeta } from "./cardCreator.js";
import {
    agregarRegistros,
    agregarUnRegistro,
    leerData,
} from "./localStorage.js";

const arrayAnuncios = [];
leerData(arrayAnuncios);

const $divTarjetas = document.querySelector(".div_tarjetas");
arrayAnuncios.forEach((element) => {
    console.log(element);
    const $nuevaTarjeta = crearTarjeta(element);
    $divTarjetas.appendChild($nuevaTarjeta);
});


// $cards.replaceChild($nuevaTarjeta, $cards.firstElementChild);
// $cards.insertBefore($nuevaTarjeta, $cards.firstElementChild);
// $cards.removeChild($cards.firstElementChild);

// $cards.insertAdjacentElement("afterbegin",$nuevaTarjeta);
// $cards.insertAdjacentElement("beforebegin",$nuevaTarjeta);
// $cards.insertAdjacentElement("beforeend", $nuevaTarjeta);
// $cards.insertAdjacentElement("afterend",$nuevaTarjeta);

// $cards.prepend($nuevaTarjeta);
// $cards.before($nuevaTarjeta);
// $cards.after($nuevaTarjeta);

// $nuevaTarjeta.querySelector("figcaption").append("Algo");
// $nuevaTarjeta.querySelector("figcaption").prepend("Algo");
