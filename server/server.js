const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();


const handleSignup = require("./functions/handleSignup");
const handleLogin = require("./functions/handleLogin");
const cors = require("cors");
const handleGetUsersList = require("./functions/handleGetUsersList");
const handleGetUserById = require("./functions/handleGetUserById");
const handleSendMessage = require("./functions/handleSendMessage");
const handleOldMessage = require("./functions/handleGetOldMessages");
const handleUpdatePassword=require("./functions/handleUpdatePassword")
const  handleImage = require("./functions/handleImage")
const handleSaveImage = require("./functions/haldeSaveImage")
// const handleGetImage = require("./functions/handleGetImage")




dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);
app.use(cors());
app.use(express.json());

app.use("/serverTest", (req, res) => {
  console.log("Working");

  res.write("<h1>Hello</h1>");
});

app.post("/signup", handleSignup);
app.post("/logIn", handleLogin);
app.post("/usersList", handleGetUsersList);
app.post("/userId", handleGetUserById);
app.post("/message", handleSendMessage);
app.post("/getOldMessages",handleOldMessage);
app.post("/updatePassword",handleUpdatePassword);
app.post("/image",handleImage);
app.post("/saveImage",handleSaveImage);
// app.post("/getImage",handleGetImage);




 
app.listen(8000, () =>
  console.log("server is up and running http:/192.168.50.30:8000/")
);
