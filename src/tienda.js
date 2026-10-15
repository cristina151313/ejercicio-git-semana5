// =============================================================
// tienda.js
// Muestra el precio de un producto. El precio lo da una función
// externa (imagina que consulta una API o una base de datos).
//
// Como esa función se recibe como PARÁMETRO, en las pruebas
// podemos reemplazarla por un MOCK (una función simulada).
// =============================================================

function mostrarPrecio(producto, obtenerPrecio) {
  const precio = obtenerPrecio(producto);

  if (precio === null) {
    return `${producto}: no disponible`;
  }
  return `${producto}: $${precio}`;
}

module.exports = { mostrarPrecio };
