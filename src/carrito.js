// =============================================================
// carrito.js
// Un carrito de compras sencillo: un array de objetos
// { producto: 'Libro', precio: 10 }.
// Usa la función suma de calculadora.js, por eso nos sirve
// para hacer una PRUEBA DE INTEGRACIÓN (dos módulos juntos).
// =============================================================

const { suma } = require('./calculadora');

// Agrega un producto y devuelve el carrito actualizado.
function agregarProducto(carrito, producto, precio) {
  carrito.push({ producto, precio });
  return carrito;
}

// Calcula el total sumando los precios de todos los productos.
function calcularTotal(carrito) {
  let total = 0;
  for (const item of carrito) {
    total = suma(total, item.precio);
  }
  return total;
}

module.exports = { agregarProducto, calcularTotal };
