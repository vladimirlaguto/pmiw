//falta hacer arreglo con cada imagen de la pantalla (menos sprite)

let pantalla = 1; // 1: inicio, 2: instrucciones, 3: minijuego, 4: resultado(ganar o perder), 5: créditos
let pancho;
let contador;
let objetivo = 12;
let maxFallos = 5;
let boton;

function preload(){
  soundFormats('mp3', 'ogg');
  musica = loadSound('/data/musica.mp3');
  inicio = loadImage("data/pantallainicio.png");
  escenario = loadImage("data/escenario.png");
  ganar = loadImage("data/ganar.png");
  perder = loadImage("data/perder.png");
  instruc = loadImage("data/instrucciones.png");
  creditos = loadImage("data/creditos.png");
  bbq = loadImage("data/bbq.png");

}

function setup() {
  createCanvas(640, 480);
  inicializarJuego();
  
}

function draw() {
  background(220);

  // Lógica para mostrar pantallas según la variable 'pantalla'
  if (pantalla === 1) {

    image(inicio,0,0);
  } else if (pantalla === 2) {
    // Pantalla de instrucciones
    image( instruc,0,0);
    
  } else if (pantalla === 3) {
    
    // Minijuego
    image(escenario,0,0);
    pancho.mover();
    pancho.dibujar();
    contador.mostrar();
    
  } else if (pantalla === 4) {
    // Resultado
 
    if (contador.clicsCorrectos >= objetivo) {
      background(0,255,0);
      image(ganar,0,0);
    } else {
      background(255,0,0);
      image(perder,0,0);
    }
  } else if (pantalla === 5) {
    // Créditos
    image(creditos,0,0);
  }


  // Muestra el boton de navegación
  if (boton) {
   boton.dibujar();
}
}

function mousePressed() {
  if (boton && boton.estaDentro(mouseX, mouseY)) {
    musica.stop();
    
    if (pantalla === 1) {
      
      pantalla = 2; // Ir a instrucciones
      boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Jugar");
  
  } else if (pantalla === 2) {
      pantalla = 3; // Ir al juego
      boton = null; // Sin botón en el minijuego
      musica.loop();
  
  } else if (pantalla === 4) {
      pantalla = 5; // Ir a créditos
      boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Reiniciar");
   
  } else if (pantalla === 5) {
      pantalla = 1; // Volver al inicio
      inicializarJuego();
    }
  } else if (pantalla === 3) {
    
    if (pancho.estaDentro(mouseX, mouseY)) {
      contador.incrementarClicsCorrectos();
      pancho.aumentarVelocidad();
      
    } else {
      contador.incrementarFallos();
    }
    
    if (contador.clicsCorrectos >= objetivo || contador.fallos >= maxFallos) {
      pantalla = 4; // Cambiar a resultado
      boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Créditos");
    }
  }
}

// Función para inicializar el juego e inicializar sus respectivos objetos de las clases
function inicializarJuego() {
  pancho = new Pancho(random(50, width - 50), random(50, height - 50), 30);
  contador = new Contador(0, 0, objetivo, maxFallos);
  boton = new Boton(width / 2 - 50, height - 100, 100, 40, "Instrucciones");
}

// Clase Botón
class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  dibujar() {
    fill(200);
    stroke(0);
    rect(this.x, this.y, this.ancho, this.alto, 10);

    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  estaDentro(px, py) {
    return px > this.x && px < this.x + this.ancho && py > this.y && py < this.y + this.alto;
  }
}

// Clase Pancho (pelota como colision)
class Pancho {
  constructor(x, y, radio) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.velX = random(2, 4);
    this.velY = random(2, 4);
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x - this.radio <= 0 || this.x + this.radio >= width) this.velX *= -1;
    if (this.y - this.radio <= 0 || this.y + this.radio >= height) this.velY *= -1;
  }

  dibujar() {
    
    fill(255, 0, 0);
    noStroke();
    //ellipse(this.x, this.y, this.radio * 2);
    image(bbq, this.x -45 , this.y -35 ,85, 85);
  }

  estaDentro(px, py) {
    return dist(px, py, this.x, this.y) < this.radio;
  }

  aumentarVelocidad() {
    this.velX *= 1.1;
    this.velY *= 1.1;
  }
}

// Clase Contador
class Contador {
  constructor(clicsCorrectos, fallos, objetivo, maxFallos) {
    this.clicsCorrectos = clicsCorrectos;
    this.fallos = fallos;
    this.objetivo = objetivo;
    this.maxFallos = maxFallos;
  }

  incrementarClicsCorrectos() {
    if (this.clicsCorrectos < this.objetivo) this.clicsCorrectos++;
  }

  incrementarFallos() {
    if (this.fallos < this.maxFallos) this.fallos++;
  }

  mostrar() {
    textSize(20);
    textAlign(LEFT, TOP);
    fill(0,255,0);
    text("Clics correctos: " + this.clicsCorrectos + "/" + this.objetivo, 10, 10);
    fill(255,0,0);
    text("Clics fallidos: " + this.fallos + "/" + this.maxFallos, 10, 35);
  }
}
