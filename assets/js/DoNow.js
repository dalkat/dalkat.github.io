function newQuote() {
	var randomNumber = Math.floor(Math.random() * ((quotes.length)+1));
	document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
	}

var quotes = [
	'<b>Journal for 10 minutes</b><br>Answer three questions: How am I feeling right now? What brought me absolute delight in the past 24hrs? What are the patterns?',
	'<b>1-minute dance party</b><br>Ready, set, go.',
	'Test 1',
	'Test 2'
	]