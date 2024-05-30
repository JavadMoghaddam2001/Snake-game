let snake;
let scl = 20;
let food;
let score = 0;
let dir='right';
function setup() {
  createCanvas(600, 500);
  snake = new Snake();
  frameRate(10);
  foodLocation();


}

function draw() {
  background(75);

  snake.show();
  snake.move();
  snake.death();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

  if (snake.eat(food)) {
    foodLocation();
  }
  document.querySelector('h1').innerHTML=`Score : ${score}`
}

function foodLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && dir!='down'){
    snake.direction(0, -1);
    dir='up'
  } else if (keyCode === DOWN_ARROW&& dir!='up'){
    snake.direction(0, 1);
        dir='down'

  } else if (keyCode === LEFT_ARROW&& dir!='right'){
    snake.direction(-1, 0);
        dir='left'

  } else if (keyCode === RIGHT_ARROW&& dir!='left'){
    snake.direction(1, 0);
        dir='right'

  }
}
document.querySelector('button').addEventListener('click',()=>{
  snake.reset()
})