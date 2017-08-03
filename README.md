# react-tumblr
> Note: this is just a quick and dirty implementation of tumblr.js and react, please don't use this code directly and instead make your own implementation.

### Setup
Install dependencies and start the server

```
npm install & npm start
```

### Authentication

Remplace `MasterKey` with your actual tokens / keys in [dist/server.js](https://github.com/btzr-io/react-tumblr/blob/master/dist/server.js#L9)
```
// Authenticate via OAuth
const tumblr = require('tumblr.js');
const client = tumblr.createClient(MasterKey);
```

### StackOverflow
[stackoverflow.com > questions > Tumblr.js 401 Unauthorized](https://stackoverflow.com/questions/45398498/tumblr-js-401-unauthorized)
