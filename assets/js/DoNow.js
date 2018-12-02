function newQuote() {
	var randomNumber = Math.floor(Math.random() * 4);
	document.getElementByID("quotes").innerHTML = quotes[randomNumber];
	}

var quotes = [
	'A',
	'B',
	'C',
	'D'
	]