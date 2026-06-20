// Módulo de modelos de datos.
// Aquí se definen las interfaces que representan la información con la
// que trabajan las funciones de cálculo. Mantener los modelos separados
// facilita la reutilización del código.

// Representa un producto dentro de una compra.
// nombre: nombre descriptivo del producto.
// precio: precio unitario del producto, sin IVA.
// cantidad: unidades compradas de ese producto.
export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

// Representa el resultado completo de los cálculos de una compra.
// subtotal: suma de precio * cantidad de todos los productos.
// tasaIVA: tasa de IVA utilizada en el cálculo.
// iva: monto de IVA calculado a partir del subtotal.
// total: subtotal + IVA.
export interface ResultadoCompra {
  subtotal: number;
  tasaIVA: number;
  iva: number;
  total: number;
}
