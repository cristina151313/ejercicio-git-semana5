// =============================================================
// BLOQUE 2 · PRUEBAS CON JEST: MOCKS
// "Mockear" es SIMULAR partes externas (APIs, bases de datos,
// envío de emails...) para probar solo NUESTRA lógica.
//
// Ejecutar solo este archivo:  npx jest bloque2-mocks
// =============================================================

const { mostrarPrecio } = require('../src/tienda');


// -------------------------------------------------------------
// 1. jest.fn() crea una función simulada
//    mockReturnValue(42) -> siempre devuelve 42
// -------------------------------------------------------------
test('el mock devuelve 42', () => {
  const mockFuncion = jest.fn().mockReturnValue(42);
  expect(mockFuncion()).toBe(42);
});


// -------------------------------------------------------------
// 2. Mock que responde según el argumento
//    (usa el operador ternario de la semana 3)
// -------------------------------------------------------------
test('el mock devuelve según el valor', () => {
  const mockFuncion = jest.fn((x) => x > 10 ? 'Mayor' : 'Menor');

  expect(mockFuncion(15)).toBe('Mayor');
  expect(mockFuncion(5)).toBe('Menor');
});


// -------------------------------------------------------------
// 3. mockReturnValueOnce -> cambia SOLO la primera respuesta;
//    después vuelve la de siempre.
// -------------------------------------------------------------
test('la primera llamada es distinta', () => {
  const mockFuncion = jest.fn().mockReturnValue('Valor inicial');
  mockFuncion.mockReturnValueOnce('Valor único');

  expect(mockFuncion()).toBe('Valor único');    // 1.ª llamada
  expect(mockFuncion()).toBe('Valor inicial');  // 2.ª llamada
});


// -------------------------------------------------------------
// 4. CASO PRÁCTICO: simular un servicio de precios
// mostrarPrecio necesita una función que "consulte" el precio.
// En vez de usar una API real (lenta o no disponible),
// le pasamos un mock.
// -------------------------------------------------------------
test('muestra el precio que devuelve el servicio', () => {
  const obtenerPrecioMock = jest.fn().mockReturnValue(25);

  expect(mostrarPrecio('Mochila', obtenerPrecioMock)).toBe('Mochila: $25');
});

// Con un mock también podemos simular casos difíciles de conseguir
// con un servicio real, por ejemplo que el producto no exista.
test('muestra "no disponible" si el servicio no encuentra el producto', () => {
  const obtenerPrecioMock = jest.fn().mockReturnValue(null);

  expect(mostrarPrecio('Patineta', obtenerPrecioMock)).toBe('Patineta: no disponible');
});
