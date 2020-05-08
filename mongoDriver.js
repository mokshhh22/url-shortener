const MongoClient = require('mongodb').MongoClient
const { ObjectId } = require('mongodb')

//Connection url and dbName
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/'
const dbName = process.env.DB_NAME || 'urlShortener'

//Options to the mongo client //
var options = {
	useNewUrlParser: true
}

//Global variables
var _db;
var client;


var mongo = {
	connect() {
		return new Promise((resolve, reject) => {

			MongoClient.connect(url, options)
			.then(clientInstance => {
				console.log(`Connected successfully to the ${dbName} database`)

				client = clientInstance
				_db = client.db(dbName)
				_db['ObjectId'] = ObjectId

				resolve(_db)
			})
			.catch((err) => {
				console.log(err)
				reject(err)
			})
		})
	},

	getDB() {
		return new Promise((resolve, reject) => {
			if(this.isConnected())
				resolve(_db)
			else {
				this.connect()
				.then(_db => resolve(_db))
				.catch(err => reject(err))
			}
		})
	},

	isConnected() {
		return !!client && !!client.topology && client.topology.isConnected()
	}
}

module.exports = mongo
