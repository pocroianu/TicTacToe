/**
 * Text class used for showing basic text on display.
 */
export class BasicText{

    text:PIXI.Text;

    /**
     *
     * @param x -> the x position of the text class
     * @param y -> the y position of the text class
     * @param theText -> the string that you want to show
     * @param stage
     */
    constructor(x:number,y:number,theText:string,style,stage:PIXI.Container){

        this.text=new PIXI.Text(theText,style);
        this.text.position.set(x,y);
        stage.addChild(this.text);
    }
}