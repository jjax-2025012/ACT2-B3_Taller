"use strict";
// Módulo de cálculo de total.
// Contiene la lógica encargada de combinar el subtotal y el IVA
// para obtener el monto final que el cliente debe pagar.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotal = calcularTotal;
// Calcula el total final de una compra.
// subtotal: monto base de la compra, sin impuestos. Debe ser >= 0.
// iva: monto de IVA ya calculado. Debe ser >= 0.
// devuelve: total final a pagar (subtotal + iva).
// lanza error si el subtotal o el IVA son negativos.
function calcularTotal(subtotal, iva) {
    if (subtotal < 0) {
        throw new Error("El subtotal no puede ser negativo.");
    }
    if (iva < 0) {
        throw new Error("El IVA no puede ser negativo.");
    }
    return subtotal + iva;
}
