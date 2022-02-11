const user = require("../models/user");

const handleSignup = async (req, res) => {
  try {
    const find = await user.find({ email:req.body.email });
    
    if (find.length) {
      res.send({ status: "failed" });
    } else {
      const newUser = new user({
        fullName: req.body.name + req.body.secondName,
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save();

      res.send({ status: "success" });
    }
  } catch (e) {
    console.log({ e });
  }
};

module.exports = handleSignup;
