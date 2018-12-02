var quotes = [
	'A'
	'B'
	'C'
	'D'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementByID('quoteDisplay').innerHTML = quotes[randomNumber];
}