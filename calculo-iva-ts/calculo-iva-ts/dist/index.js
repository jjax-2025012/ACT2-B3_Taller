"use strict";
// Punto de entrada de la aplicación.
// Lee productos y la tasa de IVA desde la terminal, calcula el subtotal,
// el IVA y el total, y muestra el resultado en consola.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:readline/promises"));
const node_process_1 = require("node:process");
const calculos_1 = require("./calculos");
function formatearMoneda(valor) {
    return `Q${valor.toFixed(2)}`;
}
function mostrarCompra(productos, resultado) {
    console.log("\n=== Resumen de la compra ===");
    if (productos.length === 0) {
        console.log("No se ingresaron productos.");
    }
    else {
        productos.forEach((producto) => {
            const subtotalProducto = producto.precio * producto.cantidad;
            console.log(`- ${producto.nombre}: ${producto.cantidad} x ${formatearMoneda(producto.precio)} = ${formatearMoneda(subtotalProducto)}`);
        });
    }
    console.log(`\nSubtotal: ${formatearMoneda(resultado.subtotal)}`);
    console.log(`IVA (${(resultado.tasaIVA * 100).toFixed(0)}%): ${formatearMoneda(resultado.iva)}`);
    console.log(`Total: ${formatearMoneda(resultado.total)}`);
}
function parseNumber(value, fieldName) {
    const numero = Number(value.trim());
    if (Number.isNaN(numero)) {
        throw new Error(`Valor inválido para ${fieldName}: "${value}"`);
    }
    return numero;
}
async function leerProductos(rl) {
    const cantidadProductos = await rl.question("¿Cuántos productos quieres ingresar? ");
    const total = parseInt(cantidadProductos.trim(), 10);
    if (Number.isNaN(total) || total < 0) {
        throw new Error("La cantidad de productos debe ser un número entero mayor o igual a 0.");
    }
    const productos = [];
    for (let i = 0; i < total; i += 1) {
        console.log(`\nProducto ${i + 1}:`);
        const nombre = await rl.question("  Nombre: ");
        const precio = parseNumber(await rl.question("  Precio unitario: "), "precio");
        const cantidad = parseNumber(await rl.question("  Cantidad: "), "cantidad");
        if (precio < 0)
            throw new Error("El precio no puede ser negativo.");
        if (cantidad < 0)
            throw new Error("La cantidad no puede ser negativa.");
        productos.push({ nombre: nombre.trim() || `Producto ${i + 1}`, precio, cantidad });
    }
    return productos;
}
async function leerTasaIVA(rl) {
    const valor = await rl.question("Tasa de IVA (por ejemplo 0.12 para 12%, dejar vacío para 12%): ");
    if (valor.trim() === "") {
        return 0.12;
    }
    const tasa = parseNumber(valor, "tasa de IVA");
    if (tasa < 0)
        throw new Error("La tasa de IVA no puede ser negativa.");
    return tasa;
}
async function main() {
    const rl = promises_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    try {
        console.log("Cálculo de IVA, Subtotal y Total");
        console.log("Ingrese los datos de los productos y la tasa de IVA.\n");
        const productos = await leerProductos(rl);
        const tasaIVA = await leerTasaIVA(rl);
        const resultado = (0, calculos_1.calcularCompra)(productos, tasaIVA);
        mostrarCompra(productos, resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("\nError:", error.message);
        }
        else {
            console.error("\nError inesperado.");
        }
        process.exitCode = 1;
    }
    finally {
        rl.close();
    }
}
main();
