//variables for managing the game
var s;
var scl = 20;
var food;

// intialize the game platform
function setup() {
  // put setup code here
  createCanvas(600, 600);
	s = new snake();
	frameRate(10);
	pickLocation();
}

// This is where the food is positioning and randomly switch his location
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

// this for showing the snake and updating 
function draw() {
  // put drawing code here
  background(51);
  	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
  s.death();
  s.update();
  s.show(r,g,b);

  if(s.eat(food)) {
  	pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}
