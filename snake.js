class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.total = 0;
    this.tail = [];
  }

  reset() {
     this.total = 0;
        this.tail = [];
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    score = 0;
  }

  death() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
       this.reset()
      }
    }
  }

  eat(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      score++;
      return true;
    } else {
      return false;
    }
  }

  move() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x += this.speedX * scl;
    this.y += this.speedY * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  show() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  direction(x, y) {
    this.speedX = x;
    this.speedY = y;
  }
}