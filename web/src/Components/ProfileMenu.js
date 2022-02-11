import React, { useState } from "react";
import "./index.css";
import { ButtonBase } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";
import { sendRequest } from "../utils/sendRequest";

function ProfileMenu({ fullName, id }) {
  const [url, setUrl] = useState();

  const [dialog, setDialog] = useState(false);
  let history = useHistory();

  const sureLogOut = () => {
    history.push("/signup");
    localStorage.removeItem("id");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
  };

  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const searchForOldImage = async () => {
    const getImage = await sendRequest("image", { id: id }, "post");

    setUrl(getImage.image);
  };

  searchForOldImage();

  console.log({ url });

  return (
    <div className="survival">
      <div className="chatList">
        <ButtonBase>
          
        { url ?   <img src={url} className="imageOfProfile"/> :  <img src="./imagee/Arrow.jpg" className="imageOfProfile"/>}
        
        </ButtonBase>

        <div className="nameOf">
          <p>{fullName}</p>

          {/* <div className="settingIcon">
         <div>
       <i class="fas fa-cog" id="settingIconn"></i>
       </div>
       <div>
         <p>setting</p>
       </div>
       </div> */}
        </div>
      </div>

      <div
        className="Organize"
        onClick={() => {
          history.push("./setting");
        }}
      >
        <div className="icon-string">
          <i class="fas fa-cog" id="settingIconn"></i>
        </div>
        <div className="done">
          <p className="changeColor">Setting</p>
        </div>
      </div>

      {dialog ? (
        <Dialog
          open={dialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Logout Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={sureLogOut} color="primary">
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}

      <div className="Organize">
        <div className="icon-string">
          <i class="fas fa-sign-out-alt" id="setting--icon"></i>
        </div>
        <div className="done">
          <p className="changeColor">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
