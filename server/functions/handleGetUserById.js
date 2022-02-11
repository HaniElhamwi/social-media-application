const user = require("../models/user");

const handleGetUserById = async (req, res) => {
  try {
    const get = await user.findOne({ _id: req.body.id });

    res.send({
      fullName: get.fullName,
      email: get.email,
      id: get._id,
      password: get.password,
    });
  } catch (err) {}
};

module.exports = handleGetUserById;
