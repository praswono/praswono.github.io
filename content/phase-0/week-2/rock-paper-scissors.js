// Define array of possible choices
var pilihanTersedia = ["Jempol", "Telunjuk", "Kelingking"];

// Define function to see if user selection is in array
function dalamPilihan(pengguna, pilihanTersedia) {
  console.log(pilihanTersedia.indexOf(pengguna));
    return pilihanTersedia.indexOf(pengguna);
  
}

function pilihanLawan() {
    var randomValue = Math.random();
    var reply;
  
    if (randomValue <= (1/3)) {
      reply = "Jempol";
    }
    else if (randomValue <= (2/3)) {
      reply = "Telunjuk";
    }
    else {
      reply = "Kelingking";
    }
  
    return reply;
}

function bertarung(pengguna, lawan) {
    var reply;
    if (pengguna === lawan) {
        reply = "Seri!";
    }
    else if (pengguna === "Jempol") {
        if (lawan === "Kelingking") {
            reply = "Pemenangnya adalah: Komputer!";
        }
        else {
            reply = "Pemenangnya adalah: Pengguna!";
        } 
    }
    else if (pengguna === "Telunjuk") {
        if (lawan === "Jempol") {
            reply = "Pemenangnya adalah: Komputer!";
        }
        else {
            reply = "Pemenangnya adalah: Pengguna!";
        } 
    }
    else if (pengguna === "Kelingking") {
        if (lawan === "Telunjuk") {
            reply = "Pemenangnya adalah: Komputer!";
        }
        else {
            reply = "Pemenangnya adalah: Pengguna!";
        } 
    }
  
  return reply;
}

// Prompt user selection
var pengguna = prompt("Apakah anda ingin memilih Jempol, Telunjuk, atau Kelingking?");

while (dalamPilihan(pengguna, pilihanTersedia) < 0) {
    pengguna = prompt("Maaf, pilihan hanya boleh Jempol, Telunjuk, atau Kelingking. Apakah anda ingin memilih Jempol, Telunjuk, atau Kelingking?");
}

console.log("Anda memilih " + pengguna);

// Randomize computer selection
var lawan = pilihanLawan();

console.log("Lawan anda memilih " + lawan);
console.log(bertarung(pengguna, lawan));