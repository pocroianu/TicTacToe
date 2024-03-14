/**
 * A simple rectangle that can be clicked
 */
export class Button {
    public graphics: PIXI.Graphics;
    public text: PIXI.Text;
    public onClickHandler: Function;
    public sprite: PIXI.Sprite;

    /**
     *
     * @param x -> position of the button
     * @param y -> position of the button
     * @param width of the button
     * @param height of the button
     * @param stage
     */
    public constructor(x: number, y: number, width: number, height: number, stage: PIXI.Container) {
        this.sprite = PIXI.Sprite.fromImage('images/TicTacToe/button_play_again.png');
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.position.set(x, y);
        this.sprite.on('pointertap', this.handleClick, this);
        stage.addChild(this.sprite);
    }

    /**
     * Handler for the button click
     */
    private handleClick() {
        this.onClickHandler.call(this);
    }

}