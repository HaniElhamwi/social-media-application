import React, { useEffect, useState } from "react";
import "./index.css";
import { ButtonBase } from "@material-ui/core";
import { sendRequest } from "../utils/sendRequest";

import { useUser } from "../hooks/useUser";

const UsersList = ({ selectedChatingUser, setSelectedChatingUser }) => {
  const [usersList, setUsersList] = useState([]);
  
  const [getValue, setGetValue] = useState("");
  const { id } = useUser();

  useEffect(() => {
    const func = async () => {
      const respone = await sendRequest("usersList", {}, "post");
      setUsersList(respone.filter((x) => x._id !== id));
    };

    func();
  }, []);

  // console.log(usersList);

  // console.log(getValue);

  const filteredValue =
    getValue !== ""
      ? usersList.filter((x) =>
          x.fullName.toLowerCase().includes(getValue.toLowerCase())
        )
      : usersList;

  return (
    <div className="contentDesign">
      <div className="titleOfChat">
        {/* <div className="chatString">
           <p className="pp">Chat</p>
        </div> */}
        {/* <ButtonBase> 
          <p className="newMessage">NewMessage</p>
        </ButtonBase> */}
      </div>

      <div className="searchFor">
        <div>
          <i class="fas fa-search"></i>
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={(e) => {
              setGetValue(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="Contents">
        {filteredValue.map((e) => (
          <div
            className={`listOfTheContents ${
              selectedChatingUser === e._id ? "with-border" : ""
            }`}
            onClick={() => setSelectedChatingUser(e._id)}
          >
            <div className="pictureOfTheContents">
            {<img src="./imagee/Arrow.jpg" className="picure" />}
            </div>
            <div className="nameOfTheContents">
              <div className="Stringoo">
                <span className="weightmua"> {e.fullName} </span>
              </div>
              <div className="lastMessage">
                <span className="lastMessage">my friend</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
