class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers(2);
        this.ready = false;
    }

    randomColor() {
        return Math.floor( Math.random() * 255 );
    }

    createColor() {
        return `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
    }

    /**
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers(num) {
        let players = [];

        for (let i = 0; i < num; i += 1 ) {
            let j = i + 1;
            const player = new Player(`Player-${j}`, j, this.createColor());
            if (i = 1) {
                player.active = true;
            }
            players.push(player);
        }

        return players;
    }

    get activePlayer() {
        return this.players.find(player => player.active);
    }

    startGame() {
        this.board.drawHTMLBoard();
        console.log(this.activePlayer);
        this.activePlayer.activeToken.drawHTMLToken();

        this.ready = true;
    }
}
