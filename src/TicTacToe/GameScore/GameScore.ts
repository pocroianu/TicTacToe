import {BasicText} from "../text/BasicText";

/**
 * Class that keeps the game's score
 */
export class GameScore {

    public scorePlayerOne: number;
    public scorePlayerTwo: number;
    public textPlayer1: BasicText;
    public textPlayer2: BasicText;
    public WinsLossesDrawsPlayerOne: Array<number>;
    public WinsLossesDrawsPlayerTwo: Array<number>;

    /**
     *
     * @param stage
     */
    public constructor(stage: PIXI.Container) {

        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
        this.WinsLossesDrawsPlayerOne = [0, 0, 0];
        this.WinsLossesDrawsPlayerTwo = [0, 0, 0];
        this.textPlayer1 = new BasicText(820, 100, 'PlayerOne has   ' + this.scorePlayerOne + '   points  '
            + this.WinsLossesDrawsPlayerOne[0] + 'W ' + this.WinsLossesDrawsPlayerOne[1] + 'D ' + this.WinsLossesDrawsPlayerOne[2] + 'L',
            {
                fontFamily: 'Georgia',
                fontSize: 35,
                fill: 0xff1010
            }, stage);
        this.textPlayer2 = new BasicText(820, 140, 'PlayerTwo has   ' + this.scorePlayerTwo + '   points  '
            + this.WinsLossesDrawsPlayerTwo[0] + 'W ' + this.WinsLossesDrawsPlayerTwo[1] + 'D ' + this.WinsLossesDrawsPlayerTwo[2] + 'L'
            , {
                fontFamily: 'Georgia',
                fontSize: 35,
                fill: 0x00ff00
            }, stage);
    }

    /**
     * Updates the game's score
     * @param gameWinner
     */
    public updateScore(gameWinner: string): void {

        switch (gameWinner) {
            case 'X':
                this.scorePlayerOne += 3;
                this.WinsLossesDrawsPlayerOne[0] += 1;
                this.WinsLossesDrawsPlayerTwo[2] += 1;
                this.updateText();
                break;
            case 'O':
                this.scorePlayerTwo += 3;
                this.WinsLossesDrawsPlayerTwo[0] += 1;
                this.WinsLossesDrawsPlayerOne[2] += 1;
                this.updateText();
                break;
            case 'Draw':
                this.scorePlayerOne += 1;
                this.scorePlayerTwo += 1;
                this.WinsLossesDrawsPlayerOne[1] += 1;
                this.WinsLossesDrawsPlayerTwo[1] += 1;
                this.updateText();
                break;
        }
    }

    /**
     *Updates text1
     */
    public updateTextP1(): void {
        this.textPlayer1.text.text = 'PlayerOne has   ' + this.scorePlayerOne + '   points  '
            + this.WinsLossesDrawsPlayerOne[0] + 'W ' + this.WinsLossesDrawsPlayerOne[1] + 'D ' + this.WinsLossesDrawsPlayerOne[2] + 'L';
    }

    /**
     *Updates text2
     */
    public updateTextP2(): void {
        this.textPlayer2.text.text = 'PlayerTwo has   ' + this.scorePlayerTwo + '   points  '
            + this.WinsLossesDrawsPlayerTwo[0] + 'W ' + this.WinsLossesDrawsPlayerTwo[1] + 'D ' + this.WinsLossesDrawsPlayerTwo[2] + 'L';
    }

    /**
     * Updates the text for both players
     */
    public updateText(): void {

        this.updateTextP1();
        this.updateTextP2();
    }
}