const user = require("../models/image");

const handleSaveImage = async (req, res) => {
  try {
    const findImage = await user.find({ userId: req.body.id });

    if (findImage.length) {
      const updateImage = await user.updateOne(
        { image: findImage.image },
        { $set: { image: req.body.image } }
      );
    } else {
    const saveImage = new user({
      image: req.body.image,
      userId: req.body.id,
    });

    saveImage.save();
    }
  

  } catch (e) {
    console.log(e);
  }
};

module.exports = handleSaveImage;
