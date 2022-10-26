import { Anuncio, Anuncio_Auto } from "./anuncio.js";
import { crearTabla } from "./tableCreator.js";
import {
    validarCampoVacio,
    agregarErrorAControles,
    validarForm,
    validarNumero,
    validarKms,
    validarPuertas,
    validarPotencia,
} from "./validaciones.js";
import {
    agregarRegistros,
    agregarUnRegistro,
    leerData,
} from "./localStorage.js";

const arrayAnuncios = [];
leerData(arrayAnuncios);
const $form = document.forms[0];
const $tabla = crearTabla(arrayAnuncios);
const $divContenedorTabla = document.querySelector(".container_tabla");
$divContenedorTabla.appendChild($tabla);
let idAnuncio;

const {
    txtTitulo,
    txtDescripcion,
    txtPrecio,
    txtPuertas,
    txtKms,
    txtPotencia,
    radioTransaccion,
} = $form;

// BOTON AGREGAR
const $btnGuardar = document.querySelector("#btnGuardar");
$btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();

    if (!validarForm($form)) {
        agregarErrorAControles($form);
    } else {
        const $spinner = document.getElementById("spinner");
        $spinner.style.display = "block";
        setTimeout(() => {
            agregarUnRegistro(nuevoAnuncio(), arrayAnuncios);
            actualizarTabla();
            $spinner.style.display = "none";
        }, 3000);
    }
});

function nuevoAnuncio() {
    return new Anuncio_Auto(
        Date.now(),
        txtTitulo.value,
        radioTransaccion.value,
        txtDescripcion.value,
        txtPrecio.value,
        txtPuertas.value,
        txtKms.value,
        txtPotencia.value
    );
}

function actualizarTabla() {
    while ($divContenedorTabla.hasChildNodes()) {
        $divContenedorTabla.removeChild($divContenedorTabla.firstChild);
    }
    $divContenedorTabla.appendChild(crearTabla(arrayAnuncios));
    limparForm();
}

$divContenedorTabla.addEventListener("click", (e) => {
    const emisor = e.target;

    if (emisor.matches("tbody tr td")) {
        // console.log(emisor.parentElement.dataset.id);
        let id = emisor.parentElement.dataset.id;

        const anuncio = arrayAnuncios.find((element) => element.id == id);
        // console.log(anuncio);
        cargarTabla(anuncio);
        idAnuncio = anuncio.id;
    }
});

function cargarTabla(anuncio) {
    txtTitulo.value = anuncio.titulo;
    txtDescripcion.value = anuncio.descripcion;
    radioTransaccion.value = anuncio.transaccion;
    txtPrecio.value = anuncio.precio;
    txtPuertas.value = anuncio.puertas;
    txtKms.value = anuncio.km;
    txtPotencia.value = anuncio.potencia;
}

// MODIFICAR
const $btnModificar = document.querySelector("#btnModificar");
$btnModificar.addEventListener("click", (e) => {
    e.preventDefault();

    const anuncio = arrayAnuncios.find((element) => element.id == idAnuncio);
    console.log(anuncio);

    anuncio.titulo = txtTitulo.value;
    anuncio.descripcion = txtDescripcion.value;
    anuncio.transaccion = radioTransaccion.value;
    anuncio.precio = txtPrecio.value;
    anuncio.puertas = txtPuertas.value;
    anuncio.km = txtKms.value;
    anuncio.potencia = txtPotencia.value;

    agregarRegistros(arrayAnuncios);
    actualizarTabla();
});

// CANCELAR
const $btnCancelar = document.querySelector("#btnCancelar");
$btnCancelar.addEventListener("click", (e) => {
    e.preventDefault();

    limparForm();
});

function limparForm() {
    document
        .querySelectorAll("[name=transaccion]")
        .forEach((e) => (e.checked = false));
    txtTitulo.value = "";
    txtDescripcion.value = "";
    txtPrecio.value = "";
    txtPuertas.value = "";
    txtKms.value = "";
    txtPotencia.value = "";
    idAnuncio = -1;
}

// ELIMINAR
const $btnEliminar = document.querySelector("#btnEliminar");
$btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    if (idAnuncio > -1) {
        arrayAnuncios.forEach((e) => {
            if (e.id == idAnuncio) {
                let index = arrayAnuncios.indexOf(e);
                console.log(index);
                arrayAnuncios.splice(index, 1);
            }
        });

        agregarRegistros(arrayAnuncios);
        actualizarTabla();
    }
});

//VALIDACIONES
const controles = $form.elements;
for (let i = 0; i < controles.length; i++) {
    const control = controles.item(i);
    if (control.matches("input")) {
        if (control.matches("[type=text]")) {
            control.addEventListener("blur", validarCampoVacio);
        } else if (control.matches("[type=number]")) {
            if (control.id == "txtKms")
                control.addEventListener("blur", validarKms);
            else if (control.id == "txtPuertas")
                control.addEventListener("blur", validarPuertas);
            else if (control.id == "txtPotencia")
                control.addEventListener("blur", validarPotencia);
        }
    }
}
