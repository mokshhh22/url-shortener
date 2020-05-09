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