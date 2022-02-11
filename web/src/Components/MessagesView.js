import React, { useEffect, useRef, useState, LegacyRef } from "react";
import "./index.css";
// import { ButtonBase } from "@material-ui/core";
import { sendRequest } from "../utils/sendRequest";
import { useUser } from "../hooks/useUser";

const MessagesView = ({ selectedChatingUser }) => {
  const [CurrnetChatingUser, setCurrentChatingUser] = useState("");
  const [messageText, setMessageText] = useState();
  const [messagesList, setMessagesList] = useState([]);
  const { id } = useUser();

  useEffect(() => {
    
    const funct = async () => {
      const getUser = await sendRequest(
        "userId",
        {
          id: selectedChatingUser,
        },
        "POST"
      );

      const OldMessages = await sendRequest(
        "getOldMessages",
        {
          fromUserId: id,
          toUserId: selectedChatingUser,
        },
        "POST"
      );
      // console.log({OldMessages})
      setMessagesList([
        ...OldMessages.messagesList,
        ...OldMessages.messagesdialog,
      ]);
      setCurrentChatingUser(getUser);
    };

    funct();
  }, [selectedChatingUser]);

  const sendMessage = async () => {
    setMessageText("");
    const response = await sendRequest(
      "message",
      {
        messageText: messageText,
        fromUserId: id,
        toUserId: selectedChatingUser,
      },
      "post"
    );
    setMessagesList((messages) => [...messages, response]);
  };
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight - ref.current.clientHeight;
  }, [messagesList]);

  // console.log(messagesList);

  function onEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  const array =  messagesList.sort(function(a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c-d;
  });
  return (
    <div className="FileOfMessages">
      <div className="bordering">
        <div className="contectOfTheList">
          <div className="pictures">
            <img
              className="Arrow-picture"
              src="./imagee/Arrow.jpg"
              width="50px"
              height="50px"
            />
          </div>

          <div className="strings">
            <span className="arrow">{CurrnetChatingUser.fullName}</span>
            <span className="ArrowLider"></span>
          </div>
        </div>
        <div className="chat-contect" ref={ref}>
          {array.map((y) => (
              <div className={y.fromUserId == id ? "margino" : "margin"}>
               <span
                  className={
                    y.fromUserId == id ? "messageISend" : "messageYouSend"
                  }
                >
                 {y.message}
              </span>
              </div>
            ))}
        </div>

        <div className="send-messeage">
          <div className="heeeeee">
            <input
              onKeyPress={onEnter}
              className="input-sending"
              placeholder="type Something..."
              type="text"
              onChange={(e) => {
                setMessageText(e.target.value);
              }}
              value={messageText}
            />
            <i
              id="send-icon"
              class="far fa-paper-plane"
              onClick={sendMessage}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;
