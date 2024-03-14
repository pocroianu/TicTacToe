import {basicShape} from "../BasicShape/BasicShape";

/**
 * Responsible for drawing the O inside a small rectangle
 */
export class O extends basicShape {

    /**
     *
     * @param xPosition
     * @param yPosition
     * @param rectangleWidth
     * @param rectangleHeight
     */
    constructor(xPosition: number, yPosition: number, rectangleWidth: number, rectangleHeight) {
        super();
        this.graphics.lineStyle(12, 0x00ff00);
        this.graphics.drawCircle(xPosition + 100, yPosition + 100, 60);
    }
}