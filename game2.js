const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const cellSize = 20;
canvas.width = 800;
canvas.height = 600;
class Snake {
  constructor() {
    this.body = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    this.direction = "right";
  }
  update() {
    const head = this.body[0];
    if (this.direction === "right") {
      this.body.unshift({ x: head.x + 1, y: head.y });
    } else if (this.direction === "left") {
      this.body.unshift({ x: head.x - 1, y: head.y });
    } else if (this.direction === "up") {
      this.body.unshift({ x: head.x, y: head.y - 1 });
    } else if (this.direction === "down") {
      this.body.unshift({ x: head.x, y: head.y + 1 });
    }
    this.body.pop();
  }
  draw() {
    ctx.fillStyle = "green";
    this.body.forEach((cell) => {
      ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    });
  }
  hitWall() {
    const head = this.body[0];
    return head.x < 0 || head.x > Math.floor(canvas.width / cellSize) || head.y < 0 || head.y > Math.floor(canvas.height / cellSize);
  }
  hitSelf() {
    const head = this.body[0];
    for (let i = 1; i < this.body.length; i++) {
      if (this.body[i].x === head.x && this.body[i].y === head.y) {
        return true;
      }
    }
    return false;
  }
  turnLeft() {
    if (this.direction !== "right") {
      this.direction = "left";
    }
  }
  turnRight() {
    if (this.direction !== "left") {
      this.direction = "right";
    }
  }
  turnUp() {
    if (this.direction !== "down") {
      this.direction = "up";
    }
  }
  turnDown() {
    if (this.direction !== "up") {
      this.direction = "down";
    }
  }
}
class Food {
  constructor() {
    this.x = Math.floor(Math.random() * Math.floor(canvas.width / cellSize));
    this.y = Math.floor(Math.random() * Math.floor(canvas.height / cellSize));
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
  checkEaten(snake) {
    const head = snake.body[0];
    return head.x === this.x && head.y === this.y;
  }
}
const snake = new Snake();
const food = new Food();
let gameIsOver = false;
let score = 0;
function gameLoop() {
  if (gameIsOver) {
    return;
  }
  snake.update();
  if (snake.hitWall() || snake.hitSelf()) {
    gameIsOver = true;
    alert(`Game Over! Your score was ${score}.`);
    return;
  }
  if (food.checkEaten(snake)) {
    snake.body.push({});
    food.x = Math.floor(Math.random() * Math.floor(canvas.width / cellSize));
    food.y = Math.floor(Math.random() * Math.floor(canvas.height / cellSize));
    score++;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();
  food.draw();
  document.getElementById("score").innerText = `Score: ${score}`;
}
setInterval(gameLoop, 100);
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      snake.turnLeft();
      break;
    case "ArrowRight":
      snake.turnRight();
      break;
    case "ArrowUp":
      snake.turnUp();
      break;
    case "ArrowDown":
      snake.turnDown();
      break;
  }
});