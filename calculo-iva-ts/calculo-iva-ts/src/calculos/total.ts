// Calcula el total final de la compra.
// Suma subtotal e IVA.
// lanza error si el subtotal o el IVA son negativos.
export function calcularTotal(subtotal: number, iva: number): number {
  if (subtotal < 0) {
    throw new Error("El subtotal no puede ser negativo.");
  }
  if (iva < 0) {
    throw new Error("El IVA no puede ser negativo.");
  }
  return subtotal + iva;
}
