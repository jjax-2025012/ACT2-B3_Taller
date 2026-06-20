// Calcula el subtotal de una compra.
// Recorre los productos y suma precio * cantidad.
// El subtotal es el monto base sin IVA.
// lanza error si algún precio o cantidad es negativo.
import { Producto } from "../modelos/types";

export function calcularSubtotal(productos: Producto[]): number {
  return productos.reduce((acumulado, producto) => {
    if (producto.precio < 0 || producto.cantidad < 0) {
      throw new Error(
        `El producto "${producto.nombre}" tiene precio o cantidad negativos.`
      );
    }
    return acumulado + producto.precio * producto.cantidad;
  }, 0);
}
