module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
            io.emit('chat message', '🔴  '+ socket.name + ' left the chat...');
        });
        socket.on('set username', (user) => {
            socket.name = user
            console.log('Set username: ' + '' + socket.name);
            io.emit('chat message','🟢  '+ socket.name + ' join the chat...');
        });
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
        socket.on('chat message', (msg) => {
            io.emit('chat message', socket.name + ' : '+ msg);
        });
    });
};
