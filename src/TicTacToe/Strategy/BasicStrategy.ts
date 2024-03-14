import {SmallRectangle} from "../Rectangles/SmallRectangle";
import {PlayerTurn} from "../PlayerTurn/PlayerTurn";
import {VictoryLine} from "../Shapes/VictoryLine/VictoryLine";
import {BasicText} from "../text/BasicText";
import {GameScore} from "../GameScore/GameScore";

/**
 * The strategy superclass with all the basic functionality
 */
export class BasicStrategy {

    public boardRectangles: Array<SmallRectangle>;
    public playerTurn: PlayerTurn;
    public stage: PIXI.Container;
    public positionsAvailable: Array<number>;
    public winner: string;
    public textObject: BasicText;
    public linesContainer: PIXI.Container;
    /** Used for storing the victory lines*/
    public GameScore: GameScore;

    /**
     *
     * @param theBoardRectangles
     * @param playerTurn
     * @param stage
     */
    public constructor(theBoardRectangles: Array<SmallRectangle>, playerTurn: PlayerTurn, stage: PIXI.Container) {

        this.boardRectangles = theBoardRectangles;
        this.playerTurn = playerTurn;
        this.stage = stage;
        this.positionsAvailable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.winner = 'Draw';
        /** winner can be X or O*/
        this.textObject = new BasicText(800, 400, '', {
            fontFamily: 'Georgia',
            fontSize: 45,
            fill: 0xffffff
        }, this.stage);
        this.GameScore = new GameScore(this.stage);

        this.linesContainer = new PIXI.Container();
        this.stage.addChild(this.linesContainer);
    }


    /**
     * Calls an instance of the victory line
     * @param rectangle1 -> where the line should begin
     * @param rectangle2 -> where the line should end
     * @param color
     * @param type -> there are 4 types : horizontal line,vertical line,oblique1 line and oblique2 line
     * @param winner -> who won the game : X is for PlayerOne and O is for PlayerTwo
     */
    public drawVictoryLine = (rectangle1: number, rectangle2: number, color: number, type: string, winner: string): void => {

        this.winner = winner;
        let victoryLine: VictoryLine = new VictoryLine(this.boardRectangles[rectangle1], this.boardRectangles[rectangle2], color, type);
        this.linesContainer.addChild(victoryLine.graphics);
    };

    /**
     * Checks if someone won the game horizontally
     */
    public checkHorizontally = (): void => {
        if (this.boardRectangles[0].checked === 0 && this.boardRectangles[1].checked === 0 && this.boardRectangles[2].checked === 0) {
            this.drawVictoryLine(0, 2, 0x00ff00, 'horizontal', 'O');
        }
        if (this.boardRectangles[3].checked === 0 && this.boardRectangles[4].checked === 0 && this.boardRectangles[5].checked === 0) {
            this.drawVictoryLine(3, 5, 0x00ff00, 'horizontal', 'O');
        }
        if (this.boardRectangles[6].checked === 0 && this.boardRectangles[7].checked === 0 && this.boardRectangles[8].checked === 0) {
            this.drawVictoryLine(6, 8, 0x00ff00, 'horizontal', 'O');
        }
        if (this.boardRectangles[0].checked === 1 && this.boardRectangles[1].checked === 1 && this.boardRectangles[2].checked === 1) {
            this.drawVictoryLine(0, 2, 0xff1010, 'horizontal', 'X');
        }
        if (this.boardRectangles[3].checked === 1 && this.boardRectangles[4].checked === 1 && this.boardRectangles[5].checked === 1) {
            this.drawVictoryLine(3, 5, 0xff1010, 'horizontal', 'X');
        }
        if (this.boardRectangles[6].checked === 1 && this.boardRectangles[7].checked === 1 && this.boardRectangles[8].checked === 1) {
            this.drawVictoryLine(6, 8, 0xff1010, 'horizontal', 'X');
        }
    };
    /**
     * Checks if someone won the game vertically
     */
    public checkVertically = (): void => {

        if (this.boardRectangles[0].checked === 0 && this.boardRectangles[3].checked === 0 && this.boardRectangles[6].checked === 0) {
            this.drawVictoryLine(0, 6, 0x00ff00, 'vertical', 'O');
        }
        if (this.boardRectangles[1].checked === 0 && this.boardRectangles[4].checked === 0 && this.boardRectangles[7].checked === 0) {
            this.drawVictoryLine(1, 7, 0x00ff00, 'vertical', 'O');
        }
        if (this.boardRectangles[2].checked === 0 && this.boardRectangles[5].checked === 0 && this.boardRectangles[8].checked === 0) {
            this.drawVictoryLine(2, 8, 0x00ff00, 'vertical', 'O');
        }
        if (this.boardRectangles[0].checked === 1 && this.boardRectangles[3].checked === 1 && this.boardRectangles[6].checked === 1) {
            this.drawVictoryLine(0, 6, 0xff1010, 'vertical', 'X');
        }
        if (this.boardRectangles[1].checked === 1 && this.boardRectangles[4].checked === 1 && this.boardRectangles[7].checked === 1) {
            this.drawVictoryLine(1, 7, 0xff1010, 'vertical', 'X');
        }
        if (this.boardRectangles[2].checked === 1 && this.boardRectangles[5].checked === 1 && this.boardRectangles[8].checked === 1) {
            this.drawVictoryLine(2, 8, 0xff1010, 'vertical', 'X');
        }
    };

