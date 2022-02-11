import "./Login.css";
import React, { useState } from "react";
import { sendRequest } from "../../utils/sendRequest";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Storeg = window.localStorage;

  const onSaveFunction = async () => {
    console.log("On Save Called");

    const respone = await sendRequest(
      "logIn",
      { email: email, password: password },
      "post"
    );

    if (respone.reading == "true") {
      Storeg.setItem("id", respone.id);
      Storeg.setItem("fullName", respone.fullName);
      Storeg.setItem("email", respone.email);
      Storeg.setItem("password", respone.password);
console.log( respone.password)

      history.push("/chat");
    } else {
      alert("false");
    }
  };

  return (
    <div className="loginPage">
      <div className="organize">
        <p className="loginString">log in</p>
      </div>
      <div className="inputLogin">
        <input
          type="email"
          className="firstInput"
          placeholder="enterYourEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="secondInput"
          placeholder="enterYourPassword"
          onChange={(s) => setPassword(s.target.value)}
        />
      </div>

      <div className="enterToLogIin">
        <h1 className="enterToLogIinString" onClick={() => onSaveFunction()}>
          Log in
        </h1>

        <a className="signInString" onClick={() => history.push("/signup")}>
          sign in
        </a>
      </div>
    </div>
  );
}

export default Login;
