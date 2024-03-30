var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
const cors = require('cors');

var connection = mysql.createConnection({
    host: '104.154.65.227',
    user: 'root',
    password: 'RoshanMahesh99',
    database: '445db',
    multipleStatements: true
});
connection.connect();

var app = express();

app.use(bodyParser.json());
app.use(cors());    // need to use this since frontend and backend are running on different ports
// may not need to use cors after building it/not running all of this locally

app.get('/', function(req, res) {
    res.send({message: 'No'});   // sending message "Hello" to the frontend
});

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM PowerData';

    connection.query(query, (err, results) => {
        if(err) {
            console.error('Error fetching data: ', err);
            res.status(500).json({error: 'Error fetching data'});
        } else {
            res.json(results)
        }
    });
});

app.listen(80, function() {
    console.log('Node app is running on port 80');
});