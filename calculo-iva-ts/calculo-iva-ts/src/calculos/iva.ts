// Calcula el IVA sobre un subtotal.
// Usa la tasa indicada o 12% si no se pasa ninguna.
// subtotal: monto base sin impuestos.
// tasaIVA: porcentaje de IVA en decimal.
// devuelve el monto de IVA.
export const TASA_IVA_DEFAULT = 0.12;

export function calcularIVA(
  subtotal: number,
  tasaIVA: number = TASA_IVA_DEFAULT
): number {
  if (subtotal < 0) {
    throw new Error("El subtotal no puede ser negativo.");
  }
  if (tasaIVA < 0) {
    throw new Error("La tasa de IVA no puede ser negativa.");
  }
  return subtotal * tasaIVA;
}
