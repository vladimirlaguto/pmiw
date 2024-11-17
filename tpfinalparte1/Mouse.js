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
