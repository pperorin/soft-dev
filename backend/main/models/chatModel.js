const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
    {
        message: {
            type: String
        },
        sender: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const ChatModel = mongoose.model("Chat", chatSchema);
module.exports = ChatModel;
