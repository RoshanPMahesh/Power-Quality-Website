var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')

var app = express();

app.use(bodyParser.json());
app.use(cors());    // need to use this since frontend and backend are running on different ports
// may not need to use cors after building it/not running all of this locally

app.get('/', function(req, res) {
    res.send({message: 'No'});   // sending message "Hello" to the frontend
});

app.listen(80, function() {
    console.log('Node app is running on port 80');
});