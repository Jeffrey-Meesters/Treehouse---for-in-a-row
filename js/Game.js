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
        return `rgb(${this.randomColor()},  ${this.randomColor()}, ${this.randomColor()})`;
    }

    /**
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers(num) {
        // let players = [
        //     new Player('Player 1', 1, '#e1525', true),
        //     new Player('Player 2', 2, '#e59a13')
        // ];

        let players = [];

        for (let i = 0; i < num; i += 1 ) {
            const player = new Player(`Player-${i}`, i, this.createColor());
            players.push(player);
        }

        return players;
    }

    startGame() {}
}