    /**
     * Checks if someone won the game oblique
     */
    public checkObliques = (): void => {

        if (this.boardRectangles[0].checked === 0 && this.boardRectangles[4].checked === 0 && this.boardRectangles[8].checked === 0) {
            this.drawVictoryLine(0, 8, 0x00ff00, 'oblique1', 'O');
        }
        if (this.boardRectangles[2].checked === 0 && this.boardRectangles[4].checked === 0 && this.boardRectangles[6].checked === 0) {
            this.drawVictoryLine(6, 2, 0x00ff00, 'oblique2', 'O');
        }
        if (this.boardRectangles[0].checked === 1 && this.boardRectangles[4].checked === 1 && this.boardRectangles[8].checked === 1) {
            this.drawVictoryLine(0, 8, 0xff1010, 'oblique1', 'X');
        }
        if (this.boardRectangles[2].checked === 1 && this.boardRectangles[4].checked === 1 && this.boardRectangles[6].checked === 1) {
            this.drawVictoryLine(6, 2, 0xff1010, 'oblique2', 'X');
        }
    };

    /**
     * Shows on the screen who won the game
     */
    public checkForWin = (): void => {

        if (this.winner !== 'Draw') {
            for (let i = 0; i < 9; i++)
                this.boardRectangles[i].checked = -1;

            this.playerTurn.gameWon();
            if (this.winner === 'X') {
                this.textObject.text.text = 'The winner is PlayerOne';
            } else if (this.winner === 'O') {
                this.textObject.text.text = 'The winner is PlayerTwo';
            }
            this.GameScore.updateScore(this.winner);

            this.winner = 'Draw';
        }
    };

    /**
     * Checks for a draw
     */
    public checkForDraw = (): void => {
        let result = 0;
        for (let i: number = 0; i < this.boardRectangles.length; i++) {
            if (this.boardRectangles[i].checked >= 0) result++;
        }

        if (result === 9 && this.winner === 'Draw') {
            this.GameScore.updateScore(this.winner);
            this.textObject.text.text = 'Draw ';
            this.playerTurn.draw();
        }
    };

    /**
     * Method used for checking if one of the players won the game
     */
    public checkWinner(): void {
        this.checkHorizontally();
        this.checkVertically();
        this.checkObliques();
        this.checkForDraw();
        this.checkForWin();
    }


    /**
     * Resets the board
     */
    public reset(): void {
        this.playerTurn.reset();
        this.positionsAvailable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.textObject.text.text = '';

        if (this.linesContainer) {
            this.linesContainer.removeChildren();
        }
    }
}