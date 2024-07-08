//let imageT = false;
//let x = 50;
//let image1;
//let  entreeTexte;
//let  boutton_clef;
//let  image2;


//function setup() {
  createCanvas(windowWidth, windowHeight);//augmenter la zone
  image1 = loadImage("pixil.gif");
  image2 = loadImage("clef - copie.jpg")
  entreeTexte = createInput();
  entreeTexte.position(20, 30);
  boutton_clef = createButton("8_")
  boutton_clef.style("color-font:'black'")
  boutton_clef.position(572, 900)
  boutton_clef.mousePressed(boutton);
  boutton_clef.size(55)

//}

//function draw() {
  clear();
  //rect(mouseX, mouseY, 50, 30);// affiche un rectangle qui suit la souris
  fill(500, 500, 500)// pr la couleur
  rect(x, 200, 80, 100, 20, 20)
  x = x + 10;
  if (x > windowWidth) {
    x = 0;
  }
  

  if (entreeTexte.value() == "oui") {
   image(image1, 450, 400, 500, 300);
  }
  if (imageT == true) {
    image(image2, 850, 400, 500, 300);
  }
 
//}

  //function boutton() {
    imageT = true;

  //}
