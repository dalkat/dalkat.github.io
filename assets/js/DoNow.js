function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
	}

var quotes = [
	'<b>Journal for 10 minutes</b><br>Answer three questions: How am I feeling right now? What brought me absolute delight in the past 24hrs? What are the patterns?',
	'<b>1-minute dance party</b><br>Ready, set, go.',
	'<b>Floss</b><br>You will be SO glad you did',
	'<b>Clean up one section of your room</b><br>Why not start with your desk, that pile of laundry on your couch, or your wallet?',
	'Message 3 friends you have not spoken to in a while',
	'<b>Take care of your skin</b><br>Make a face mask, exfoliate your body, or lotion up!',
	'<b>Random act of kindness</b><Br>What could you do right now, big or small?',
	'<b>Write a haiku</b><br>How about an ode to the weather, gratitude, or about what you had/are having for lunch?'
	]