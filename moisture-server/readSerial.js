const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Create a new instance of SerialPort
const port = new SerialPort({
  path: 'COM4',
  baudRate: 9600
});

// Create a parser that emits data each time a newline is received
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

parser.on('data', (data) => {
  console.log('Data:', data);
});

port.on('open', () => {
  console.log('Serial Port Open');
});

port.on('error', function(err) {
  console.log('Error:', err.message);
});
