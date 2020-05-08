//npm dependencies
var mongo = require('./mongoDriver')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use mongo connection middleware
app.use(require('./middleware/mongoMiddleware'))

//routes
require('./routes')(app)


//Connect to database
mongo.getDB()
.then(db => {

	//Shortener server started
	app.listen(process.env.PORT || 5000)
})
.catch(err => {
	console.log("Error connecting to url database")
})