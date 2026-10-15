// =============================================================
// BLOQUE 3 · BDD (Behavior-Driven Development)
// Las pruebas describen el COMPORTAMIENTO que espera el usuario,
// con frases claras que todo el equipo entiende:
//
//   Dado     -> un estado inicial
//   Cuando   -> ocurre una acción
//   Entonces -> se espera un resultado
//
//   describe() -> agrupa pruebas relacionadas
//   it()       -> funciona igual que test()
//
// Ejecutar solo este archivo:  npx jest bloque3-bdd
// =============================================================

const { agregarProducto, calcularTotal } = require('../src/carrito');

describe('Carrito de compras', () => {

  it('debe mostrar un total de 0 cuando el carrito está vacío', () => {
    // Dado un carrito vacío
    const carrito = [];

    // Cuando el usuario consulta el total
    const total = calcularTotal(carrito);

    // Entonces debería ver 0
    expect(total).toBe(0);
  });

  it('debe mostrar el total correcto al agregar dos productos', () => {
    // Dado un carrito vacío
    const carrito = [];

    // Cuando el usuario agrega un libro de $10 y un lápiz de $2
    agregarProducto(carrito, 'Libro', 10);
    agregarProducto(carrito, 'Lápiz', 2);

    // Entonces debería ver 2 productos y un total de $12
    expect(carrito).toHaveLength(2);
    expect(calcularTotal(carrito)).toBe(12);
  });

});
