
const user = require("../models/user");

const handleLogin = async (req, res) => {

  try {

    console.log("Handle Login Called");

    const userDocument = await user.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (userDocument) {
      res.send({
        reading: "true",
        id: userDocument._id,
        fullName: userDocument.fullName,
        email: userDocument.email,
        password:userDocument.password
      });
      // console.log("userDocument.fullName");
    } else {
      res.send({ reading: "false" });
    }
  } catch (e) {
    console.log({ e });
  }
};

module.exports = handleLogin;
