import {Application} from 'pixi.js';

import {Board} from "./TicTacToe/Board/Board"

new class Main {

    public app:Application;
    private gameBoard : Board;

    constructor() {

        this.app = new Application(1600, 900,{antialias:true});
        document.body.appendChild(this.app.view);

        this.gameBoard= new Board(100,100,600,600,this.app.stage);



    }
};