const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const app = express();
const port = 3001;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      console.log("Origin Not Set");
      return callback(null, true);  // Allow requests with no origin (like mobile apps or curl requests)
    }
    // Check if the origin is in the 192.168.x.x range or change regex as necessary
    if (/^https?:\/\/(192\.168\.\d{1,3}\.\d{1,3}|localhost)(:\d+)?$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log('Incoming request from origin:', req.headers.origin);
  next();
});

const serialPort = new SerialPort({
  path: 'COM4',
  baudRate: 9600
});
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

let lastKnownValue = ''; // Store the last read value

parser.on('data', data => {
  console.log('Received data:', data);
  lastKnownValue = data; // Update the last known value
});

// Endpoint to get the latest sensor data
app.get('/sensor-data', (req, res) => {
  res.json({ value: lastKnownValue });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on all interfaces at port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });
