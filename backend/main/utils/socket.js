const formatMessage = require('./chat_message');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./chat_user');

const Chat = require('../models/chatModel');
module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.on('joinRoom', ({ username, room }) => {
            username = global.username
            const user = userJoin(socket.id, username, room);

            socket.join(user.room);

            // Welcome current user

            // Broadcast when a user connects
            socket.broadcast
                .to(user.room)
                // .emit('message', formatMessage('System', `${user.username} has joined the chat`));

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room),
            });
        });
        // Listen for chatMessage
        socket.on('chatMessage', async (msg) => {
            const user = getCurrentUser(socket.id);
            const message = formatMessage(user.username, msg)
            const allchat = await Chat.findById('61780dd0b5ec5cd90efa8c3e');
            if (!allchat) {
                await Chat.create({
                    user: message.username,
                    tasker: global.tasker,
                });
                console.log('Socket.io: Created chat room');
            } else {
                await Chat.findOneAndUpdate(
                    { id: '61780dd0b5ec5cd90efa8c3e' },
                    {
                        $push: {
                            message: {
                                sender: message.username,
                                message: message.text,
                                time: message.time,
                            },
                        },
                    }
                );
                console.log('Socket.io: Saved to chat room');
            }

            io.to(user.room).emit('message', formatMessage(user.username, msg));
        });
        // Runs when client disconnects
        socket.on('disconnect', () => {
            const user = userLeave(socket.id);

            if (user) {
                // Broadcast when a user disconnects
                // io.to(user.room).emit('message', formatMessage('System', `${user.username} has left the chat`));

                // Send users and room info
                io.to(user.room).emit('roomUsers', {
                    room: user.room,
                    users: getRoomUsers(user.room),
                });
            }
        });
    });
};
