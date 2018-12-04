class Player {
	constructor(color, game) {
		this.color 		= color;
		this.canPlay 	= false;
		this.pawns 		= [];
		this.game = game;
	}

	losesPawn(game){
		
		this.pawns.splice(0,1);

			if(this.pawns.lenght === 0){
				let $dialog = $('#dialog');

				$dialog.append('<p>Joueur ' + this.color + ' a perdu ! </p>');
				$dialog.dialog();

			}

		
	}

}