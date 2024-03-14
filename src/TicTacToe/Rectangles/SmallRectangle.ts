import {basicShape} from "../Shapes/BasicShape/BasicShape";
import {X} from "../Shapes/XO/X";
import {O} from "../Shapes/XO/O";


/**
 * Small rectangle class
 */
export class SmallRectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    public stage: PIXI.Container;
    public graphics: PIXI.Graphics;
    public onClickHandler1: Function;
    public onClickHandler2: Function;

    public checked: number;
    /** -1 is for unchecked,0 is for O checked and 1 is for X checked */
    public XO: basicShape;

    /**
     *
     * @param xPosition
     * @param yPosition
     * @param width
     * @param height
     * @param stage
     */
    public constructor(xPosition: number, yPosition, width: number, height: number, stage: PIXI.Container) {
        this.stage = stage;
        this.x = xPosition;
        this.y = yPosition;
        this.width = width;
        this.height = height;
        this.checked = -1;
        this.XO = new basicShape();
        this.stage.addChild(this.XO.graphics);

        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(12, 0x0000ff, 1);
        this.graphics.beginFill(0x000000);
        this.graphics.drawRect(this.x, this.y, this.width, this.height);
        this.graphics.endFill();
        this.graphics.interactive = true;
        this.graphics.buttonMode = true;

        this.graphics.on('pointertap', this.handleMouseDown, this);
    }

    /**
     * Method used for drawing the X inside a small rectangle
     */
    public drawX(): void {
        this.checked = 1;
        this.XO = new X(this.x, this.y, this.width, this.height);
        this.stage.addChild(this.XO.graphics);
    }


    /**
     * Method used for drawing the O inside a small rectangle
     */
    public drawO(): void {
        this.checked = 0;
        this.XO = new O(this.x, this.y, this.width, this.height);
        this.stage.addChild(this.XO.graphics);
    }

    /**
     * Removes the X or the O from the Board
     */
    public removeXO(): void {
        this.checked = -1;
        this.stage.removeChild(this.XO.graphics);
    }

    /**
     * Handler responsible for the PlayerOne's mouseclick
     */
    public handleMouseDown(): void {

        if (this.checked === -1) {
            if (this.onClickHandler1.call(this))
                this.drawX();
        }
        this.onClickHandler2.call(this);
    }


}