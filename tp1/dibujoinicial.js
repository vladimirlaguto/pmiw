function dibujo(i, j) {
  // FILAS DE CUBOS
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(0);
      rect(400, i * 80, 40, 40);
      rect(400 + 80 + j * 80, i * 80, 40, 40);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(255);
      rect(440, j * 80, 40, 40);
      rect(440 + 80 + i * 80, j * 80, 40, 40);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(0);
      rect(440, 40 + j * 80, 40, 40);
      rect(440 + 80 + i * 80, 40 + j * 80, 40, 40);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(255);
      rect(400, 40 + j * 80, 40, 40);
      rect(400 + 80 + i * 80, 40 + j * 80, 40, 40);
    }
  }

  // FILAS DE ELIPSES
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(255);
      ellipse(460, 60 + j * 80, 20, 20);
      ellipse(460 + i * 80, 60 + j * 80, 20, 20);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(0);
      ellipse(420, 60 + j * 80, 20, 20);
      ellipse(420 + i * 80, 60 + j * 80, 20, 20);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(255);
      ellipse(420, 20 + j * 80, 20, 20);
      ellipse(420 + i * 80, 20 + j * 80, 20, 20);
    }
  }

  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      fill(0);
      ellipse(420, 60 + j * 80, 20, 20);
      ellipse(460 + i * 80, 20 + j * 80, 20, 20);
    }
  }
}
