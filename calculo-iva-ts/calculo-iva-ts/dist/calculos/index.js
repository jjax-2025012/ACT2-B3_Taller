"use strict";
/**
 * Punto de entrada (barrel) del módulo de cálculos.
 *
 * Reexporta las funciones de subtotal, IVA y total para que otros
 * módulos del proyecto puedan importarlas desde una sola ruta:
 *   import { calcularSubtotal, calcularIVA, calcularTotal } from "./calculos";
 *
 * También define una función de conveniencia, "calcularCompra", que
 * combina las tres funciones anteriores para resolver el flujo completo
 * de una compra en un solo llamado.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotal = exports.TASA_IVA_DEFAULT = exports.calcularIVA = exports.calcularSubtotal = void 0;
exports.calcularCompra = calcularCompra;
const subtotal_1 = require("./subtotal");
const iva_1 = require("./iva");
const total_1 = require("./total");
var subtotal_2 = require("./subtotal");
Object.defineProperty(exports, "calcularSubtotal", { enumerable: true, get: function () { return subtotal_2.calcularSubtotal; } });
var iva_2 = require("./iva");
Object.defineProperty(exports, "calcularIVA", { enumerable: true, get: function () { return iva_2.calcularIVA; } });
Object.defineProperty(exports, "TASA_IVA_DEFAULT", { enumerable: true, get: function () { return iva_2.TASA_IVA_DEFAULT; } });
var total_2 = require("./total");
Object.defineProperty(exports, "calcularTotal", { enumerable: true, get: function () { return total_2.calcularTotal; } });
/**
 * Calcula el subtotal, el IVA y el total de una compra a partir de
 * una lista de productos y una tasa de IVA opcional.
 *
 * Esta función orquesta las tres funciones de cálculo (subtotal, IVA y total)
 * para evitar que quien consuma el módulo tenga que llamarlas una por una
 * y encadenar manualmente sus resultados.
 *
 * @param productos - Arreglo de productos de la compra (precio y cantidad).
 * @param tasaIVA   - Tasa de IVA a aplicar (decimal). Por defecto 0.12 (12%).
 * @returns Un objeto ResultadoCompra con subtotal, tasaIVA, iva y total.
 *
 * @example
 * const productos = [{ nombre: "Mouse", precio: 80, cantidad: 3 }];
 * calcularCompra(productos);
 * // => { subtotal: 240, tasaIVA: 0.12, iva: 28.8, total: 268.8 }
 */
function calcularCompra(productos, tasaIVA = iva_1.TASA_IVA_DEFAULT) {
    const subtotal = (0, subtotal_1.calcularSubtotal)(productos);
    const iva = (0, iva_1.calcularIVA)(subtotal, tasaIVA);
    const total = (0, total_1.calcularTotal)(subtotal, iva);
    return { subtotal, tasaIVA, iva, total };
}
