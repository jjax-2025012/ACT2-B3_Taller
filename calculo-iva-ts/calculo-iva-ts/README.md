# Cálculo de Subtotal, IVA y Total con TypeScript

Proyecto de la Actividad 2: implementación de funciones en TypeScript para
calcular el subtotal, el IVA y el total de una compra con datos ingresados
por el usuario.

## Requisitos

- Node.js 18 o superior
- pnpm instalado (`npm install -g pnpm` si no lo tienes)

## Instalación y ejecución

Abre la terminal en la carpeta del proyecto `calculo-iva-ts\calculo-iva-ts` y ejecuta:

```bash
pnpm install
pnpm build
pnpm start
```

- `pnpm install` instala las dependencias.
- `pnpm build` compila el código TypeScript en `dist/`.
- `pnpm start` ejecuta la aplicación y solicita los datos del usuario.

También puedes ejecutar el proyecto sin compilar primero:

```bash
pnpm dev
```

## Uso

Al ejecutar `pnpm start` o `pnpm dev`, el programa pedirá:

1. La cantidad de productos a ingresar.
2. Para cada producto:
   - nombre
   - precio unitario
   - cantidad
3. La tasa de IVA (por ejemplo `0.12` para 12%).

El programa mostrará en pantalla:

- detalle de cada producto ingresado,
- subtotal de la compra,
- monto de IVA,
- total final.

## Estructura del proyecto

```
calculo-iva-ts/
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── index.ts            # Punto de entrada: solicita datos y muestra resultados
    ├── modelos/
    │   └── types.ts        # Interfaces: Producto, ResultadoCompra
    ├── calculos/
    │   ├── subtotal.ts     # Función calcularSubtotal
    │   ├── iva.ts          # Función calcularIVA
    │   ├── total.ts        # Función calcularTotal
    │   └── index.ts        # Exporta las funciones de cálculo y calcularCompra
    └── datos/
        └── ejemplos.ts     # Datos de ejemplo no usados en la versión interactiva
```

## Diseño del código

Cada función está en un archivo separado:

- `calculos/subtotal.ts` calcula el subtotal con `precio * cantidad`.
- `calculos/iva.ts` calcula el IVA a partir del subtotal y la tasa.
- `calculos/total.ts` calcula el total final.
- `calculos/index.ts` exporta las funciones de cálculo y define `calcularCompra()`.
- `src/index.ts` solicita los datos al usuario y muestra los resultados.

## Ejecución paso a paso

1. Abre la terminal en `calculo-iva-ts\calculo-iva-ts`.
2. Ejecuta `pnpm install`.
3. Ejecuta `pnpm build`.
4. Ejecuta `pnpm start`.

Con `pnpm start`, ingresa productos y una tasa de IVA, luego revisa el subtotal,
IVA y total calculados en la terminal.


### Funciones de cálculo

Se definieron tres funciones independientes, cada una con una única
responsabilidad:

- **`calcularSubtotal(productos)`**: recorre un arreglo de productos
  (cada uno con `precio` y `cantidad`) y devuelve la suma de `precio * cantidad`
  de todos ellos. Representa el monto base de la compra, antes de impuestos.
- **`calcularIVA(subtotal, tasaIVA)`**: recibe el subtotal y una tasa de
  impuesto (12% por defecto) y devuelve el monto de IVA correspondiente
  (`subtotal * tasaIVA`).
- **`calcularTotal(subtotal, iva)`**: combina el subtotal y el IVA ya
  calculados y devuelve el monto final a pagar (`subtotal + iva`).

Además se agregó una función de conveniencia, **`calcularCompra(productos, tasaIVA)`**,
que orquesta a las tres anteriores en un solo llamado y devuelve un objeto
`ResultadoCompra` con subtotal, tasaIVA, iva y total. Esto evita que quien use
el módulo tenga que encadenar manualmente las tres funciones cada vez.

Cada función valida que los valores numéricos no sean negativos, lanzando un
error descriptivo en caso contrario, para evitar resultados sin sentido en el
contexto de una aplicación de ventas.

### Organización en módulos

El código se separó por responsabilidad en tres carpetas dentro de `src/`:

- **`modelos/`**: define las interfaces (`Producto`, `ResultadoCompra`) que
  describen la forma de los datos, sin lógica de negocio.
- **`calculos/`**: contiene la lógica de negocio pura (subtotal, IVA, total),
  un archivo por cálculo, más un `index.ts` que actúa como barrel export y
  define la función orquestadora `calcularCompra`.
- **`datos/`**: contiene los datos de ejemplo (compras simuladas) usados para
  probar las funciones, separados de la lógica de cálculo.
- **`index.ts`** (raíz de `src/`): es el único archivo que conoce todos los
  módulos anteriores; importa las funciones y los datos, y se encarga de
  imprimir los resultados en consola. Concentra el "flujo principal" sin
  mezclar lógica de cálculo con lógica de presentación.

Esta separación permite que, por ejemplo, las funciones de `calculos/` puedan
reutilizarse en otra parte del proyecto (una API, una interfaz web, otro
script) sin tener que tocar la lógica de impresión, y que los datos de
ejemplo puedan cambiarse sin afectar la lógica de negocio.

### Documentación

Cada función cuenta con un comentario JSDoc que describe:

- Su propósito (qué calcula y por qué).
- Cada parámetro que recibe, con su tipo y restricciones (ej. "debe ser >= 0").
- El valor que retorna.
- Casos en los que lanza un error.
- Un ejemplo de uso con datos concretos.

Esto permite que cualquier persona que abra el archivo entienda cómo usar la
función sin tener que leer su implementación completa, y que los editores de
código (como VS Code) muestren esa documentación al pasar el cursor sobre la
función.

### Pruebas realizadas y conclusiones

En `src/index.ts` se probaron cuatro escenarios:

1. **Compra pequeña** (papelería, IVA por defecto 12%).
2. **Compra mediana** (tecnología, IVA por defecto 12%).
3. **Compra grande** (ropa, con una tasa de IVA personalizada de 15%, para
   comprobar que el parámetro opcional de tasa funciona correctamente).
4. **Compra vacía** (caso límite, sin productos), para verificar que el
   subtotal, IVA y total resultantes sean 0 sin que el programa falle.

También se incluyó una verificación manual que llama a `calcularSubtotal`,
`calcularIVA` y `calcularTotal` por separado y compara el resultado contra
`calcularCompra`, confirmando que ambos caminos producen el mismo total.

**Conclusión:** separar el cálculo de subtotal, IVA y total en funciones
puras y pequeñas facilita probarlas de forma aislada, reutilizarlas desde una
función orquestadora (`calcularCompra`) y detectar errores de manera más
sencilla (por ejemplo, validando montos negativos). Organizar el proyecto en
módulos por responsabilidad (`modelos`, `calculos`, `datos`) mantiene el
código ordenado y fácil de mantener, ya que cada archivo tiene una única
razón para cambiar.
