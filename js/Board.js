class Board {
    constructor(rows = 6, columns = 7) {
        this.rows = rows;
        this.columns = columns;
        this.spaces = this.createSpaces();
    }

    /**
     * Generates 2D array of spaces.
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        let spaces = [];

        for( let x = 0; x < this.columns; x += 1 ) {
            const column = [];

            for ( let y = 0; y < this.rows; y += 1 ) {
                const space = new Space(x, y);
                column.push(space);
            }

            spaces.push(column);
        }

        return spaces;
    }

    drawHTMLBoard() {
        for(let column of this.spaces) {
            for(let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}
