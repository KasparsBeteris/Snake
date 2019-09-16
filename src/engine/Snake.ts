import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head = new Cell(2,0)
  tail = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = 'Right';
  tempDirection = '';
  tailSize = 2

  setDirection(direction: Direction) {
    this.direction = direction
  }

  move() {
    this.tail.push(this.head);
    if (this.tailSize < this.tail.length){
      this.tail.shift();
    }
    
  switch(this.direction){
    case 'Right':
      if (this.tempDirection == 'Left'){
        this.head = new Cell(this.head.x -1, this.head.y)
        break
      }
      this.head = new Cell(this.head.x +1, this.head.y)
      this.tempDirection = 'Right'
      break

    case 'Down':
        if (this.tempDirection == 'Up'){
          this.head = new Cell(this.head.x, this.head.y -1)
          break
        }
      this.head = new Cell(this.head.x, this.head.y +1)
      this.tempDirection = 'Down'
      break

    case 'Up':
        if (this.tempDirection == 'Down'){
          this.head = new Cell(this.head.x, this.head.y +1)
          break
        }
      this.head = new Cell(this.head.x, this.head.y -1)
      this.tempDirection = 'Up'
      break

    case 'Left':
      if (this.tempDirection == 'Right'){
        this.head = new Cell(this.head.x +1, this.head.y)
        break
      }
      this.head = new Cell(this.head.x -1, this.head.y)
      this.tempDirection = 'Left'
      break
  }
  
  }
  grow() {
    this.tailSize +=3;
  }
  

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
