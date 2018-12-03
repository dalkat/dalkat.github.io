function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
	}

var quotes = [
	'<b>Journal for 10 minutes</b><br>Answer three questions: How am I feeling right now? What brought me absolute delight today? What patterns emerged throughout the day?<Br>You could also try a <a href="https://www.amazon.com/gp/product/0991846206/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0991846206&linkCode=as2&tag=dalkat-20&linkId=b718dfe0d02aa62b914e315fb026ee9f" target="_blank">Five Minute Journal</a>.',
	'<b>1-minute dance party</b><br>Ready, set, go.',
	'<b>Floss</b><br>You will be SO glad you did',
	'<b>Clean up one section of your room</b><br>Why not start with your desk, that pile of laundry on your couch, or your wallet?',
	'<b>Check in on 3 friends</b><br>Message friends you haven\'t spoken to in a while - what have been their highs and lows these past few months?',
	'<b>Take care of your skin</b><br>Make a face mask, <a href="https://www.amazon.com/gp/product/B001ET7HXO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001ET7HXO&linkCode=as2&tag=dalkat-20&linkId=e650bf14d81c9fc867a57a2045ee322c" target="_blank">exfoliate</a> your body, or lotion up!',
	'<b>Random act of kindness</b><Br>What could you do right now, big or small?',
	'<b>Write a haiku</b><br>How about an ode to the weather, gratitude, or about what you had/are having for lunch?',
	'<b>Take a 20-minute learning break</b><br>How about an online class on food photography or logo design on <a href="https://skl.sh/2TE2fKn" target="_blank">Skillshare</a> or Udemy, or a podcast on real estate investing?',
	'<b>Do a 20 minute yoga flow</b><br>Have more time? See if there’s a class happening now at the gym!',
	'<b>Stretch for five minutes</b><br>Yes, for five minutes! Stretch your neck, roll your shoulders, touch your toes.',
	'<b>Meditate</b><br>A five minute meditation on SimpleHabit or Headspace.',
	'<b>Werk it out</b><br>Ten pushups, 16 squat steps with bands, ten bird dogs. Repeat.',
	'<b>Write a short poem in your preferred language of love.</b><br>I mean, you have to practice your French anyway...',
	'<b>Think of three things you\'re grateful for.</b><Br>If there\'s someone you can thank, message them and make their day!'
	]