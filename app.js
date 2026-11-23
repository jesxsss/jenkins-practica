function sumar(a, b) {
  return a + b;
}

// Prueba automatizada básica
if (sumar(3, 3) !== 6) {
  console.error("ERROR: La prueba de suma falló");
  process.exit(1); // Código distinto de 0 hace fallar el pipeline
}

console.log("OK: Todas las pruebas pasaron correctamente.");
