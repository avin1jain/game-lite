var level1;

var gameState= 0;
function preload() {
  
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    level1= new Level1()
}
function draw(){
background("red");
if (gameState==0){
    level1.display();
 
}
 if (gameState==1){
  level1.showquestion();

 }

}