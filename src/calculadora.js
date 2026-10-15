// =============================================================
// calculadora.js
// Funciones sencillas que vamos a probar con Jest.
// =============================================================

// Suma dos números.
function suma(a, b) {
  return a + b;
}

// Divide dos números.
// Si el divisor es 0, lanza un error con throw (lo vimos en la semana 3).
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

// module.exports permite usar estas funciones desde otros archivos
// (por ejemplo, desde los archivos de prueba con require).
module.exports = { suma, dividir };
