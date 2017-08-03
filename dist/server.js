const path = require('path');
const express = require('express');

// Get keys and tokens
const MasterKey = require('../secret/key.js');

// Authenticate via OAuth
const tumblr = require('tumblr.js');
const client = tumblr.createClient(MasterKey);

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    app.use('/dist', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    // Dashboard request
    app.get('/dashboard', (req, res) => {

        // Get dashboard data
        client.userDashboard({ type: 'photo' }, (err, data) => {

            // Debug error
            if(err) console.error(err);

            // Get posts
            const posts = data.posts.map( (i) => {

                // Extract relevant data
                const { id, tags, summary, photos } = i;
                const { blog_name: blog } = i;

                // Extract image source
                const image = photos[0].original_size.url;

                // Return new data
                return {id, blog, tags, summary, image};
            });

            res.send(posts);

        });
    });

    return app;
  }
}
