# Ejercicio de testing con Jest · Semana 5

**Fundamentos de Lenguajes Web · UNIR**

Proyecto de ejemplo que repasa los **bloques 1, 2 y 3** de la Semana 5:
tipos de pruebas, Jest, matchers, mocks, cobertura, TDD y BDD.

---

## 1. Requisitos

- **Node.js 14 o superior** (incluye **npm**). Descárgalo en https://nodejs.org (versión LTS).
- Un editor de código, por ejemplo **Visual Studio Code** o **WebStorm**.

Comprueba la instalación en la terminal:

```bash
node -v
npm -v
```

Si ves los números de versión, está todo listo.

---

## 2. Instalar el proyecto

1. Descomprime el archivo `.zip`.
2. Abre una terminal **dentro de la carpeta** `ejercicio-testing-semana5`
   (en VS Code: *Terminal → New Terminal*).
3. Instala Jest (lee el `package.json` y descarga lo necesario en `node_modules`):

```bash
npm install
```

> Si empezaras un proyecto desde cero, el comando sería `npm install --save-dev jest`
> y luego añadirías `"test": "jest"` en los `scripts` del `package.json`.
> En este proyecto ya está hecho.

---

## 3. Ejecutar las pruebas

| Qué quieres hacer | Comando |
|---|---|
| Ejecutar **todas** las pruebas | `npm test` |
| Ver el **nombre de cada prueba** | `npx jest --verbose` |
| Ejecutar **un solo archivo** | `npx jest bloque1` (o `bloque2-matchers`, `bloque2-mocks`, `bloque3-tdd`, `bloque3-bdd`) |
| Ver la **cobertura** | `npm run cobertura` |

Resultado esperado de `npm test`:

```
PASS  tests/bloque1-testing.test.js
PASS  tests/bloque2-matchers.test.js
PASS  tests/bloque2-mocks.test.js
PASS  tests/bloque3-tdd.test.js
PASS  tests/bloque3-bdd.test.js

Tests:       26 passed, 26 total
```

---

## 4. Estructura del proyecto

```
ejercicio-testing-semana5/
├── package.json              → scripts "test" y "cobertura", y Jest como dependencia
├── src/                      → CÓDIGO que se prueba
│   ├── calculadora.js        → suma() y dividir() (lanza error al dividir por 0)
│   ├── notas.js              → clasificarNota(): varias ramas if / else
│   ├── carrito.js            → agregarProducto() y calcularTotal() (usa calculadora.js)
│   ├── tienda.js             → mostrarPrecio(): depende de un servicio externo
│   └── usuarios.js           → crearUsuario() (hecho con TDD)
└── tests/                    → PRUEBAS (Jest busca los archivos que terminan en .test.js)
    ├── bloque1-testing.test.js
    ├── bloque2-matchers.test.js
    ├── bloque2-mocks.test.js
    ├── bloque3-tdd.test.js
    └── bloque3-bdd.test.js
```

---

## 5. Qué cubre cada archivo de pruebas

### Bloque 1 · Testing — `bloque1-testing.test.js`
- **Prueba unitaria:** `suma` y `dividir` por separado.
- **Caja negra:** solo entradas y salidas de `clasificarNota` (un 7 aprueba, un 3 suspende).
- **Caja blanca:** una prueba por **cada rama** del `if` de `clasificarNota` y sus valores límite (9 y 5).
- **Prueba de integración:** `carrito.js` y `calculadora.js` funcionando juntos.
- **E2E:** explicada en un comentario (necesita navegador: Cypress o Playwright).

### Bloque 2 · Pruebas con Jest
**`bloque2-matchers.test.js`**

| Matcher | Para qué sirve |
|---|---|
| `toBe` | Valores simples (números, textos) |
| `toEqual` | Objetos y arrays (compara el contenido) |
| `toContain` | El array contiene un elemento |
| `toHaveLength` | Cantidad de elementos |
| `toBeGreaterThan` | Mayor que |
| `toBeNull` | El valor es `null` |
| `toThrow` | La función lanza un error (va dentro de `() =>`) |
| `toMatch` | El texto coincide con un patrón |
| `toContainEqual` | El array contiene un objeto igual |

**`bloque2-mocks.test.js`**
- `jest.fn().mockReturnValue(42)`: función simulada.
- Mock con operador ternario que responde según el argumento.
- `mockReturnValueOnce`: cambia solo la primera respuesta.
- Caso práctico: simular un servicio de precios para probar `mostrarPrecio` sin una API real.

### Bloque 3 · Calidad y metodologías
- **Cobertura:** `npm run cobertura` muestra `% Stmts`, `% Branch`, `% Funcs` y `% Lines`.
  Además crea la carpeta `coverage/`: abre `coverage/lcov-report/index.html` en el navegador para verlo por archivo.
- **TDD** — `bloque3-tdd.test.js`: ciclo Red → Green → Refactor con `crearUsuario`.
- **BDD** — `bloque3-bdd.test.js`: `describe` / `it` con comentarios **Dado / Cuando / Entonces**.
- **Buenas prácticas** aplicadas en todo el proyecto: nombres descriptivos, casos positivos y negativos,
  mocks en lugar de servicios externos y pruebas independientes (cada una crea sus propios datos).

---

## 6. Ejercicios para practicar

1. **Ver un FAIL.** En `bloque1-testing.test.js` cambia `toBe(5)` por `toBe(6)` en la prueba de la suma
   y ejecuta `npx jest bloque1`. Jest muestra **Expected: 6 / Received: 5**. Vuelve a dejarlo en 5.
2. **Ver bajar la cobertura.** Comenta la prueba *"una nota fuera de rango lanza un error"* y ejecuta
   `npm run cobertura`: `notas.js` baja al **87,5 %** y aparece la línea sin probar. Descoméntala.
3. **toBe vs toEqual.** En la prueba del usuario cambia `toEqual` por `toBe`. ¿Por qué falla?
4. **TDD por tu cuenta.** Escribe primero una prueba para una función `restar(a, b)` (fallará: rojo),
   después crea la función en `calculadora.js` (verde) y mejórala si hace falta (refactor).
5. **BDD por tu cuenta.** En `bloque3-bdd.test.js` añade un `it` nuevo:
   *"debe mostrar 3 productos al agregar tres"*, con sus comentarios Dado / Cuando / Entonces.

---

## 7. Problemas frecuentes

| Mensaje | Solución |
|---|---|
| `'jest' no se reconoce como un comando` | Ejecuta `npm install` dentro de la carpeta del proyecto. |
| `No tests found` | Revisa que el archivo termine en `.test.js`. |
| `Cannot find module '../src/...'` | Revisa la ruta del `require` y el nombre del archivo. |
| `npm` no existe | Instala Node.js desde https://nodejs.org y reinicia la terminal. |
| `availableParallelism is not a function` | Tu Node.js es antiguo para Jest 30. Este proyecto usa Jest 29: borra `node_modules` y `package-lock.json` y ejecuta `npm install` de nuevo. |
