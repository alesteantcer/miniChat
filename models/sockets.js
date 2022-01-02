class Sockets {
	constructor(io) {
		this.io = io;
		this.socketEvents();
	}

	socketEvents() {
		this.io.on("connection", (socket) => {
			socket.on("message-to-server", (data) => {
				console.log(data);
				//socket.emit("message-from-server", data);  // socket.emit emite el mensajes solo a la persona q lo envia
				this.io.emit("message-from-server", data); // io.emit emite los mensajes a todo el mundo conectado
			});
		});
	}
}

module.exports = Sockets;
