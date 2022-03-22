
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(100,50,50,100)
  
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    sprite1.x = sprite1.x + 5
  }
  if (keyIsDown(LEFT_ARROW)){
    sprite1.x = sprite1.x - 5
  }
  if (keyIsDown(DOWN_ARROW)){
   sprite1.y = sprite1.y + 5
  }
  if (keyIsDown(UP_ARROW)){
  sprite1.y = sprite1.y - 5
  }

  drawSprites()

}





