function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
	}

var quotes = [
	'<b>Journal for 10 minutes</b><br>Answer three questions: How am I feeling right now? What brought me absolute delight in the past 24hrs? What are the patterns?',
	'<b>1-minute dance party</b><br>Ready, set, go.',
	'Floss - you will be SO glad you did',
	'Clean up one section of your room',
	'Message 5 friends you have not spoken to in a while',
	'Test 1',
	'Test 2'
	]