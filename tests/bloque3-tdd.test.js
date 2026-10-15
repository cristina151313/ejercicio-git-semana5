// =============================================================
// BLOQUE 3 · TDD (Test-Driven Development)
// Se escribe la prueba ANTES que el código, en tres pasos:
//
//   1. RED (rojo)    -> escribe la prueba: falla porque la
//                       función aún no existe.
//   2. GREEN (verde) -> escribe el código mínimo para que pase
//                       (src/usuarios.js).
//   3. REFACTOR      -> mejora el código sin que la prueba
//                       deje de pasar.
//
// Ejecutar solo este archivo:  npx jest bloque3-tdd
// =============================================================

const { crearUsuario } = require('../src/usuarios');

test('crear usuario retorna un objeto correcto', () => {
  const usuario = crearUsuario('Juan');
  expect(usuario).toEqual({ nombre: 'Juan', activo: true });
});
