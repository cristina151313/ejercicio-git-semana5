// =============================================================
// usuarios.js
// Esta función se escribió siguiendo TDD:
//   1. Primero escribimos la prueba (tests/bloque3-tdd.test.js) -> FALLA (rojo)
//   2. Después escribimos este código mínimo -> PASA (verde)
//   3. Por último mejoramos el código sin romper la prueba (refactor)
// =============================================================

function crearUsuario(nombre) {
  return { nombre, activo: true };
}

module.exports = { crearUsuario };
