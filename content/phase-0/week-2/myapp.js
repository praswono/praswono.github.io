// Declare variables
var col = 7;
var row = 6;
var Board = [];
var colInput;
var rowInput;
var checkWin = 0;
var computerInput = [];
var topComment = "\n--- Drop your chip in columns 1-7 --- \n\n";
var bottomComment = "\nUse function drop(#) to drop your chip in column #.\nUse function newGame() to start a new game.";

function initializeBoard(row, col, Board) {
    for (var i = 0; i < row; i++) {
        Board[i] = [];
   		for (var j = 0; j < col; j++) {
            Board[i][j] = "";
		}
	}
    return Board;
}

function printBoard(row, col, Board, topComment, bottomComment) {
    var board = topComment;
    
	for (var i = 0; i < row; i++) {
		board += "    |";
   		for (var j = 0; j < col; j++) {
   			if (Board[i][j] === "") {
   				board += "   |";
   			} else {
   				board += " " + Board[i][j] + " |"; 
   			}
		}
        board += "\n";
	}
    
    board += bottomComment;
  
    console.log(board);
}

function calculateUserInput(row, colInput, Board) {
    for (var i = row-1; i >= 0; i--) {
        if (Board[i][colInput-1] === "") {
            rowInput = i;
            break;
        }
	}
    return rowInput;
}

function calculateComputerInput(row, col, Board) {
    colInput = Math.round(Math.random() * 7);
    
    for (var i = row-1; i >= 0; i--) {
        if (Board[i][colInput-1] === "") {
            Board[i][colInput-1] = "O"
            rowInput = i
            break;
        }
	}
  
    computerInput = [rowInput, colInput];
    return computerInput;
}

function updateBoard(rowInput, colInput, Board, sym) {
    Board[rowInput][colInput-1] = sym;
    return Board;
}

function updateWin(rowInput, colInput, Board) {
    colInput -= 1;
    var rowCheck = rowInput;
    var colCheck = colInput;
    var score = 0;
  
    // Check horizontal left
    try {
	    while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
	        score += 1;
	        colCheck -= 1;
	    }
	} catch(err) {}
	score -= 1;
    colCheck = colInput;
    // Check horizontal right
    try {
	    while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
	        score += 1;
	        colCheck += 1;
	    }
	} catch(err) {}
    colCheck = colInput;
    if (score >= 4) {
        return 1;
    } else {
        score = 0;
    }

    // Check vertical bottom
    try {
        while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
            score += 1;
            rowCheck += 1;
        }
    } catch(err) {}
    console.log(score);
    rowCheck = rowInput;
    if (score >= 4) {
        return 1;
    } else {
        score = 0;
    }
  
    // Check diagonal top left
    try {
        while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
            score += 1;
	        rowCheck -= 1
	        colCheck -= 1;
    	}
    } catch(err) {}
    score -= 1;
    rowCheck = rowInput;
    colCheck = colInput;
    // Check diagonal bottom right
    try {
	    while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
	        score += 1;
	        rowCheck += 1;
	        colCheck += 1;
	    }
	} catch(err) {}
    rowCheck = rowInput;
    colCheck = colInput;
    if (score >= 4) {
        return 1;
    } else {
        score = 0;
    }
  
    // Check diagonal top right
    try {
	    while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
	        score += 1;
	        rowCheck -= 1
	        colCheck += 1;
    	}
   	} catch(err) {}
   	score -= 1;
    rowCheck = rowInput;
    colCheck = colInput;
    // Check diagonal bottom left
    try {
	    while (Board[rowCheck][colCheck] === Board[rowInput][colInput]) {
	        score += 1;
	        rowCheck += 1;
	        colCheck -= 1;
	    }
	} catch(err) {}
    rowCheck = rowInput;
    colCheck = colInput;
    if (score >= 4) {
        return 1;
    } else {
        score = 0;
    }
  
    return 0;
}

function newGame() {
	checkWin = 0;
	topComment = "\n--- Drop your chip in columns 1-7 --- \n\n";
    bottomComment = "\nUse function drop(#) to drop your chip in column #.\nUse function newGame() to start a new game.";
    
    console.clear();
    Board = initializeBoard(row, col, Board);
    printBoard(row, col, Board, topComment, bottomComment);
}

function drop(colInput) {
    // Get user input
    rowInput = calculateUserInput(row, colInput, Board);
    Board = updateBoard(rowInput, colInput, Board, "X");
    checkWin = updateWin(rowInput, colInput, Board);
    topComment = "\n--- Drop your chip in columns 1-7 --- \n\n";
    bottomComment = "\nUse function drop(#) to drop your chip in column #.\nUse function newGame() to start a new game.";
     
    if (checkWin === 1) {
        console.clear();
        topComment = "\n--- Congratulations! You won the game! ---\n\n";
        bottomComment = "\nUse function newGame() to start a new game.";
        printBoard(row, col, Board, topComment, bottomComment);
    } else {
        console.clear();
        printBoard(row, col, Board, topComment, bottomComment);
        
        // Get computer input
        computerInput = calculateComputerInput(row, col, Board);
        Board = updateBoard(computerInput[0], computerInput[1], Board, "O");
        checkWin = updateWin(computerInput[0], computerInput[1], Board);
     
        if (checkWin === 1) {
        	topComment = "\n--- You lost the game you asshole. ---\n\n";
        	bottomComment = "\nUse function newGame() to start a new game.";
            console.clear();
            printBoard(row, col, Board, topComment, bottomComment);
        } else {
            console.clear();
            printBoard(row, col, Board, topComment, bottomComment);
        }
    }
}

// New game
newGame();