// export function Anuncio(id, titulo, transaccion, descripcion, precio) {
//     this.id = id;
//     this.titulo = titulo;
//     this.transaccion = transaccion;
//     this.descripcion = descripcion;
//     this.precio = precio;
// }

// export function Anuncio_Auto(
//     id,
//     titulo,
//     transaccion,
//     descripcion,
//     precio,
//     puertas,
//     km,
//     potencia
// ) {
//     Anuncio.call(this, puertas, km, potencia);
//     this.puertas = puertas;
//     this.km = km;
//     this.potencia = potencia;
// }

export class Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

export class Anuncio_Auto extends Anuncio {
    constructor(
        id,
        titulo,
        transaccion,
        descripcion,
        precio,
        puertas,
        km,
        potencia
    ) {
        super(id, titulo, transaccion, descripcion, precio);
        this.puertas = puertas;
        this.km = km;
        this.potencia = potencia;
    }
}
