const express = require("express");

const app = express();

// Servidor de sockets

const server = require("http").createServer(app);

// config del socket server
const io = require("socket.io")(server);

// https://cdnjs.com/libraries/socket.io para index.html

// desplegar el directorio public

app.use(express.static(__dirname + "/public"));
io.on("connection", (socket) => {
	//console.log(socket.id);

	///----------------------------&&&&&&-----------------

	// emitir un mensaje del servidor al cliente

	/* socket.emit("mensaje-bienvenida", {
		msg: "Bienvenido al server",
		fecha: new Date(),
	}); */

	///----------------------------&&&&&&-----------------

	// recibe un mensaje del client al servidor

	/* socket.on("mensaje-cliente", (data) => {
		console.log(data);
	}); */

	socket.on("message-to-server", (data) => {
		console.log(data);
		//socket.emit("message-from-server", data);  // socket.emit emite el mensajes solo a la persona q lo envia
		io.emit("message-from-server", data); // io.emit emite los mensajes a todo el mundo conectado
	});
});
server.listen(3000, () => {
	console.log("Server run in port: 3000");
});
