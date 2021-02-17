const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('37.187.133.178', 25703, '76561198133673263', -545183890);
var http = require('http');

//What to send
var texttosend = 'Hello from SERVER'

// wait until connected before sending commands
rustplus.on('connected', () => {

    // ready to send requests
    console.log('Connected to Rust+, ENJOY!')

    rustplus.turnSmartSwitchOff(5837699, (message) => {
	  console.log("turnSmartSwitchOn response message: " + JSON.stringify(message));
	  return true;
	});
	console.log('Controled!')
	console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');

});