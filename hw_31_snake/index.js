import Grid from './js/grid.js';
import { DIRECTION as D } from './js/helpers.js';

class Snake extends Grid {
    static snakeCellCssClass = 'snake-cell';
    static snakeCssClass = 'snake';
    static snakeHeadCssClass = 'snake-head';
    static snakeBodyCssClass = 'snake-body';
    static gridContainerSelector = '#snake-container';

    #snake = [];
    #process = null;
    #speed = 0;
    #startBtn = this.find('#snake-start-game');
    #endBtn = this.find('#snake-end-game');
    #form = this.find('#snake-controls-form');
    #messageContainer = this.find('#snake-message');
    #scoreContainer = this.find('#snake-score');
    #score = 0;
    #foodCoords = null;
    #foodContainer = this.#findByCoords({ cell: 1, row: 1 });



    constructor({ boxSize, gridCount, scoreToWin }) {
        super({
            boxSize,
            gridCount,
            gridCellCssClass: Snake.snakeCellCssClass,
            gridContainerSelector: Snake.gridContainerSelector,
        });
        this.direction = D.LEFT;
        this.scoreToWin = scoreToWin;

        this.#init();
    }


    #init() {
        this.#startBtn.addEventListener('click', () => {
            this.#start();
        });

        this.#endBtn.addEventListener('click', () => {
            this.#endGame();
        });

        document.addEventListener('keydown', (event) => {
            this.#updateDirection(event);
        })
    }

    #start() {
        this.#score = 0;
        this.#scoreContainer.firstElementChild.textContent = `${this.#score}`;
        let middleCell = Math.floor(this.gridCount) / 2;
        this.#snake = this.#buildSnake(middleCell, middleCell);
        this.#speed = +this.#form.speed.value;
       
        this.#startBtn.style.display = "none";
        this.#endBtn.style.display = "block";
        this.#messageContainer.innerHTML = "Welcome to Snake!";

        this.#process = setInterval(() => {

            let { cell, row } = this.#noWallMode();
            
            let snakePartToShift = null;

            switch (this.direction) {
                case D.LEFT: {
                    snakePartToShift = {
                        cell: cell - 1,
                        row,
                    };
                }; break;
                case D.RIGHT: {
                    snakePartToShift = {
                        cell: cell + 1,
                        row,
                    };
                }; break;
                case D.UP: {
                    snakePartToShift = {
                        cell,
                        row: row - 1,
                    };
                }; break;
                case D.DOWN: {
                    snakePartToShift = {
                        cell,
                        row: row + 1,
                    };
                }; break;
            };

            this.#snake.unshift(snakePartToShift);

            this.#clear();
            if (this.#checkTailCrash() || (this.#checkIfFoodEaten() && this.#score === this.scoreToWin)) {
                this.#endGame();
            } else {
                this.#update();
            }
            
        }, this.#speed);

        this.#generateFood();

    }

    #noWallMode() {
        let snakePartToShift;

        if (this.#snake[0].cell === 0 && this.direction === D.LEFT) {
            snakePartToShift = { cell: this.gridCount - 1, row: this.#snake[1].row };
            this.#snake.unshift(snakePartToShift);
            this.#snake.pop();
        } else if (this.#snake[0].cell === this.gridCount - 1 && this.direction === D.RIGHT) {
            snakePartToShift = { cell: 0, row: this.#snake[1].row };
            this.#snake.unshift(snakePartToShift);
            this.#snake.pop();
        } else if (this.#snake[0].row === 0 && this.direction === D.UP) {
            snakePartToShift = { cell: this.#snake[1].cell, row: this.gridCount - 1 };
            this.#snake.unshift(snakePartToShift);
            this.#snake.pop();
        } else if (this.#snake[0].row === this.gridCount - 1 && this.direction === D.DOWN) {
            snakePartToShift = { cell: this.#snake[1].cell, row: 0 };
            this.#snake.unshift(snakePartToShift);
            this.#snake.pop();
        }

        

        return this.#snake[0];
    } 
     
    #generateFood() {
        this.#foodContainer.innerHTML = '';

        const min = 0;
        const max = this.gridCount - 1;

        do {
            let row = Math.floor(Math.random() * (max - min + 1)) + min;
            let cell = Math.floor(Math.random() * (max - min + 1)) + min;
            this.#foodCoords = { cell: cell, row: row };
            this.#foodContainer = this.#findByCoords(this.#foodCoords);
        } while (this.#foodContainer.classList.contains('snake'));

        this.#foodContainer.innerHTML = '<img src="img/apple.png" alt="">';
    }

    #clear() {
        let cells = this.find(`.${Snake.snakeCssClass}`);
  
        cells.forEach(cell => {
            cell.className = Snake.snakeCellCssClass;
        })
    }

    #update() {
     
        for (let [index, snakePart] of this.#snake.entries()) {
            let cellElement = this.#findByCoords(snakePart);

            if (index === 0) {
                cellElement.classList.add(Snake.snakeHeadCssClass, Snake.snakeCssClass);

                continue;
            }

            cellElement.classList.add(Snake.snakeBodyCssClass, Snake.snakeCssClass);
        }
    }

    #checkTailCrash() {
        let isDuplicate = false;
        for (let i in this.#snake) {
            for (let j in this.#snake) {
                if (i !== j && JSON.stringify(this.#snake[i]) === JSON.stringify(this.#snake[j])) {
                    isDuplicate = true;
                    break
                }
            }
            if (isDuplicate) {
                break; 
            }
        }

        return isDuplicate;
    }

    #checkIfFoodEaten() {
        let foodEaten = false;
        if (JSON.stringify(this.#snake[0]) === JSON.stringify(this.#foodCoords)) {
            foodEaten = true;
            this.#score++;
            this.#scoreContainer.firstElementChild.textContent = `${this.#score}`;
            if (this.#score < this.scoreToWin) {
                this.#generateFood();
            }
        } else {
            this.#snake.pop();
        }

        return foodEaten;
    }

    #updateDirection(event) {
        let key = event.key;

        if (key === 'ArrowLeft' && this.direction != D.RIGHT) {
            this.direction = D.LEFT;
        } else if (key === 'ArrowUp' && this.direction != D.DOWN) {
            this.direction = D.UP;
        } else if (key === 'ArrowRight' && this.direction != D.LEFT) {
            this.direction = D.RIGHT;
        } else if (key === 'ArrowDown' && this.direction != D.UP) {
            this.direction = D.DOWN;
        } 
    }

    #findByCoords({ row, cell }) {
        return this.find(`[data-cell="${cell}"][data-row="${row}"]`, this.gridContainer)
    }

    #buildSnake(startCell, startRow, size = 5) {
        return new Array(size).fill(null).map((_value, index) => {
            return { cell: startCell + index, row: startRow };
        })
    }

    #endGame() {
        clearInterval(this.#process);
        this.#clear();
        if (this.#score < this.scoreToWin) {
            this.#messageContainer.textContent = `Game over! Your score is ${this.#score}.`;
        } else {
            this.#messageContainer.textContent = `You won! Your score is ${this.#score}.`;
        }
        this.#startBtn.style.display = "block";
        this.#endBtn.style.display = "none";
        this.#foodContainer.innerHTML = '';    
    }
}

new Snake({
    boxSize: 30,
    gridCount: 16,
    scoreToWin: 5
})



