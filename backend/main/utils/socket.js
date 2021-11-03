// const Server = require('socket.io');
// const io = new Server();

// var Socket = {
//     emit: function (event, data) {
//         console.log(event, data);
//         io.sockets.emit(event, data);
//     },
// };

// io.on('connection', function (socket) {
//     console.log('A user connected');
// });

// exports.Socket = Socket;
// exports.io = io;

const Chat = require('../models/chatModel');
module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.name = global.username;
        console.log('User connected : '+socket.name);
        socket.on('disconnect', () => {
            console.log('user disconnected');
            io.emit('chat message', '🔴  ' + socket.name + ' left the chat...');
        });
        socket.emit('set-username', (user) => {
            socket.name = user;
        })
        socket.on('set-username', (user) => {
            socket.name = user;
            console.log('Set username: ' + '' + socket.name);
            io.emit('chat message', '🟢  ' + socket.name + ' join the chat...');
        });
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
        socket.on('chat message', async (msg) => {
            const allchat = await Chat.findById(global.id);
            if (!allchat) {
                await Chat.create({
                    message: msg,
                    user: global.user,
                    tasker: global.tasker,
                });
                console.log('Socket.io: Created chat room');
            } else {
                await Chat.findOneAndUpdate({id :global.id},
                    {
                        $push: {
                            message: {
                                sender: socket.name,
                                message: msg,
                            },
                        },
                    }
                );
                console.log('Socket.io: Saved to chat room');
                io.emit('chat message', socket.name + ' : ' + msg);
            }
        });
    });
};
