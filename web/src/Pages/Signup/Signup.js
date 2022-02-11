import React, { useState } from "react";
import "./Signup.css";
import { sendRequest } from "../../utils/sendRequest";
import { useHistory } from "react-router-dom";
function Signup() {
  const [firstName, setFirstName] = useState();
  const [secondName, setsecondName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  let history = useHistory();

  const monister = async () => {
    if (firstName == undefined) {
      alert("First Name iS Empty");
      return;
    }

    if (firstName.length < 3) {
      alert("First Name iS Short");
      return;
    }

    if (secondName == undefined) {
      alert("second Name iS Empty");
      return;
    }

    if (secondName.length < 3) {
      alert("second Name iS Short");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("enter your email");
      return;
    }

    if (password.length < 6) {
      alert("password is short");
      return;
    }

    const response = await sendRequest(
      "signup",
      {
        name: firstName,
        secondName: secondName,
        email: email,
        password: password,
      },
      "POST"
    );
    console.log(firstName,email,secondName,password)  

     if (response.status == "failed") {
      alert("you have an account");
      return;
    }

    if (response.status == "success") {
      alert("New Account Craated Scuussfully");
    } else {
      alert("New Account Craating Faild");
    }

    console.log({response});
  };

  return (
    <div>
      <div className="loginPage">
        <div className="organize">
          <p className="loginString">signUp</p>
        </div>
        <div className="inputLogin">
          <input
            type="text"
            className="firstInput"
            placeholder="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="secondInput"
            placeholder="secondeName"
            onChange={(e) => setsecondName(e.target.value)}
          />
          <input
            type="email"
            className="secondInput"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="secondInput"
            placeholder="enterYourPassword"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="enterToLogIin">
          <h1
            className="enterToLogIinString"
            onClick={() => {
              monister();
            }}
          >
             signUp
          </h1>
          <a className="signInString" onClick={()=>{history.push("/")}}>log in </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
