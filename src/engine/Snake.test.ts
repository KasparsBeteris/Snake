import { Snake } from './Snake'
import { Cell } from './Cell'
import { Game } from './Game'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })
    it("should be able to move right", () => {
        const snake = new Snake()

        snake.setDirection('Right')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should be able to move down", () => {
        const snake = new Snake()
        
        snake.setDirection('Down')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should remember direction", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move();

        expect(snake.getDirection()).toBe('Down')
    })
    it("should be able to move up", () => {
        const snake = new Snake()

        snake.setDirection('Up');
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should be able to move left", () => {
        const snake = new Snake()
        
        snake.setDirection('Down')
        snake.move()

        snake.setDirection('Left')
        snake.move()


        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })
    it("should be able to grow", () => {
        const snake = new Snake()
    
        snake.grow()

        snake.move();
        snake.move();
        snake.move();


        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail().length).toBe(5);
    })

    it("should not be able to move from Right to Left", () => {
        const snake = new Snake()
    
        snake.setDirection('Right')
        snake.move();
        snake.move();
        snake.setDirection('Left')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail()).toEqual([new Cell(3, 0), new Cell(4, 0)])
    })
    it("should not be able to move from Left to Right", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move();
        snake.setDirection('Left')
        snake.move();
        snake.setDirection('Right')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(0, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 1), new Cell(1, 1)])
    })
    it("should not be able to move from Down to Up", () => {
        const snake = new Snake()
    
        snake.setDirection('Down')
        snake.move();
        snake.move();
        snake.setDirection('Up')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(2, 3))
        expect(snake.getTail()).toEqual([new Cell(2, 1), new Cell(2, 2)])
    })
    it("should not be able to move from Up to Down", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move();
        snake.move();
        snake.setDirection('Right')
        snake.move();
        snake.setDirection('Up')
        snake.move();
        snake.setDirection('Down')
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(3, 2), new Cell(3, 1)])
    })
})