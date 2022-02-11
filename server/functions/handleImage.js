const user = require("../models/image");

const handleImage = async (req, res) => {
  try {
    const oldImage = await user.find({userId:req.body.id});
    if(oldImage.length){

        res.send({image:oldImage[0].image})
      

    }

    

  } catch (e) {
    console.log(e);
  }
};

module.exports = handleImage;
