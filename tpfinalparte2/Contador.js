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
    fill(0, 255, 0);
    text(`Clics correctos: ${this.clicsCorrectos}/${this.objetivo}`, 10, 10);
    fill(255, 0, 0);
    text(`Clics fallidos: ${this.fallos}/${this.maxFallos}`, 10, 35);
  }
}
