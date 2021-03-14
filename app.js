const express = require('express')
const path = require('path');
const dotenv = require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`App is live on port ${port}!`))