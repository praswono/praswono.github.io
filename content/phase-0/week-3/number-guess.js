// Define random number
var minNumber = 1;
var maxNumber = 10;
var number;
var countGuess;
var countGuessMax;
var hintString = "";
var warnString = "";
var win = 0;
newGame();

function guess(guessNumber) {
    console.clear();
    warnString = "";
    
    if (win === 0) {
    	if (countGuess <= countGuessMax) {
			if (guessNumber === parseInt(guessNumber, 10)) {
			    if (guessNumber > maxNumber || guessNumber < minNumber) {
		            warnString = "\n\n  Nebaknya harus di antara " + minNumber + " - " + maxNumber + " Bos!";
			    } else if (guessNumber > number) {
		            hintString += "\n  " + countGuess + ". Angkanya lebih kecil daripada " + guessNumber;
		            if (countGuess > countGuessMax) {
                        warnString = "\n\n  Maaf anda telah menebak " + countGuessMax + " kali! Enter newGame() untuk memulai game baru.";
                    }
                    countGuess++;
		        } else if (guessNumber < number) {
		            hintString += "\n  " + countGuess + ". Angkanya lebih besar daripada " + guessNumber;
		            if (countGuess > countGuessMax) {
                        warnString = "\n\n  Maaf anda telah menebak " + countGuessMax + " kali! Enter newGame() untuk memulai game baru.";
                    }
                    countGuess++;
		        } else {
		            warnString += "\n\n  Benar! Anda telah menebak angka " + number + "!\n  Untuk memulai game baru, enter newGame().";
		            countGuess++;
	                win = 1;
		        }
			} else {
		    	warnString = "\n\n  Nilai yang anda masukan bukan dalam format angka!";
			}
		} else {
			warnString = "\n\n  Woii lu udah kalah woii, ulang game dengan newGame() ya!";
		}
    } else {
		warnString = "\n\n  Woii lu udah menang woii, ulang game dengan newGame() ya!";
    }
  
    guessString = " ============= Permainan Tebak Tebakan ============= \n  ========== Tebak angka diantara " + minNumber + " - " + maxNumber + " ============ \n  === Gunakan guess(angka) untuk menebak angkanya === \n  ====== Gunakan newGame() untuk restart game =======\n  ========= Anda dapat menebak " + Math.round(countGuessMax - countGuess + 1) + " kali lagi ==========\n";
    guessString += hintString;
    guessString += warnString;
    
    console.log(guessString);
}

function newGame() {
    console.clear();
    number = Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
    countGuess = 1;
    countGuessMax = 5;
    win = 0;
    guessString = " ============= Permainan Tebak Tebakan ============= \n  ========== Tebak angka diantara " + minNumber + " - " + maxNumber + " ============ \n  === Gunakan guess(angka) untuk menebak angkanya === \n  ====== Gunakan newGame() untuk restart game =======\n  ========= Anda dapat menebak " + Math.round(countGuessMax - countGuess + 1) + " kali lagi ==========\n";
    warnString = "";
    hintString = "";
	console.log(guessString);
} 