import {basicShape} from "../BasicShape/BasicShape";

/**
 * Responsible for drawing the X inside a small rectangle
 */
export class X extends basicShape {
    /**
     * @param xPosition
     * @param yPosition
     * @param rectangleWidth
     * @param rectangleHeight
     */
    constructor(xPosition: number, yPosition: number, rectangleWidth: number, rectangleHeight) {
        super();

        this.graphics.moveTo(xPosition + 45, yPosition + rectangleWidth - 45);
        this.graphics.lineTo(xPosition + rectangleWidth - 45, yPosition + 45);

        this.graphics.moveTo(xPosition + 45, yPosition + 45);
        this.graphics.lineTo(xPosition + rectangleHeight - 45, yPosition + rectangleHeight - 45);

    }

}