# url-shortener
url-shortener is the node.js application that will allow you to setup your own URL shortener server just like <a>bit.ly</a>. You'll have full control over your data and clicks analytics. Its'free and open-source.

## Getting Started
Clone the __master__ branch of this repo
```
git clone https://github.com/mokshhh22/url-shortener.git
```

Then run the start script -
```
npm start
```

You can also pass the following enviornment variables to configure the server.
|   Enviornment Name  |         Default Value        |      Datatype      |
|:-------------------:|:----------------------------:|:------------------:|
|         PORT        |             5000             |       Number       |
|      MONGO_URL      | "mongodb://localhost:27017/" |       String       |


## API usage

### Get short url
```
Method: POST
Route: '/shorturl'
Headers: Content-Type:application/json
Body:
	{
		url: 'https://www.google.com'
	}
Response: 
	{
    	url: "https://www.google.com",
    	short: "te8j5su",
    	clicks: 0,
    	_id: "5eb6a7a7ff1aa921c1a9d2e5"
	}
```


### Access source url using short
```
Method: GET
Route: '/te8j5su'
Redirect: 'https://www.google.com'
```


### Get clicks analytics
```
Method: GET
Route: '/clicks/te8j5su'
Response: 
	{
		url: "https://www.google.com",
    	short: "te8j5su",
    	clicks: 6,
    	_id: "5eb6a7a7ff1aa921c1a9d2e5"
	}
```