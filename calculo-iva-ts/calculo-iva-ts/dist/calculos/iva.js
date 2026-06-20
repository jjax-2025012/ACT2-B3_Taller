"use strict";
// Módulo de cálculo de IVA.
// Contiene la lógica encargada de determinar el monto de IVA
// a partir de un subtotal y una tasa de impuesto.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TASA_IVA_DEFAULT = void 0;
exports.calcularIVA = calcularIVA;
exports.TASA_IVA_DEFAULT = 0.12;
// Calcula el monto de IVA a pagar sobre un subtotal dado.
// subtotal: monto base de la compra, sin impuestos. Debe ser >= 0.
// tasaIVA: tasa de impuesto a aplicar, expresada como decimal.
//          Si no se proporciona, se utiliza TASA_IVA_DEFAULT.
// devuelve: monto de IVA correspondiente (subtotal * tasaIVA).
// lanza error si el subtotal o la tasa de IVA son negativos.
function calcularIVA(subtotal, tasaIVA = exports.TASA_IVA_DEFAULT) {
    if (subtotal < 0) {
        throw new Error("El subtotal no puede ser negativo.");
    }
    if (tasaIVA < 0) {
        throw new Error("La tasa de IVA no puede ser negativa.");
    }
    return subtotal * tasaIVA;
}
