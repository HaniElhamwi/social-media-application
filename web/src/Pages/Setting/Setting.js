import React, { useState } from "react";
import "./Setting.css";
import { useUser } from "../../hooks/useUser";
import { sendRequest } from "../../utils/sendRequest";
  import { storage } from "./firebase";
import { useHistory } from "react-router-dom";
import firebase from "./firebase";

const Setting = () => {
  let c = useHistory();
  const [changeInput, setChangeInput] = useState(1);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [image, setImage] = useState();
  const [url, serUrl] = useState("");
  // const [progress,setProgress]=useState(0)

  const onUpdate = async () => {
    const response = await sendRequest(
      "updatePassword",
      { oldPassword: oldPassword, newPassword: newPassword, email: email },
      "post"
    );

    if (response.situation == "success") {
      setChangeInput(1);
    } else {
      alert(false);
      setChangeInput(1);
    }

    // console.log(newPassword);
  };

  const { id, email, fullName, password } = useUser();

  const handleUpload = () => {
    // console.log(this.state.image);
    let file = image[0];
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child("images/" + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log({ progress });
      },
      (error) => {
        throw error;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          
        const send  =  () =>{

          const getItem =  sendRequest("saveImage", { id: id, image: url }, "post");
          serUrl(url);
         
        }
        send()
      
        });
      }
    );
  };


  const getImage = async () => {
    const response = await sendRequest("image", { id: id }, "post");

    if (response) {
      serUrl(response.image);
    }
  };

  getImage();

  return (
    <div className="settingProfile">
      <div className="settingMenu">
        <div>
          <img src={url} className="imageOfProfile" />
        </div>
        <div>
          <h1>{fullName}</h1>
        </div>
        <div className="email">
          <p> {email}</p>
        </div>

        {changeInput == 1 ? (
          <p
            className="ChangePasswordString"
            onClick={() => {
              setChangeInput(2);
            }}
          >
            change password and persoal image{" "}
          </p>
        ) : (
          <div>
            <div>
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files);
                  // console.log({ e: e.target.files });
                }}
              />

              <button onClick={handleUpload}>upload</button>
            </div>

            <br></br>
            <br></br>
            <div>
              <input
                className="inputChangePassword"
                type="string"
                placeholder="old password"
                onChange={(s) => setOldPassword(s.target.value)}
              />
            </div>

            {/* <div>
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files);
                  // console.log({ e: e.target.files });
                }}
              />

              <button onClick={handleUpload}>upload</button>
            </div> */}

            <div className="newPassWord">
              <input
                className="inputChangePassword"
                type="string"
                placeholder="new password"
                onChange={(s) => setNewPassword(s.target.value)}
              />
              <div className="buttons">
                <div>
                  <button className="button" onClick={() => onUpdate()}>
                    Change
                  </button>
                </div>

                <div>
                  <button className="button2" onClick={() => setChangeInput(1)}>
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <p
          className="returnToMAinPage"
          onClick={() => {
            c.push("chat");
          }}
        >
          main page
        </p>
      </div>
    </div>
  );
};
export default Setting;
