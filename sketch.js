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
    
    if (value == true && y < height-10) {
        
       for(i=0; i < 4 ; i++) {
         y = y + 1;
    } 
    
    } else if (value == false && y > 6){
        
    for(i=0; i < 1 ; i++) {
         y = y - 1;
    } 
        
    }
        
    }

  
  

