// ==========================================
// EJERCICIO: Gestión de notas
// ==========================================

interface Alumno {
  nombre: string;
  nota: number;
}

const alumnos: Alumno[] = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 },
  { nombre: "Carlos", nota: 3 },
  { nombre: "Sofía", nota: 9 }
];


// ==========================================
// 1. FUNCIÓN haAprobado
// ==========================================
console.log("\n\n======================= EJERCICIO 1 =======================");

// Crea una función que reciba una nota y devuelva
// true si está aprobada y false si está suspendida.

// function haAprobado(...) {
//     ...
// }

// console.log(haAprobado(8)); // true
// console.log(haAprobado(4)); // false

// ==========================================
// 2. FOR TRADICIONAL
// ==========================================
console.log("\n\n======================= EJERCICIO 2 =======================");

// Recorre el array de alumnos utilizando un for
// y muestra en consola si cada alumno ha aprobado
// o suspendido.

// for (...) {
//   console.log(...);
// }


// ==========================================
// 3. FILTER
// ==========================================
console.log("\n\n======================= EJERCICIO 3 =======================");

// Crea un nuevo array con los alumnos aprobados.
// Utiliza .filter() y una función flecha.

// const aprobados = ...;

// console.log(aprobados);


// ==========================================
// 4. MAP
// ==========================================
console.log("\n\n======================= EJERCICIO 4 =======================");

// Crea un nuevo array que contenga únicamente
// los nombres de los alumnos.
// Utiliza .map() y una función flecha.

// const nombres = ...;

// console.log(nombres);


// ==========================================
// 5. CALCULAR MEDIA
// ==========================================
console.log("\n\n======================= EJERCICIO 5 =======================");

// Crea una función que calcule la nota media.
// Para sumar las notas utiliza un for tradicional.


// ==========================================
// 6. BONUS
// ==========================================
console.log("\n\n======================= EJERCICIO 6 =======================");

// Crea una función flecha que reciba un alumno
// y devuelva un mensaje como:
//
// "Ana tiene un 8 y ha aprobado"