// =============================================================
// BLOQUE 1 · TESTING
// Tipos de pruebas (unitaria, integración, E2E) y técnicas
// (caja negra y caja blanca).
//
// Ejecutar solo este archivo:  npx jest bloque1
// =============================================================

// require trae las funciones que vamos a probar
const { suma, dividir } = require('../src/calculadora');
const { clasificarNota } = require('../src/notas');
const { agregarProducto, calcularTotal } = require('../src/carrito');


// -------------------------------------------------------------
// 1. PRUEBA UNITARIA
// Prueba UNA sola función, de forma aislada.
//   test()   -> nombre descriptivo + función con la prueba
//   expect() -> el valor que obtenemos al ejecutar el código
//   toBe()   -> el resultado que esperamos
// -------------------------------------------------------------
test('suma dos números correctamente', () => {
  expect(suma(2, 3)).toBe(5);
});

test('divide dos números correctamente', () => {
  expect(dividir(10, 2)).toBe(5);
});


// -------------------------------------------------------------
// 2. CAJA NEGRA
// Solo miramos ENTRADAS y SALIDAS, sin leer el código por dentro.
// Pensamos en lo que dice el enunciado: "una nota de 5 o más
// aprueba, menos de 5 suspende".
// -------------------------------------------------------------
test('caja negra: un 7 aprueba', () => {
  expect(clasificarNota(7)).toBe('Aprobado');
});

test('caja negra: un 3 suspende', () => {
  expect(clasificarNota(3)).toBe('Suspenso');
});


// -------------------------------------------------------------
// 3. CAJA BLANCA
// Conocemos el código y diseñamos una prueba para CADA RAMA
// del if (abre src/notas.js para verlas).
// También probamos los valores límite: 9 y 5.
// -------------------------------------------------------------
test('caja blanca: rama 1 -> 9 es Sobresaliente', () => {
  expect(clasificarNota(9)).toBe('Sobresaliente');
});

test('caja blanca: rama 2 -> 5 es Aprobado', () => {
  expect(clasificarNota(5)).toBe('Aprobado');
});

test('caja blanca: rama 3 -> 4.9 es Suspenso', () => {
  expect(clasificarNota(4.9)).toBe('Suspenso');
});

test('caja blanca: una nota fuera de rango lanza un error', () => {
  // La función que lanza el error va dentro de () =>
  expect(() => clasificarNota(11)).toThrow('La nota debe estar entre 0 y 10');
});


// -------------------------------------------------------------
// 4. PRUEBA DE INTEGRACIÓN
// Comprueba que DOS O MÁS partes funcionan bien JUNTAS.
// Aquí: carrito.js + calculadora.js (calcularTotal usa suma).
// -------------------------------------------------------------
test('integración: el carrito calcula el total usando la calculadora', () => {
  const carrito = [];
  agregarProducto(carrito, 'Libro', 10);
  agregarProducto(carrito, 'Lápiz', 2);

  expect(calcularTotal(carrito)).toBe(12);
});


// -------------------------------------------------------------
// 5. PRUEBA END-TO-END (E2E)
// Prueba la aplicación completa como lo haría un usuario
// (abrir la página, hacer clic, ver el resultado).
// Necesita un navegador y herramientas como Cypress o Playwright,
// por eso NO la hacemos con Jest en este ejercicio.
// -------------------------------------------------------------
