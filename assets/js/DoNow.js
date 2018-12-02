function newQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementByID("quotesDisplay").innerHTML = quotes[randomNumber];
	}

var quotes = [
	'A',
	'B',
	'C',
	'D'
	]