const user = require("../models/user");
4;
const handleGetUsersList = async (req, res) => {
  try {
    const getting = await user.find({});

    res.send(getting);
  } catch (err) {
    console.log({ err });
  }
};
module.exports = handleGetUsersList;
