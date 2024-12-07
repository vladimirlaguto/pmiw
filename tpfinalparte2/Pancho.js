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
    image(pantallas[6], this.x - 45, this.y - 35, 85, 85);
  }
  estaDentro(px, py) {
    return dist(px, py, this.x, this.y) < this.radio;
  }
  aumentarVelocidad() {
    this.velX *= 1.1;
    this.velY *= 1.1;
  }
}
