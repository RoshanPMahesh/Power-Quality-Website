var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
const cors = require('cors');
//const WebSocket = require('ws')

const http = require('http');
const { Server } = require('socket.io');


// var connection = mysql.createConnection({
//     host: '104.154.65.227',
//     user: 'root',
//     password: 'RoshanMahesh99',
//     database: '445db',
//     multipleStatements: true
// });
// connection.connect();

var app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//app.use(cors());

const pool = mysql.createPool({
  host: '104.154.65.227',
  user: 'root',
  password: 'RoshanMahesh99',
  database: '445db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const connection = pool.promise();

const fetchDataForOutlet = async (outletName) => {
  try {
    const [rows, fields] = await connection.query('SELECT * FROM PowerData WHERE outlet_name = ? ORDER BY measurement_time DESC LIMIT 10', [outletName]);
    io.emit(outletName, rows.reverse());
  } catch (error) {
    console.error(`Error fetching data for ${outletName}:`, error);
  }
};

const fetchData = async () => {
  await fetchDataForOutlet('ECEB');
  await fetchDataForOutlet('CHARGER');
};

setInterval(fetchData, 1000); // Fetch data for both outlets every second

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});

//const wss = new WebSocket.Server({port: 8080});

//app.use(bodyParser.json());
//app.use(cors());    // need to use this since frontend and backend are running on different ports
// may not need to use cors after building it/not running all of this locally

// wss.on('connection', (ws) => {
//     console.log('Client connected');
  
//     // Query the database for the 100 most recent timestamps when the outlet name is 'ECEB'
//     connection.query('SELECT * FROM PowerData WHERE outlet_name = ? ORDER BY measurement_time DESC LIMIT 100', ['ECEB'], (error, results, fields) => {
//       if (error) {
//         console.error('Error fetching ECEB data:', error);
//         return;
//       }
      
//       // Extract data from the result and send it to the client
//       const ecebData = results;
//       ws.send(JSON.stringify({ outlet: 'ECEB', data: ecebData }));
//     });
  
//     // Query the database for the 100 most recent timestamps when the load name is 'CHARGER'
//     connection.query('SELECT * FROM PowerData WHERE load_name = ? ORDER BY measurement_time DESC LIMIT 100', ['CHARGER'], (error, results, fields) => {
//       if (error) {
//         console.error('Error fetching CHARGER data:', error);
//         return;
//       }
      
//       // Extract data from the result and send it to the client
//       const chargerData = results;
//       ws.send(JSON.stringify({ outlet: 'CHARGER', data: chargerData }));
//     });
  
//     ws.on('close', () => {
//       console.log('Client disconnected');
//     });
// });

  

// app.get('/', function(req, res) {
//     res.send({message: 'No'});   // sending message "Hello" to the frontend
// });

// app.get('/data', (req, res) => {
//     const query = 'SELECT * FROM PowerData';

//     connection.query(query, (err, results) => {
//         if(err) {
//             console.error('Error fetching data: ', err);
//             res.status(500).json({error: 'Error fetching data'});
//         } else {
//             res.json(results)
//         }
//     });
// });

// app.listen(8080, () => {
//     console.log('Server listening on ws://localhost:8080');
// });