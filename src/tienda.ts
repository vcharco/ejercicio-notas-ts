// ============================================================
// RETO: ANÁLISIS DE UNA TIENDA
// ============================================================
//
// Tenemos una lista de productos de una tienda.
//
// Crea un programa que permita analizar estos datos.
//
// El programa debe:
// - Mostrar los productos que están disponibles.
// - Obtener los nombres de todos los productos.
// - Calcular el precio medio.
// - Encontrar el producto más caro.
// - Buscar un producto por su nombre.
// - Mostrar un resumen de la tienda.
//
// Decide tú qué funciones necesitas y cómo organizar el código.
//
// No es necesario pedir datos al usuario.
// Para probar tu programa, utiliza console.log().
//
// Intenta que funcione aunque añadamos nuevos productos al array.
//
// ============================================================


interface Producto {
    nombre: string;
    precio: number;
    disponible: boolean;
}

const productos: Producto[] = [
    { nombre: "Teclado", precio: 45, disponible: true },
    { nombre: "Ratón", precio: 25, disponible: true },
    { nombre: "Monitor", precio: 180, disponible: false },
    { nombre: "Auriculares", precio: 60, disponible: true },
    { nombre: "Webcam", precio: 75, disponible: false }
];


// ============================================================
// EMPIEZA AQUÍ
// ============================================================

// Tu código...

