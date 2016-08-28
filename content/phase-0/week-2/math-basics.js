// Declare variables
var a = 3;
var b = 4;
var c = 9;
var r = 2;
var i;

// Function for pangkatAngka
pangkatAngka = function(a, b) {
  	var result = a;
  	for (i = 1; i < b; i++) {
  		result = result * a;
  	}
  	return result;
}

// Function for square root
akarKuadrat = function(c) {
	return Math.sqrt(c);
}

// Function for hypotenuse
hipotenusa = function(a, b) {
	return Math.sqrt((a * a) + (b * b));
}

// Function for circle area
luasLingkaran = function(r) {
	return Math.PI * Math.pow(r, 2);
}

console.log(pangkatAngka(a, b));
console.log(akarKuadrat(c));
console.log(hipotenusa(a, b));
console.log(luasLingkaran(r));