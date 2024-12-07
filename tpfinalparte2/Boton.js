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
