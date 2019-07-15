function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
	}

var quotes = [
	'<b>Journal for 10 minutes</b><br>Answer three questions: How am I feeling right now? What brought me absolute delight today? What patterns emerged throughout the day? You could also try filling out your <a href="https://amzn.to/2UclYka" target="_blank">Five Minute Journal</a>.',
	'<b>1-minute dance party</b><br>Ready, set, go.',
	'<b>Floss</b><br>You will be SO glad you did',
	'<b>Clean up one section of your room</b><br>Why not start with your desk, that pile of laundry on your couch, or your wallet?',
	'<b>Check in on 3 friends</b><br>Message friends you haven\'t spoken to in a while - what have been their highs and lows these past few months?',
	'<b>Take care of your skin</b><br>Make a face mask, <a href="https://amzn.to/2UdnaUw" target="_blank">exfoliate</a> your body, or lotion up!',
	'<b>Random act of kindness</b><Br>What could you do right now, big or small?',
	'<b>Write a haiku</b><br>How about an ode to the weather, gratitude, or about what you had/are having for lunch?',
	'<b>Take a 20-minute learning break</b><br>How about an online class on food photography or logo design on <a href="https://skl.sh/2TE2fKn" target="_blank">Skillshare</a> or Udemy, or a podcast on real estate investing?',
	'<b>Do a 20 minute yoga flow</b><br>Have more time? See if there’s a class happening now at the gym!',
	'<b>Stretch for five minutes</b><br>Yes, for five minutes! Stretch your neck, roll your shoulders, touch your toes. Shake those hips out.',
	'<b>Meditate</b><br>A five minute meditation on SimpleHabit or Headspace.',
	'<b>Werk it out</b><br>Ten pushups, 16 squat steps with bands, ten bird dogs. Repeat.',
	'<b>Write a short poem in your preferred language of love.</b><br>I mean, you have to practice your French anyway...',
	'<b>Think of three things you\'re grateful for.</b><Br>If there\'s someone you can thank, message them and make their day!',
	'<b>Send snail mail.</b><br>Yup, old school. Make someone\'s day, send a love note, a life update, a book, etc.',
	'<b>Take a walk - whether 5 minutes or 45.</b><br>Get some fresh air, clear your head, take a walk around the block - or to the next neighborhood.',
	'<b>Nurture your creativity</b><br>Write a story about:<BR><ul style="text-align:left;"><li>A toddler\'s first day at school</li><li>A cat with the house to herself</li><li>The object 5 feet ahead of you</li></ul>'
	]