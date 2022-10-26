export function leerData(array) {
  if (localStorage.getItem("anuncios")) {
    JSON.parse(localStorage.getItem("anuncios")).forEach((element) => {
      array.push(element);
    });
    return true;
  }
  return false;
}

export function agregarUnRegistro(registro, array) {
  array.push(registro);
  localStorage.setItem("anuncios", JSON.stringify(array));
}

export function agregarRegistros(registros) {
  localStorage.setItem("anuncios", JSON.stringify(registros));
  return true;
}
