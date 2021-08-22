var ship, sea, seaImage, shipImage;
function preload(){
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
 }

function setup(){
      createCanvas(900,500);
      //creating sea and ship
      sea = createSprite(1,300,900,900);
      sea.addImage("sea.png", seaImage, );
      sea.scale = 1;
      sea.velocityX = -10;
      sea.x = sea.width /2;  
      ship = createSprite(600,250,20,20);
      ship.addAnimation("running", shipImage);
      ship.scale = 0.64;
    }

function draw() {
          background("white");
       
        if (sea.x < 0) {
          sea.x = sea.width / 2;
          }
          drawSprites();
        }