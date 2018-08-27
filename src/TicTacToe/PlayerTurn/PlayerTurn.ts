/**
 * Used to store that players turns,to change the turn and to end the game.
 */
export class PlayerTurn {

    public turn: string;
    public stage: PIXI.Container;
    public text: PIXI.Text;
    public text2: PIXI.Text;

    /**
     * @param stage
     */
    public constructor(stage: PIXI.Container) {
        this.stage = stage;
        this.turn = 'PlayerOne';

        this.text2 = new PIXI.Text('Turn :', {
            fontFamily: 'Arial',
            fill: 0xffffff,
            fontSize: 35,
            align: 'right'
        });
        this.text = new PIXI.Text('PlayerOne', {
            fontFamily: 'Arial',
            fill: 0xff1010,
            fontSize: 35,
            align: 'right'
        });
        this.text2.position.set(800, 650);
        this.text.position.set(900, 650);
        stage.addChild(this.text2, this.text);
    }

    /**
     * Changes the player's turn
     */
    public swapPlayerTurn(): void {
        if (this.turn === 'PlayerOne') {
            this.turn = 'PlayerTwo';
            this.text.style.fill = 0x00ff00;
            this.text.text = this.turn + ' is thinking';
        }
        else if (this.turn === 'PlayerTwo') {
            this.turn = 'PlayerOne';
            this.text.style.fill = 0xff1010;
            this.text.text = this.turn;
        }
    }

    /**
     * The game was won by someone
     */
    public gameWon(): void {
        this.turn = 'Won';
        this.text.style.fill = 0xffffff;
        this.text.text = 'Game Won';
    }

    /**
     * The game ended with a draw
     */
    public draw(): void {
        this.turn = 'Draw';
        this.text.style.fill = 0xffffff;
        this.text.text = 'End';
    }

    /**
     * Resets the player's turn
     */
    public reset(): void {
        this.turn = 'PlayerTwo';
        this.swapPlayerTurn();
    }
}