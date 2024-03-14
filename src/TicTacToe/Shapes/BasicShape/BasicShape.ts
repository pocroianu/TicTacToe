/**
 * Superclass Shape
 */
export class basicShape {
    graphics: PIXI.Graphics;

    constructor() {

        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(13, 0xff0000);

    }

}