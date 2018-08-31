import {basicShape} from "../BasicShape/BasicShape";
import {SmallRectangle} from "../../Rectangles/SmallRectangle";


/**
 * Used to draw the line when someone wins the game
 */
export class VictoryLine extends basicShape {

    /**
     * @param startRectangle
     * @param endRectangle
     * @param type -> there are 4 line types : horizontal,vertical,oblique1 and oblique2
     */
    constructor(startRectangle: SmallRectangle, endRectangle: SmallRectangle, color: number, type: string) {
        super();
        this.graphics.lineStyle(27, color, 0.6);
        switch (type) {
            case 'horizontal' :
                this.graphics.moveTo(startRectangle.x - 50, startRectangle.y + startRectangle.height / 2);
                this.graphics.lineTo(endRectangle.x + startRectangle.width + 50, endRectangle.y + endRectangle.height / 2);
                break;
            case 'vertical' :
                this.graphics.moveTo(startRectangle.x + startRectangle.width / 2, startRectangle.y - 50);
                this.graphics.lineTo(endRectangle.x + endRectangle.width / 2, endRectangle.y + endRectangle.height + 50);
                break;
            case 'oblique1' :
                this.graphics.moveTo(startRectangle.x - 25, startRectangle.y - 25);
                this.graphics.lineTo(endRectangle.x + endRectangle.width + 25, endRectangle.y + endRectangle.height + 25);
                break;
            case 'oblique2':
                this.graphics.moveTo(startRectangle.x - 25, startRectangle.y + startRectangle.height + 25);
                this.graphics.lineTo(endRectangle.x + endRectangle.width + 25, endRectangle.y - 25);
                break;
        }
    }
}