import {BasicStrategy} from "./BasicStrategy";
import {SmallRectangle} from "../Rectangles/SmallRectangle";

/**
 * This strategy makes PlayerTwo (CPU) make a move at a random position
 */
export class RandomStrategy extends BasicStrategy {

    /**
     *
     * @param theBoardRectangles
     * @param playerTurn
     * @param stage
     */
    public constructor(theBoardRectangles: Array<SmallRectangle>, playerTurn, stage: PIXI.Container) {
        super(theBoardRectangles, playerTurn, stage);
    }

    /**
     * Method that checks if it is Player1's turn
     */
    public isPlayer1Turn(): boolean {

        if (this.playerTurn.turn === 'PlayerOne') {
            this.playerTurn.swapPlayerTurn();
            return true;
        }
        return false;
    }

    /**
     * Method that checks if it is Player2's turn
     */
    public isPlayer2Turn(): boolean {
        setTimeout(() => {

            if (this.playerTurn.turn === 'PlayerTwo') {

                let positionNumber = this.availablePositions();
                console.log('The O position is : ' + positionNumber);
                this.boardRectangles[positionNumber].drawO();

                this.checkWinner();
                this.playerTurn.swapPlayerTurn();

            }

        }, 500);

        return false;
    }

    /**
     * Method that checks which positions are available and returns the next
     * element for PlayerTwo
     */
    public availablePositions(): number {

        /**
         * Returns a random number between the interval [min,max]
         * @param min
         * @param max
         */
        function randomIntFromInterval(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (let i = 0; i < 9; i++) {
            if (this.boardRectangles[i].checked >= 0) {
                this.positionsAvailable[i] = -1;
            }
        }
        console.log('Positions available :   ' + this.positionsAvailable);
        let newArray = this.positionsAvailable.filter((element) => {
            return element >= 0;
        });

        let newPosition: number = this.checkIfPlayerOneHasTwo();

        if (this.positionsAvailable[newPosition] >= 0) {
            if (newPosition != -1) {

                console.log('Nu mai e random : ' + this.positionsAvailable[newPosition]);
                return this.positionsAvailable[newPosition];
            }
        }
        return newArray[randomIntFromInterval(0, newArray.length - 1)];
    }


    /**
     *
     */
    private checkIfPlayerOneHasTwo(): number {

        let checkedX: Array<number> = [];
        for (let i: number = 0; i < this.boardRectangles.length; i++) {
            if (this.boardRectangles[i].checked === 1) {
                checkedX.push(i);
            }
        }

        let playerTwoMove: number = -1;

        for (let i: number = 0; i < checkedX.length - 1; i++) {
            for (let j: number = 1; j < checkedX.length, j != i; j++) {

                playerTwoMove = RandomStrategy.check(checkedX[i], checkedX[j]);
                console.log('checkifPlayerOneHasTwo');
                return playerTwoMove;
            }
        }
        console.log('checkifPlayerOneHasTwo');
        return -1;
    }

    /**
     *
     * @param number
     * @param number2
     */
    private static check(number: number, number2: number): number {
        switch (number) {
            case 0:
                switch (number2) {
                    case 1:
                        return 2;
                    case 3:
                        return 6;
                    case 4:
                        return 8;
                    case 2:
                        return 1;
                    case 6:
                        return 3;
                    case 8:
                        return 4;
                }
                break;
            case 1:
                switch (number2) {
                    case 0:
                        return 2;
                    case 2:
                        return 1;
                    case 4:
                        return 8;
                    case 7:
                        return 4;
                }
                break;
            case 2:
                switch (number2) {
                    case 0:
                        return 1;
                    case 1:
                        return 0;
                    case 5:
                        return 8;
                    case 8:
                        return 5;
                    case 4:
                        return 6;
                    case 6:
                        return 4;
                }
                break;
            case 3:
                switch (number2) {
                    case 0:
                        return 6;
                    case 6:
                        return 0;
                    case 4:
                        return 5;
                    case 5:
                        return 4;
                }
                break;
            case 4:
                switch (number2) {
                    case 0:
                        return 8;
                    case 1:
                        return 7;
                    case 2:
                        return 6;
                    case 3:
                        return 5;
                    case 6:
                        return 2;
                    case 7:
                        return 1;
                    case 8:
                        return 0;
                }
                break;
            case 5:
                switch (number2) {
                    case 4:
                        return 3;
                    case 3:
                        return 4;
                    case 2:
                        return 8;
                    case 8:
                        return 8;

                }
                break;
            case 6:
                switch (number2) {
                    case 3:
                        return 0;
                    case 0:
                        return 3;
                    case 7:
                        return 8;
                    case 8:
                        return 7;
                    case 4:
                        return 2;
                    case 2:
                        return 4;
                }
                break;
            case 7:
                switch (number2) {
                    case 6:
                        return 8;
                    case 8:
                        return 6;
                    case 4:
                        return 1;
                    case 1:
                        return 4;
                }
                break;
            case 8:
                switch (number2) {
                    case 0:
                        return 4;
                    case 4:
                        return 0;
                    case 6:
                        return 7;
                    case 7:
                        return 6;
                    case 2:
                        return 5;
                    case 5:
                        return 2;
                }
                break;
        }
        return -1;
    }
}
