// =============================================================
// notas.js
// Función con varias ramas (if / else if / else).
// La usamos para explicar las pruebas de CAJA BLANCA y CAJA NEGRA
// y para ver la cobertura de ramas (% Branch).
// =============================================================

// Devuelve el resultado de una nota del 0 al 10.
function clasificarNota(nota) {
  if (nota < 0 || nota > 10) {
    throw new Error('La nota debe estar entre 0 y 10');
  }

  if (nota >= 9) {
    return 'Sobresaliente';   // rama 1
  } else if (nota >= 5) {
    return 'Aprobado';        // rama 2
  } else {
    return 'Suspenso';        // rama 3
  }
}

module.exports = { clasificarNota };
