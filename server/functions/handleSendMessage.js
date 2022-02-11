const { model } = require("mongoose");
const message = require("../models/message");

const handleSendMessage = async (req, res) => {
  try {
    const sendMessage = await new message({
      message: req.body.messageText,
      fromUserId: req.body.fromUserId,
      toUserId: req.body.toUserId,
    });

    sendMessage.save();
    res.send(sendMessage)
  } catch (err) {
    console.log({ err });
  }
};

module.exports = handleSendMessage;
