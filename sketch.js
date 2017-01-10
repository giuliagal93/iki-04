var value = false;
var y = 0;
var colorbg = 50;

var delta = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke();
}

function mousePressed() {
    
    if (mouseY < 600) {
    if(value == false) {
        value = true;
    }} 
    else if (mouseY > 600){
    
      delta = touchX;
}
}

 
function mouseReleased() {
    if (mouseY < 600) {
    if(value == true) {
        value = false;
    } } 
    else if (mouseY > 600) {
    
      delta = touchX - delta;
//valueX = touchX - valueX;

}
    
}

//function touchStarted() {
//    
//    if(value == false) {
//        value = true;
//    } 
//}

//function touchEnded() {
//    
//    if(value == true) {
//        value = false;
//    } 
//    
//}


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
