import "./Login.css";
import { sendRequest } from "../../utils/sendRequestion";
import { useState } from "react";
import { createBrowserHistory } from "history";

const Login = () => {
  let history = createBrowserHistory();
  const Storeg = window.localStorage;
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const loginUser = async () => {
    console.log(email);

    const checkInformation = await sendRequest(
      "login",
      { email: email, password: password },
      "post"
    );

    if (checkInformation.statuse == "success") {

      Storeg.setItem("id", checkInformation.id);
      Storeg.setItem("fullName", checkInformation.fullName);
      Storeg.setItem("email", checkInformation.email);
      Storeg.setItem("password", checkInformation.password);
      history.push("./socialMedia");
    } else {
      alert("some thing is wrong check your information");
    }
  };

  return (
    <div className="loginFather">
      <div className="userInformations">
        <div>
          <h1>Login</h1>
        </div>

        <div className="userEmail">
          <div>
            <p>email*</p>
          </div>
          <div>
            <input
              type="email"
              className="emailInput"
              placeholder="email@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="userEmail">
          <div>
            <p>password*</p>
          </div>
          <div>
            <input
              type="email"
              className="emailInput"
              placeholder="al lest 8 character"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div
          className="loginWord"
          onClick={() => {
            loginUser();
          }}
        >
          <p>Login</p>
        </div>

        <div className="createAccountWord">
          <span>Create An Account</span>
        </div>
      </div>
    </div>
  );
};

// Create A InputWithLable component

export default Login;
