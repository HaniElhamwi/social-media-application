const message = require("../models/message");

const handleGetOldMessages = async (req, res) => {
  try {

    const messagesList = await message.find({
      fromUserId: req.body.fromUserId,
      toUserId: req.body.toUserId,
    });

    const messagesdialog = await message.find({
      fromUserId: req.body.toUserId,
      toUserId: req.body.fromUserId,

    })

    // console.log({ messagesList });

    res.send( {messagesList ,messagesdialog});
    // console.log(newUser.message)
    // res.send({ message: newUser.message });
  } catch (err) {
    console.log({ err });
  }
};

module.exports = handleGetOldMessages;
