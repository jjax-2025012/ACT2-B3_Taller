"use strict";
/**
 * Módulo de datos de ejemplo.
 *
 * Contiene listas de productos que simulan compras reales en una
 * aplicación de ventas. Se usan para probar las funciones de cálculo
 * de subtotal, IVA y total con distintos escenarios.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.compraVacia = exports.compraGrande = exports.compraMediana = exports.compraPequena = void 0;
/** Compra pequeña: pocos productos y montos bajos. */
exports.compraPequena = [
    { nombre: "Cuaderno", precio: 25, cantidad: 3 },
    { nombre: "Lapicero", precio: 5, cantidad: 5 },
];
/** Compra mediana: varios productos de tecnología. */
exports.compraMediana = [
    { nombre: "Mouse inalámbrico", precio: 80, cantidad: 2 },
    { nombre: "Teclado mecánico", precio: 250, cantidad: 1 },
    { nombre: "Audífonos", precio: 120, cantidad: 1 },
];
/** Compra grande: simula un pedido de ropa con varias cantidades. */
exports.compraGrande = [
    { nombre: "Camisa", precio: 100, cantidad: 4 },
    { nombre: "Pantalón", precio: 180, cantidad: 3 },
    { nombre: "Zapatos", precio: 350, cantidad: 2 },
    { nombre: "Cinturón", precio: 60, cantidad: 1 },
];
/** Caso límite: lista vacía (sin productos en el carrito). */
exports.compraVacia = [];
