const mongo = require('../mongoDriver')


module.exports = function(req, res, next) {
	mongo.getDB()
	.then(db => {
		req.db = db
		next()
	})
	.catch(err => {
		res.status(400).json({ message: "Could not connect to database" })
	})
}