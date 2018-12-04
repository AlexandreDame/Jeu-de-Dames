class Platform{
	
	constructor(game) {
		
		this.$platformElt = $('#platform');
		this.rows = [];

		this.init(game);
	}

	init(game) {

        let $row,
            row, 
            square, 
            $square,
            color, 
            droppable;


        for (let y = 0; y < 8; y ++) {
            $row = $('<div class=\'platform-row\'></div>');
            row = [];

            for (let x = 0; x < 8; x ++) {

                
                if ((x + y) % 2 === 0) {
                    color       = 'silver';
                    droppable   = true; 

                } else {
                    color       = 'yellow';
                    droppable   = false; 
                }
               
               
                
                $square = $('<div class=\'square ' + color + '\'></div>');
                $row.append($square);

                square = new Square(x, y, $square, droppable, this, game);
                row.push(square);
            }

            this.rows.push(row);
            this.$platformElt.append($row);

        }

        this.disposePawns(game);
    }

    disposePawns(game) {
        let $pawn, pawn;
        
        this.rows.forEach( row => {
            
            row.forEach( square => {
                
                if ( (square.y + square.x) % 2 === 0 && square.y < 3) {
                    
                    $pawn = $("<img class= 'img' src='images/pionBleu.png' alt='pawn'/>").draggable({
                        revert:'invalid'
                    });
                    
                    square.$elt.append($pawn);

                    pawn = new Pawn(square.x, square.y, $pawn, 'white', this);

                    square.pawn = pawn;

                    game.playerWhite.pawns.push(pawn);


                } else if ( (square.y + square.x) % 2 === 0 && square.y > 4)  {
                    
                    $pawn = $("<img class='img' src='images/pionRouge.png' alt='pawn'/>").draggable({
                        revert:'invalid'
                    });
                    
                    square.$elt.append($pawn);

                    pawn = new Pawn(square.x, square.y, $pawn, 'black', this);

                    square.pawn = pawn;

                    game.playerBlack.pawns.push(pawn);
                }
            });
        });
    }
}