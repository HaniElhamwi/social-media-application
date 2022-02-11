// const { find } = require("../models/user");
const user = require("../models/user");

const handleUpdatePassword = async (req, res) => {
  try {

    const  findByPasswordEmail = await user.find({email:req.body.email,password:req.body.oldPassword})


    console.log(findByPasswordEmail)
    if(findByPasswordEmail.length){
    await user.updateOne(
      { password: req.body.oldPassword },
      { $set: { password: req.body.newPassword } }
    );
    //    console.log(req.body.newPassword)
    res.send({ situation: "success" });
    }else{
        res.send({ situation: "wrong" });
    }

  } catch (err) {
    console.log({ err });
  }
};

module.exports = handleUpdatePassword;
