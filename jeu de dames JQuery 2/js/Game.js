class Game {

	constructor() {
		this.playerWhite = new Player('bleu', this);
		this.playerBlack = new Player('rouge', this);

		this.whichPlayerBegins();
	}


	whichPlayerBegins() {
		
		let random = Math.random();
		
		if (random < 0.5) {
			this.playerWhite.canPlay = true;
		} else {
			this.playerBlack.canPlay = true;
		}
	}

	switchTurn() {
		this.playerWhite.canPlay = !this.playerWhite.canPlay;
		this.playerBlack.canPlay = !this.playerBlack.canPlay;
	}

	otherPlayer() {
		return this.playerWhiteCanPlay ? this.playerBlack : this.playerWhite;
	}
}