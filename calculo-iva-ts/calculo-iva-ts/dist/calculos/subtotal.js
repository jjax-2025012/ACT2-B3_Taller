"use strict";
// Módulo de cálculo de subtotal.
// Contiene la lógica encargada de determinar el subtotal de una compra
// a partir de una lista de productos (precio y cantidad por producto).
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSubtotal = calcularSubtotal;
// Calcula el subtotal de una compra.
// El subtotal se obtiene sumando, para cada producto, el resultado de
// multiplicar su precio unitario por la cantidad comprada.
// Este valor NO incluye impuestos (IVA); representa el monto base.
// productos: arreglo de productos, cada uno con su precio unitario y cantidad.
// devuelve: subtotal de la compra.
// lanza error si algún producto tiene precio o cantidad negativos.
function calcularSubtotal(productos) {
    return productos.reduce((acumulado, producto) => {
        if (producto.precio < 0 || producto.cantidad < 0) {
            throw new Error(`El producto "${producto.nombre}" tiene precio o cantidad negativos.`);
        }
        return acumulado + producto.precio * producto.cantidad;
    }, 0);
}
