var value = false;
var y = 0;
var colorbg = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
    noStroke();
}

function mousePressed() {
    
    if(value == false) {
        value = true;
    } 
}

function touchStarted() {
    
    if(value == false) {
        value = true;
    } 
}

 
function mouseReleased() {
    
    if(value == true) {
        value = false;
    } 
    
}

function touchEnded() {
    
    if(value == true) {
        value = false;
    } 
    
}


function draw() {
    background(colorbg);
    
    noStroke;
    fill(220);
    rect(0,0,windowWidth,y);
    
    // modificare i valori di seguito per rallentare o velocizzare
    
    var valDiscesa = 4;
    var valSalita = 1;
    
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

  
  

