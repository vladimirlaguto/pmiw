// TPfinalParte1 
//Comisión 2
//Diaz Valentina Legajo: 119013/7
//Laguto Vladimir Legajo: 119061/6

let pantallas = []; // Arreglo principal que almacena todas las imágenes
let pantalla = 0;
let song;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('/data/menu.mp3');

  // Cargar imágenes principales
  pantallas[0] = loadImage("data/imagen1.jpg");
  pantallas[1] = loadImage("data/pantalla1.jpg");
  pantallas[2] = loadImage("data/pantalla2.jpg");
  pantallas[3] = loadImage("data/pantalla3_1.jpg");
  pantallas[4] = loadImage("data/pantalla3_2.jpg");

  // Decisiones
  pantallas["decisiones"] = [
    loadImage("data/pantalla4_1.jpg"), // Ketchup
    loadImage("data/pantalla4_2.jpg"), // Barbacoa
    loadImage("data/pantalla4_3.jpg"), // Mostaza
  ];

  // Ruta según decisión tomada
  pantallas["ruta"] = [
    loadImage("data/pantalla5_1.jpg"),
    loadImage("data/pantalla5_2.jpg"),
    loadImage("data/pantalla5_3.jpg"),
  ];

  // Finales posibles
  pantallas["finales"] = [
    loadImage("data/pantalla7_1.jpg"),
    loadImage("data/pantalla7_2.jpg"),
    loadImage("data/pantalla7_3.jpg"),
  ];

  // Pantalla final
  pantallas["pantallaFinal"] = loadImage("data/pantallafinal.png");
}

function setup() {
  createCanvas(640, 480);
  song.setVolume(0.5);
}

function draw() {
  background(255);

  if (pantalla === 0) {
    image(pantallas[0], 0, 0); // Pantalla inicial
    dibujarBoton(500, 400, "Jugar");
  } else if (pantalla === 1) {
    image(pantallas[1], 0, 0); // Pantalla 1
    dibujarTextoRecuadro(
      "A Matías le da hambre y se acerca a la panchería\n                              más cercana.\nSe sorprende al ver a Gregory atendiendo el lugar.",60,390
    );
    dibujarBoton(500, 400, "Siguiente");
  } else if (pantalla === 2) {
    image(pantallas[2], 0, 0); // Pantalla 2
    dibujarTextoRecuadro(
      "Matías pide solamente un pancho que tenga barbacoa.\nGregory parece no haber escuchado bien y entra en\n                                     pánico.",
      45,
      390
    );
    dibujarBoton(500, 400, "Siguiente");
  } else if (pantalla === 3) {
    // Pantalla de decisiones
    image(pantallas[3], 0, 0);
    dibujarBoton(20, 380, "Ketchup");
    dibujarBoton(400, 380, "Barbacoa");
  } else if (pantalla === 4.1) {
    image(pantallas["decisiones"][1], 0, 0);
    dibujarBoton(400, 380, "Siguiente");
  } else if (pantalla === 4.2) {
    image(pantallas["ruta"][1], 0, 0);
    dibujarBoton(400, 380, "Veredicto");
  } else if (pantalla === 4.3) {
    image(pantallas["finales"][1], 0, 0);
    dibujarBoton(400, 380, "Fin");
  } else if (pantalla === 4.4) {
    image(pantallas["pantallaFinal"], 0, 0);
    dibujarBoton(400, 380, "¡Gracias!");
  } else if (pantalla === 5.1) {
    image(pantallas[4], 0, 0);
    dibujarBoton(20, 380, "No lo hagas..");
    dibujarBoton(400, 380, "¿Le pone mostaza?");
  } else if (pantalla === 5.2) {
    image(pantallas["decisiones"][0], 0, 0);
    dibujarBoton(400, 380, "Siguiente..");
  } else if (pantalla === 5.3) {
    image(pantallas["ruta"][0], 0, 0);
    dibujarBoton(400, 380, "Veredicto");
  } else if (pantalla === 5.4) {
    image(pantallas["finales"][0], 0, 0);
    dibujarBoton(400, 380, "Fin");
  } else if (pantalla === 5.5) {
    image(pantallas["pantallaFinal"], 0, 0);
    dibujarBoton(400, 380, "¡Gracias!");
  } else if (pantalla === 6.1) {
    image(pantallas["decisiones"][2], 0, 0);
    dibujarBoton(400, 380, "Siguiente..");
  } else if (pantalla === 6.2) {
    image(pantallas["ruta"][2], 0, 0);
    dibujarBoton(400, 380, "¿Veredicto?");
  } else if (pantalla === 6.3) {
    image(pantallas["finales"][2], 0, 0);
    dibujarBoton(400, 380, "Fin");
  } else if (pantalla === 6.4) {
    image(pantallas["pantallaFinal"], 0, 0);
    dibujarBoton(400, 380, "¡Gracias!");
  }
}

function dibujarBoton(x, y, texto) {
  fill(255);
  stroke(0);
  strokeWeight(5);
  rect(x, y, 100, 50, 10);
  fill(0);
  noStroke();
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + 50, y + 25);
}

function dibujarTextoRecuadro(texto, x, y) {
  fill(255);
  stroke(0);
  strokeWeight(5);
  rect(x - 20, y - 10, 450, 80, 35);
  fill(0);
  noStroke();
  textSize(18);
  textAlign(LEFT, TOP);
  text(texto, x, y);
}
