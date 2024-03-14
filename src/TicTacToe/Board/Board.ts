import {Application} from 'pixi.js';
import {SmallRectangle} from "../Rectangles/SmallRectangle";
import {PlayerTurn} from "../PlayerTurn/PlayerTurn";
import {RandomStrategy} from "../Strategy/RandomStrategy";
import {Button} from "../Buttons/Button";

/**
 * The upper class that creates the 9 rectangles
 */
export class Board {
    public app: Application;
    public BoardRectangles: Array<SmallRectangle>;
    public strategy: RandomStrategy;
    public stage: PIXI.Container;
    public playerTurn: PlayerTurn;
    public playAgainButton: Button;

    /**
     *
     * @param x -> the x position of the board
     * @param y -> the y position of the board
     * @param width -> the width of the board
     * @param height -> the height of the board
     * @param stage
     */
    public constructor(x: number, y: number, width: number, height: number, stage: PIXI.Container) {
        this.stage = stage;
        this.playerTurn = new PlayerTurn(this.stage);
        this.BoardRectangles = [];
        this.playAgainButton = new Button(790, 500, 120, 80, this.stage);
        this.playAgainButton.onClickHandler = this.resetBoard.bind(this);


        this.createRectangles(x, y, width, height);
        this.strategy = new RandomStrategy(this.BoardRectangles, this.playerTurn, this.stage);
    }


    /**
     * Communication between a small rectangle and the Strategy;  used for Player1
     */
    public communicateForPlayer1(): boolean {

        return this.strategy.isPlayer1Turn();

    }

    /**
     *  Communication between a small rectangle and the Strategy;  used for Player2
     */
    public communicateForPlayer2(): void {

        this.checkResult();
        this.strategy.isPlayer2Turn();
    }

    /**
     * Checks if someone won the game
     */
    public checkResult(): void {

        this.strategy.checkWinner();
    }

    /**
     * Resets the board
     */
    public resetBoard = (): void => {

        for (let i: number = 0; i < 9; i++) {
            this.BoardRectangles[i].removeXO();
        }
        this.strategy.reset();


    };

    /**
     * Creates 9 rectangles
     * @param x -> the x position of the board
     * @param y -> the y position of the board
     * @param width -> the width of the board
     * @param height -> the height of the board
     */
    private createRectangles(x: number, y: number, width: number, height: number): void {
        let newXPosition: number = x,
            newYPosition: number = y,
            rectangle: SmallRectangle;

        for (let i = 1; i <= 9; i++) {

            rectangle = new SmallRectangle(newXPosition, newYPosition, width / 3, height / 3, this.stage);
            rectangle.onClickHandler1 = this.communicateForPlayer1.bind(this);
            rectangle.onClickHandler2 = this.communicateForPlayer2.bind(this);
            this.BoardRectangles.push(rectangle);
            newXPosition += width / 3;

            if (i % 3 == 0) {
                newXPosition = x;
                newYPosition += height / 3;
            }
        }
        for (let i = 0; i < 9; i++) {
            this.stage.addChild(this.BoardRectangles[i].graphics);
        }
    }
}

