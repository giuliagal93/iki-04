var value = false;
var y = 0;
var colorbg = 50;

var delta = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke();
}

function mousePressed() {
    
    if (mouseY < height/2) {
    if(value == false) {
        value = true;
    }} 
    else if (mouseY > height/2){
    
      delta = touchX;
}
}

 
function mouseReleased() {
    if (mouseY < height/2) {
    if(value == true) {
        value = false;
    } } 
    else if (mouseY > height/2) {
    
      delta = touchX - delta;
//valueX = touchX - valueX;

}
    
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
    else if (mouseY > height/2) {
    
      delta = touchX - delta;
//valueX = touchX - valueX;

}
}


function draw() {
    background(colorbg);
    
    noStroke;
    fill(220);
    rect(0,0,windowWidth,y);
    
    // modificare i valori di seguito per rallentare o velocizzare
    
    var valDiscesa = 4;
    var valSalita = 1 + delta/100;
          console.log(valSalita)

    if (valSalita < 1){
        valSalita = 1;
    }
    

    
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
