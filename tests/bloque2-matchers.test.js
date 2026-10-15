// =============================================================
// BLOQUE 2 · PRUEBAS CON JEST: MATCHERS
// Un matcher es el método que compara el valor obtenido con el
// valor esperado: toBe, toEqual, toContain...
//
// Ejecutar solo este archivo:  npx jest bloque2-matchers
// =============================================================

const { suma, dividir } = require('../src/calculadora');


// -------------------------------------------------------------
// toBe -> valores simples (números, textos, booleanos)
// -------------------------------------------------------------
test('toBe: 2 + 3 es 5', () => {
  expect(suma(2, 3)).toBe(5);
});


// -------------------------------------------------------------
// toEqual -> objetos y arrays (compara el CONTENIDO)
// Con toBe esta prueba fallaría, porque son dos objetos distintos.
// -------------------------------------------------------------
test('toEqual: el usuario es correcto', () => {
  const usuario = { nombre: 'Juan', edad: 30 };
  expect(usuario).toEqual({ nombre: 'Juan', edad: 30 });
});


// -------------------------------------------------------------
// toContain -> un array (o un texto) contiene un elemento
// -------------------------------------------------------------
test('toContain: la lista incluye "manzana"', () => {
  const frutas = ['pera', 'manzana', 'uva'];
  expect(frutas).toContain('manzana');
});


// -------------------------------------------------------------
// toHaveLength -> cantidad de elementos de un array o texto
// -------------------------------------------------------------
test('toHaveLength: la lista tiene 3 frutas', () => {
  const frutas = ['pera', 'manzana', 'uva'];
  expect(frutas).toHaveLength(3);
});


// -------------------------------------------------------------
// toBeGreaterThan -> mayor que
// -------------------------------------------------------------
test('toBeGreaterThan: 10 / 2 es mayor que 4', () => {
  expect(dividir(10, 2)).toBeGreaterThan(4);
});


// -------------------------------------------------------------
// toBeNull -> el valor es null
// -------------------------------------------------------------
test('toBeNull: al iniciar no hay usuario conectado', () => {
  const usuarioConectado = null;
  expect(usuarioConectado).toBeNull();
});


// -------------------------------------------------------------
// toThrow -> la función lanza un error
// IMPORTANTE: va dentro de () => para que Jest capture el error.
// -------------------------------------------------------------
test('toThrow: lanza error al dividir por cero', () => {
  expect(() => dividir(4, 0)).toThrow('No se puede dividir por cero');
});


// -------------------------------------------------------------
// toMatch -> un texto coincide con un patrón
// -------------------------------------------------------------
test('toMatch: el correo contiene @comunidadunir', () => {
  const correo = 'ana.perez@comunidadunir.net';
  expect(correo).toMatch('@comunidadunir');
});


// -------------------------------------------------------------
// VARIOS MATCHERS EN UNA PRUEBA
// Las pruebas más útiles combinan matchers.
// toContainEqual -> el array contiene un OBJETO igual al indicado
// -------------------------------------------------------------
test('verifica el contenido del carrito', () => {
  const carrito = [
    { producto: 'Libro', precio: 10 },
    { producto: 'Lápiz', precio: 2 },
  ];

  expect(carrito).toHaveLength(2);
  expect(carrito).toContainEqual({ producto: 'Libro', precio: 10 });
  expect(carrito[1].precio).toBeGreaterThan(1);
});
