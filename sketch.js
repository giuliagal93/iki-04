var value = false;
var y = 0;
var direction = 0;
var delta = 0;
var a = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke();
}



function touchStarted() {
   if (mouseY < height/2) {
    if(value == false) {
        value = true;
    }} 
    else if (mouseY > height/2){
    
      delta = touchX;
}
}

function touchEnded() {
    
    if (mouseY < height/2) {
    if(value == true) {
        value = false;
    } } 
}

function touchMoved() {
    
    if (mouseY > height/2) {
    direction = touchX - delta;
//      console.log(direction)
      
        if(direction > 0) {
            b = a + 0.5
            } else {
            b = a - 0.5
//valueX = touchX - valueX;

        }
        
        a = b;
        console.log(b);
        delta = touchX;
    
}}

function draw() {
    background(141, 178, 162);
    
    noStroke;
    fill(230, 217, 203);
    rect(0,0,windowWidth,y);
    
    // modificare i valori di seguito per rallentare o velocizzare
    
    var valDiscesa = 4;
    var valSalita = 1 + b/10;
         // console.log(valSalita)

    /*if (valSalita < 1){
        valSalita = 1;
    }*/
    

    
    if (value == true && y < height-10) {
        
       for(i=0; i < valDiscesa ; i++) {
         y = y + 1;
    } 
    
    } else if (value == false && y > 6){
        
    for(i=0; i < valSalita ; i++) {
         y = y - 1;
    } 
        
    }
        
    }

  
  // Touch within the image to change
// the value of the rectangle
