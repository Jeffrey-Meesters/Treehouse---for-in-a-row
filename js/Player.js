class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param   {Number}   num - Number of token objects to be created
     * @return  {array}     tokens - an array of new token objects
     */
    createTokens(num) {
        let tokens = [];

        for (let i = 0; i < num; i += 1) {
            const token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }

    get unusedTokens() {
        return this.tokens.filter(token => !token.droped);
    }

    get activeToken() {
        return  this.unusedTokens[0];
    }
}
