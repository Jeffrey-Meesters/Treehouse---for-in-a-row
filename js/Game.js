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
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeyDown(event) {
        if (this.ready) {
            if (event.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            } else if ( event.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if ( event.key === 'ArrowDown') {
               this.playToken()
            }
        }
    }

    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for(let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }

        if (targetSpace !== null) {
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }
}
