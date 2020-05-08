//to generate random aplha-numeric strings
function rand() {
	return Math.random().toString(36).substring(2, 9)
}


module.exports = function(app) {

	//Provide user with short url
	app.post('/shorturl', (req, res) => {
		//get source url for req body
		let url = req.body.url
		if (!url) {
			return res.json({ message: "Missing url"})
		}

		//Add url to database
		req.db.collection('locator').insertOne({
			url: url,
			short: rand(),
			clicks: 0,
		})
		.then(response => {
			res.json(response.ops[0])
		})
		.catch(err => res.status(400).json({ message: "url shortener failed"}))

	})


	//Redirect to source url
	app.get('/:short', (req, res) => {
		let short = req.params.short

		//Find source url mapping to short
		req.db.collection('locator').findOneAndUpdate(
			{ short: short },
			{ $inc: {clicks:1} }
		)
		.then(response => {
			if (!response)
				return res.send("Invalid url")

			res.redirect(response.value.url)
		})
		.catch(err => res.send("Error connecting to database"))
	})


	//Get total clicks or redirect analytics
	app.get('/clicks/:short', (req, res) => {
		let short = req.params.short

		//Find source url mapping to short
		req.db.collection('locator').findOne({ short: short })
		.then(response => {
			if (!response)
				return res.send("Invalid url")

			res.json(response)
		})
		.catch(err => res.send("Error connecting to database"))
	})
}