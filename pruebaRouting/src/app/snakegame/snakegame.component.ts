import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snakegame',
  templateUrl: './snakegame.component.html',
  styleUrls: ['./snakegame.component.scss']
})
export class SnakegameComponent implements OnInit {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  box: number = 32;
  snake: { x: number, y: number }[] = [{ x: 9 * this.box, y: 10 * this.box }];
  food: { x: number, y: number } = { x: 0, y: 0 };
  direction: string = '';
  gameInterval!: any;
  score: number = 0;
  gameOver: boolean = false; // Control del estado del juego

  ngOnInit(): void {
    this.startGame();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    if (this.gameOver) return; // Ignora las teclas si el juego terminó

    const key = event.key;
    if (key === 'ArrowUp' && this.direction !== 'DOWN') this.direction = 'UP';
    else if (key === 'ArrowDown' && this.direction !== 'UP') this.direction = 'DOWN';
    else if (key === 'ArrowLeft' && this.direction !== 'RIGHT') this.direction = 'LEFT';
    else if (key === 'ArrowRight' && this.direction !== 'LEFT') this.direction = 'RIGHT';
  }

  startGame() {
    this.gameOver = false;
    this.score = 0;
    this.snake = [{ x: 9 * this.box, y: 10 * this.box }];
    this.direction = '';
    this.generateFood();
    this.canvas = document.getElementById('snake') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.gameInterval = setInterval(this.drawGame.bind(this), 100);
  }

  drawGame() {
    if (this.gameOver) return;

    // Background
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Snake
    this.snake.forEach((segment, index) => {
      this.ctx.fillStyle = index === 0 ? 'green' : 'lime';
      this.ctx.fillRect(segment.x, segment.y, this.box, this.box);
    });

    // Draw Food
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.food.x, this.food.y, this.box, this.box);

    // Draw Score
    this.ctx.fillStyle = 'white';
    this.ctx.font = '20px Arial';
    this.ctx.fillText('Puntos: ' + this.score, 10, 20);

    // Move Snake
    const head = { ...this.snake[0] };
    if (this.direction === 'UP') head.y -= this.box;
    if (this.direction === 'DOWN') head.y += this.box;
    if (this.direction === 'LEFT') head.x -= this.box;
    if (this.direction === 'RIGHT') head.x += this.box;

    // Toroidal Wrapping Logic
    if (head.x < 0) head.x = this.canvas.width - this.box;
    if (head.x >= this.canvas.width) head.x = 0;
    if (head.y < 0) head.y = this.canvas.height - this.box;
    if (head.y >= this.canvas.height) head.y = 0;

    // Check if snake eats the food
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score++;
      this.generateFood();
    } else {
      this.snake.pop(); // Remove the tail
    }

    // Check for collision with itself
    if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      this.endGame();
    }

    this.snake.unshift(head); // Add new head
  }

  generateFood() {
    this.food.x = Math.floor(Math.random() * 17 + 1) * this.box;
    this.food.y = Math.floor(Math.random() * 15 + 3) * this.box;
  }

  endGame() {
    clearInterval(this.gameInterval);
    this.gameOver = true;
  }
}
