// Entrada del módulo de cálculos.
// Reexporta las funciones de subtotal, IVA y total para que se puedan usar
// desde una sola ruta: import { calcularSubtotal, calcularIVA, calcularTotal } from "./calculos".
// También incluye calcularCompra para hacer el flujo completo de una compra.

import { Producto, ResultadoCompra } from "../modelos/types";
import { calcularSubtotal } from "./subtotal";
import { calcularIVA, TASA_IVA_DEFAULT } from "./iva";
import { calcularTotal } from "./total";

export { calcularSubtotal } from "./subtotal";
export { calcularIVA, TASA_IVA_DEFAULT } from "./iva";
export { calcularTotal } from "./total";

// Calcula subtotal, IVA y total de una compra.
// productos: lista de productos con precio y cantidad.
// tasaIVA: tasa del impuesto en decimal, por defecto 0.12.
// devuelve: objeto con subtotal, tasaIVA, iva y total.
export function calcularCompra(
  productos: Producto[],
  tasaIVA: number = TASA_IVA_DEFAULT
): ResultadoCompra {
  const subtotal = calcularSubtotal(productos);
  const iva = calcularIVA(subtotal, tasaIVA);
  const total = calcularTotal(subtotal, iva);

  return { subtotal, tasaIVA, iva, total };
}
