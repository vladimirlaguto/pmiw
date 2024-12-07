// TPfinalParte2 Recuperatorio
// Comisión 2
// Diaz Valentina Legajo: 119013/7
// Laguto Vladimir Legajo: 119061/6

//video explicativo: https://www.youtube.com/watch?v=HKuvOc0MViM

let juego; // Variable para la clase Juego
let pantallas = []; // Arreglo de pantallas y sprite

function preload() {
  soundFormats('mp3', 'ogg');
  musica = loadSound('/data/musica.mp3');
  pantallas[0] = loadImage("data/pantallainicio.png");
  pantallas[1] = loadImage("data/escenario.png");
  pantallas[2] = loadImage("data/ganar.png");
  pantallas[3] = loadImage("data/perder.png");
  pantallas[4] = loadImage("data/instrucciones.png");
  pantallas[5] = loadImage("data/creditos.png");
  pantallas[6] = loadImage("data/bbq.png");
}
function setup() {
  createCanvas(640, 480);
  juego = new Juego(); 
}
function draw() {
  background(220);
  juego.mostrar();
}
function mousePressed() {
  // Manejo de clics
  if (juego.boton && juego.boton.estaDentro(mouseX, mouseY)) {
    musica.stop();
    if (juego.pantalla === 1) {
      // Cambiar de inicio a instrucciones
      juego.pantalla = 2;
      juego.boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Jugar");
    } else if (juego.pantalla === 2) {
      // Cambiar de instrucciones al minijuego
      juego.pantalla = 3;
      juego.boton = null; // Sin botón 
      musica.loop();
    } else if (juego.pantalla === 4) {
      // Cambiar de resultados a créditos
      juego.pantalla = 5;
      juego.boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Reiniciar");
    } else if (juego.pantalla === 5) {
      // Reiniciar el juego
      juego.pantalla = 1;
      juego.reiniciar();
    }
  } else if (juego.pantalla === 3) {
    if (juego.pancho.estaDentro(mouseX, mouseY)) {
      // Incrementar clics correctos y aumentar velocidad del Pancho
      juego.contador.incrementarClicsCorrectos();
      juego.pancho.aumentarVelocidad();
    } else {
      // Incrementar clics fallidos
      juego.contador.incrementarFallos();
    }
    // Verificar si el juego termino
    if (juego.contador.clicsCorrectos >= juego.objetivo || juego.contador.fallos >= juego.maxFallos) {
      juego.pantalla = 4; // Cambiar a resultados
      juego.boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Créditos");
    }
  }
}
