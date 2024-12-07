class Juego {
  constructor() {
    this.pantalla = 1; // Pantalla de inicio
    this.objetivo = 12;  
    this.maxFallos = 5; 
    this.reiniciar(); // Inicia los elementos del juego
  }
  reiniciar() {
    this.pancho = new Pancho(random(50, width - 50), random(50, height - 50), 30);
    this.contador = new Contador(0, 0, this.objetivo, this.maxFallos);
    this.boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Instrucciones");
  }
  mostrar() {
    if (this.pantalla === 1) {
      image(pantallas[0], 0, 0); 
    } else if (this.pantalla === 2) {
      image(pantallas[4], 0, 0); 
    } else if (this.pantalla === 3) {
      // Pantalla Minijuego
      image(pantallas[1], 0, 0);
      this.pancho.mover();
      this.pancho.dibujar();
      this.contador.mostrar();
    } else if (this.pantalla === 4) {
      // Pantalla Resultados
      if (this.contador.clicsCorrectos >= this.objetivo) {
        image(pantallas[2], 0, 0); // Victoria
      } else {
        image(pantallas[3], 0, 0); // Derrota
      }
    } else if (this.pantalla === 5) {
      image(pantallas[5], 0, 0); // Créditos
    }
    // Mostrar Botón 
    if (this.boton) {
      this.boton.dibujar();
    }
  }
}
