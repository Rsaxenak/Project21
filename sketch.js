// to create var bullet and its right edge
var bullet, bulletRightEdge;
//to create var wall and its left edge 
var wall, wallLeftEdge;
// to create variable speed, weight, damage and finally thickness
var speed, weight, damage, thickness;

function setup() {
  //to create canvas
  createCanvas(1600,400);
  //to set speed of bullet to random 
  speed = random(223,321);
  //to set the weight of bullet (to easy to carry(I hope so))
  weight = random(30,52);

  // to let computer decide what will be the thickness of the wall
  thickness = random(22,83);

  
  // to crate wall which will stop the bullet
  wall = createSprite(1200,200,thickness,height/2)
  // to set the colour of wall to gray
  wall.shapeColor = rgb(80,80,80);
  
  // to create the bullet sprite
  bullet = createSprite(50, 200, 20, 5);
  // to set its velocity to var speed created before
  bullet.velocityX = speed;
  // as written in the specific tasks to do, I have set the colour of car to white
  bullet.shapeColor = "white";

  // to set the damage (Mathematician stuff)
  damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness) ;

}

function draw() {
  background("black");
  
  

  // if car is colliding wall
  if (hasCollided(bullet, wall)) 
  {
    // to stop the bullet (like traffic light stops cars)
    bullet.velocityX = 0;

    // some stuff for text
    fill("white");
    text("Damage : " + damage, 20, 20);
    text("Thickness of wall : " + thickness,20,40);
    text("Speed of Bullet : " + speed, 20 , 60);
    text("Weight of Bullet : " + weight, 20, 80);
    text("I am such a good Mathematician!", 20, 120);

    // if damage caused to wall is less,
    if (damage < 10) 
    {
      bullet.shapeColor = rgb(0,255,0);
      text("The wall is ready to go!", 20, 350);
    }
    
    // if the bullet is too much strong to almost break the wall
    if (damage > 10) 
    {
      bullet.shapeColor = rgb(255,0,0);
      text("The wall isn't strong enough. Thank god we tested it!", 20, 350);
    }
  }
  
  drawSprites();
}

// our collided function
function hasCollided(object1,object2) 
{
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;

  if (bulletRightEdge >= wallLeftEdge) 
  {
    return true;
  }
  else
  {
    return false;
  }

}

