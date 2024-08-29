

// Vladimir Laguto TP1 p5js
// Legajo 119061/6

// https://www.youtube.com/watch?v=yWxFns03htI

let opart;

let fillb;
let filln;

let diametro;
let distancia;

let colorcambio = false;

//------------------------
let squareX = 0; // Coordenada X de la esquina superior izquierda del cuadrado
let squareY = 0; // Coordenada Y de la esquina superior izquierda del cuadrado
let squareSize = 400; // Tamaño del lado del cuadrado

function preload() {
  opart = loadImage('data/opart.png'); 
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  fillb = color(255);
  filln = color(0);
  diametro = 20;
}

function draw() {
  
  diametro = map(mouseX, 0, 400, 0, 20);
  diametro = constrain(diametro, 20, 41);
 
  if (zona(400, 0, 400, 400)) {
    stroke(40);
  } else {
    noStroke();
  }

  if (mouseX && mouseY <= 400) {
    dibujo(height, 10);
  }

  if (mouseX >= 400) {
    for (let j = 0; j <= 10; j += 2) {
      for (let i = 0; i <= 10; i += 2) {
        fill(filln);
        rect(400 + i * 40, j * 40, 40, 40);
        fill(fillb);
        ellipse(400 + i * 40 + 20, j * 40 + 20, diametro, diametro);

        fill(fillb);
        rect(400 + i * 40 + 40, j * 40, 40, 40);
        fill(filln);
        ellipse(400 + i * 40 + 20 + 40, j * 40 + 20, diametro, diametro);

        fill(fillb);
        rect(400 + i * 40, j * 40 + 40, 40, 40);
        fill(filln);
        ellipse(400 + i * 40 + 20, j * 40 + 20 + 40, diametro, diametro);

        fill(filln);
        rect(400 + i * 40 + 40, j * 40 + 40, 40, 40);
        fill(fillb);
        ellipse(400 + i * 40 + 20 + 40, j * 40 + 20 + 40, diametro, diametro);
      }
    }
  }

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      colorcambio = true;
      fillb = color(random(255), random(255), random(255));
      filln = color(random(255), random(255), random(255));
    } else if (mouseButton === RIGHT) {
      colorcambio = true;
      fillb = color(255);
      filln = color(0);
    }
  } else {
    colorcambio = false;
  }

  let d = dist(mouseX, mouseY, squareX + squareSize / 2, squareY + squareSize / 2);
  if (d < squareSize / 2) {
    fillb = color(255);
    filln = color(0);
  }

  image(opart, 0, 0);
}

function zona(x, y, a, h) {
  let r;
    if( mouseX > x && mouseX < x+a && mouseY > y && mouseY < y+h && (mouseButton == CENTER)){
    r = true;
  }else{
    r = false;
  }
  return r;
}
