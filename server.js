var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
const cors = require('cors');

const http = require('http');
const { Server } = require('socket.io');

var app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

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
    if (outletName === "ECEB") {
      const [rows, fields] = await connection.query('SELECT * FROM PowerData WHERE outlet_name = ? ORDER BY measurement_time DESC LIMIT 10', [outletName]);
      io.emit(outletName, rows.reverse());
    } else {
      const [rows, fields] = await connection.query('SELECT * FROM PowerData WHERE load_name = "CHARGER" ORDER BY measurement_time DESC LIMIT 10');
      io.emit("CHARGER", rows.reverse());
    }
    
  } catch (error) {
    console.error(`Error fetching data for ${outletName}:`, error);
  }
};

const deviationsCheck = async () => {
  try {
    const [rows, fields] = await connection.query('SELECT voltage, measurement_time FROM PowerData WHERE (outlet_name = "ECEB" AND voltage <= 114) OR (outlet_name = "ECEB" AND voltage >= 126) ORDER BY measurement_time');
    io.emit("NOTIF", rows.reverse());
  } catch (error) {
    console.error('Error fetching data for deviationsCheck: ', error);
  }
};

const fetchData = async () => {
  await fetchDataForOutlet('ECEB');
  await fetchDataForOutlet('CHARGER');
  await deviationsCheck();
};

setInterval(fetchData, 1000); // Fetch data for both outlets every second

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
