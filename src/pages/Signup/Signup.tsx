import { useState } from "react";
import { sendRequest } from "../../utils/sendRequestion";

import { createBrowserHistory } from "history";

const Signup = () => {
  let history = createBrowserHistory();

  const [email, setEmail] = useState<any>();
  const [fullName, setFullName] = useState<string>();
  const [password, serPassword] = useState<any>();

  const signupNewUSer = async () => {
    if (fullName == undefined) {
      alert("fullName Name iS Empty");
      return;
    }

    if (fullName.length < 5) {
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

    const sendUserInformations = await sendRequest(
      "signup",
      { email: email, fullName: fullName, password: password },
      "post"
    );

    if (sendUserInformations.statuse == "thereIsAnAccount") {
      alert("some thing is wrong this informations are alrady exist");

      console.log(sendUserInformations.statuse);
    } else {
      history.push("./socialMedia");
    }
  };

  console.log("aboard");
  return (
    <div className="loginFather">
      <div className="userInformations">
        <div>
          <h1>Signup</h1>
        </div>

        <div className="userEmail">
          <div>
            <p>FullName*</p>
          </div>
          <div>
            <input
              type="String"
              className="emailInput"
              placeholder="FullName"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="userEmail">
          <div>
            <p>password*</p>
          </div>
          <div>
            <input
              type="password"
              className="emailInput"
              placeholder="al lest 8 character"
              onChange={(e) => serPassword(e.target.value)}
            />
          </div>
        </div>

        <div
          className="loginWord"
          onClick={() => {
            signupNewUSer();
          }}
        >
          <p>Signup</p>
        </div>

        <div className="createAccountWord">
          <span>Already have an account</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
