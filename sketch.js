var bola 

function setup() {
 createCanvas(600, 600);
bola=createSprite (300,300,20,20)

}

function draw() {
  background("red");

if (keyIsDown(RIGHT_ARROW)) {
bola.x=bola.x+5
  }
 
  if (keyIsDown(LEFT_ARROW)) {
    bola.x=bola.x-5
      }

      if (keyIsDown(UP_ARROW)) {
        bola.y=bola.y-5
          }

          if (keyIsDown(DOWN_ARROW)) {
            bola.y=bola.y+5
              }
  drawSprites();
}