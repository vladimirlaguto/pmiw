// TPfinalParte1 
//Comisión 2
//Diaz Valentina Legajo: 119013/7
//Laguto Vladimir Legajo: 119061/6

let imagen1,pantalla1,pantalla2,pantalla3_1,pantalla3_2,pantalla4_1,pantalla4_2,pantalla4_3,pantalla5_1,pantalla5_2,pantalla5_3,pantalla6,pantalla7_1,pantalla7_2,pantalla7_3;
let pantalla = 0;
let song;
let arreglo = []; //arreglo vacío para almacenar variables, en este caso, las imágenes con decisiones
let arreglo2 = []; // arreglo que sigue la decisión que tomaste
let arreglo3 = []; // lo mismo que el arreglo dos pero define el final

function preload() {
  
  soundFormats('mp3', 'ogg');
  song = loadSound('/data/menu.mp3');
  imagen1 = loadImage("data/imagen1.jpg");
  pantalla1 = loadImage("data/pantalla1.jpg");
  pantalla2 = loadImage("data/pantalla2.jpg");
  pantalla3_1 = loadImage("data/pantalla3_1.jpg");
  pantalla3_2 = loadImage("data/pantalla3_2.jpg");
 //deciciones 
  pantalla4_1 = loadImage("data/pantalla4_1.jpg");
  pantalla4_2 = loadImage("data/pantalla4_2.jpg");
  pantalla4_3 = loadImage("data/pantalla4_3.jpg");
 // ruta segun la decision tomada
  pantalla5_1 = loadImage("data/pantalla5_1.jpg");
  pantalla5_2 = loadImage("data/pantalla5_2.jpg");
  pantalla5_3 = loadImage("data/pantalla5_3.jpg");
  pantalla6 = loadImage("data/pantalla6.jpg");
 // ruta segun el final tomado
  pantalla7_1 = loadImage("data/pantalla7_1.jpg");
  pantalla7_2 = loadImage("data/pantalla7_2.jpg");
  pantalla7_3 = loadImage("data/pantalla7_3.jpg");
  pantallafinal = loadImage("data/pantallafinal.png");
}
function setup() {
  createCanvas(640, 480);
  song.setVolume(0.5);
   
  arreglo[0] = loadImage("data/pantalla4_1.jpg");  //ketchup
  arreglo[1] = loadImage("data/pantalla4_2.jpg");  //barbacoa
  arreglo[2] = loadImage("data/pantalla4_3.jpg");  //mostaza
  
  arreglo2[0] = loadImage("data/pantalla5_1.jpg");
  arreglo2[1] = loadImage("data/pantalla5_2.jpg");
  arreglo2[2] = loadImage("data/pantalla5_3.jpg");
  
  arreglo3[0] = loadImage("data/pantalla7_1.jpg");
  arreglo3[1] = loadImage("data/pantalla7_2.jpg");
  arreglo3[2] = loadImage("data/pantalla7_3.jpg");
}
function draw() {
  background(255);
  
  if (pantalla === 0) {
    image(imagen1, 0, 0);
    
    // Botón "Jugar"
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    
    // Texto "Jugar"
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Jugar", 550, 425);
    
  } else if (pantalla === 1) {
    image(pantalla1, 0, 0);
    
    // Recuadro 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(40, 380, 450, 80, 35); 
    
    // Texto dentro del recuadro
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    text("A Matías le da hambre y se acerca a la panchería\n                              más cercana.\nSe sorprende al ver a Gregory atendiendo el lugar.", 60, 390);
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 425);
    
    } else if (pantalla === 2) {
    image(pantalla2, 0, 0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(40, 380, 450, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    text("Matías pide solamente un pancho que tenga barbacoa.\nGregory parece no haber escuchado bien y entra en\n                                     pánico.", 45, 390);
    
    // Botón "Siguiente"
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    
    // Texto "Siguiente"
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 425);
    
  } else if (pantalla === 3) {
    //pantalla3 decisiones
    image(pantalla3_1, 0, 0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(20, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("le pone ketchup", 95, 420);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("le pone barbacoa", 475, 420);
//-------------ruta BARBACOA------------   
  } else if (pantalla === 4.1){
    image(arreglo[1],0,0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente", 475, 420);
    
  } else if (pantalla === 4.2){
    image(arreglo2[1],0,0); 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    fill(0);
    noStroke();
    textSize(18);
    text("VEREDICTO", 475, 420);
  
  } else if (pantalla === 4.3){
    image (arreglo3[1],0,0); 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420);
   
   } else if (pantalla === 4.4){
    image (pantallafinal, 0,0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
//-------------ruta KETCHUP------------  
  } else if (pantalla === 5.1){
    image(pantalla3_2, 0, 0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(20, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("No lo hagas..", 95, 420);
      
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(15);
    text("¿Le pone mostaza?", 475, 420); 
    
  } else if (pantalla === 5.2){
    image(arreglo[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente..", 475, 420); 
    
  } else if (pantalla === 5.3){
    image(arreglo2[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Veredicto", 475, 420);   
    
  } else if (pantalla === 5.4){
    image(arreglo3[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420);   
    
   } else if (pantalla === 5.5){    
     image (pantallafinal, 0,0);
   
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
//--------------------------------------------  
  } else if (pantalla === 6.1){
     image(arreglo[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente..", 475, 420); 
  
  } else if (pantalla === 6.2){
     image(arreglo2[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("¿Veredicto?", 475, 420); 
  
   } else if (pantalla === 6.3){
     image(arreglo3[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420); 
    
   } else if (pantalla === 6.4){
     image (pantallafinal, 0,0);
   
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
  
}
}
function mousePressed() { 
  if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
    if (pantalla === 0) {
      pantalla = 1; 
      song.stop();
      console.log("pantalla = 1"); 
   
   }  else if (pantalla === 1) {
      
      pantalla = 2; 
      console.log("pantalla = 2"); 
   
   }  else if (pantalla === 2) {
      pantalla = 3;
      song.loop();
      console.log("pantalla = 3"); 
   }  
   }  else if (pantalla === 3 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 4.1;
      console.log("pantalla = 4.1");
  // Ruta Barbacoa
   }  else if (pantalla === 4.1 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 4.2; 
      console.log("pantalla = 4.2");
      
   }  else if (pantalla === 4.2 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 4.3; 
      console.log("pantalla = 4.3");
    
   }  else if (pantalla === 4.3 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 4.4;
      console.log("pantalla = 4.4");
     
   }  else if (pantalla === 4.4 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 0; 
      console.log("reinicio");
  
  // Ruta Ketchup
   }  else if (pantalla === 3 && mouseX > 20 && mouseX < 150 && mouseY > 400 && mouseY < 450) {
      pantalla = 5.1;
      console.log("pantalla = 5.1 segunda decisión");
      
   }  else if (pantalla === 5.1 && mouseX > 20 && mouseX < 150 && mouseY > 400 && mouseY < 450) {
      pantalla = 5.2; 
      console.log("pantalla = 5.2");
       
   }  else if (pantalla === 5.2 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 5.3; 
      console.log("pantalla = 5.3");
 
   }  else if (pantalla === 5.3 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 5.4; 
      console.log("pantalla = 5.4");
 
   }  else if (pantalla === 5.4 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 5.5; 
      console.log("pantalla = 5.5");
      
   }  else if (pantalla === 5.5 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 0;
      console.log("reinicio");
 
  // Ruta Mostaza
   }  else if (pantalla === 5.1 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 6.1;
      console.log("pantalla = 6.1 nueva ruta");
   
   }  else if (pantalla === 6.1 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 6.2;
      console.log("pantalla = 6.2");
 
   }  else if (pantalla === 6.2 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 6.3;
      console.log("pantalla = 6.3");
      
   }  else if (pantalla === 6.3 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 6.4;
      console.log("pantalla = 6.4");
      
   }  else if (pantalla === 6.4 && mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
      pantalla = 0;
      console.log("reinicio");
      
   }
}
