"use strict";
let gameConnect = require('zeeman-game-connect');
let server = gameConnect.createServer({port:1978});

server.on('run', function(client, msg) {
	//console.log(client.name);
	//console.log(msg);
});

server.on('clientConnect', function(client) {
	console.log(client.name + ' connected ...');
});

server.on('clientDisconnect', function(client) {
	console.log(client.name + ' disconnected ...');
});