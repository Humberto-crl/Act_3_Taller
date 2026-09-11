# Documentación del Flujo del Carrito

## Diseño General

La aplicación implementa un carrito de compras utilizando Angular y el patrón de programación reactiva mediante Observables. El sistema está compuesto por tres componentes principales: Productos, Carrito y Resumen.

## Rol del Servicio

El `CarritoService` actúa como la fuente única de verdad de la aplicación. Su responsabilidad es almacenar y administrar el estado actual del carrito de compras.

Dentro del servicio se implementaron los métodos:

- `agregarProducto()`
- `actualizarCantidad()`
- `eliminarProducto()`

Estos métodos permiten modificar el contenido del carrito sin que los componentes accedan directamente a los datos, manteniendo una mejor separación de responsabilidades.

## Uso de Observables

El servicio utiliza un `BehaviorSubject<Product[]>` para almacenar y compartir el estado del carrito.

Cada vez que ocurre una modificación:

- Agregar un producto.
- Actualizar una cantidad.
- Eliminar un producto.

el servicio emite el nuevo estado mediante:

```ts
carritoSubject.next(...)