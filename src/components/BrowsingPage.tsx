import { FaRegImages } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { sendRequest } from "../utils/sendRequestion";
import react, { useEffect, useRef } from "react";
import firebase from "../firebase/firebase";
import { async } from "@firebase/util";
import moment from "moment";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  fullname: string | null;
  id: any | null;
}

const BrowsingPage = (props: Props) => {
  const { fullname, id } = props;
  const [url, setUrl] = useState<any>();
  const [image, setImage] = useState<any>();
  const [text, setText] = useState<any>();
  const [posts, setPosts] = useState<any>([
    { fullName: "hani" },
    { fullName: "hani" },
    { fullName: "hani" },
    { fullName: "hani" },
  ]);

  const [savePostId, setSavePostId] = useState();

  useEffect(() => {
    const getPostFather = async () => {
      const getPost = await sendRequest("getPost", { hello: "hello" }, "post");
      setPosts(getPost);
      // console.log(posts);
      console.log("isnt work  ");
    };
    getPostFather();
  }, []);

  // setCopyPast(posts);

  // const postss = posts;

  const sendPost = async () => {
    if (!url && !text) {
      return;
    }

    // console.log(url);
    // console.log("sendPost");
    // const getUserImage = await sendRequest("getImage", { id: id }, "post");
    // console.log(getUserImage.image);

    // if (text && url) {

      setPosts([
        ...posts,
        {
          fullName: fullname,
          postImage: url,
          text: text,
          date: moment().toDate(),
          userImage: 'Arrow.jpg',
        },
      ]);



    const sendUserInformations = sendRequest(
      "savePost",
      {
        fullName: fullname,
        postImage: url,
        text: text,
        userImage: 'Arrow.jpg',
      },
      "post"
    );

    setUrl("");
    setText("");
    setImage("");
    console.log(image)
  };

  const handleUpload = async () => {
    if (text && !image) {
      sendPost();
      return;
    }

    let file = image;

    const storage = firebase.storage();
    const storageRef = storage.ref();

    const uploadTask = storageRef.child("iamges/" + file.name).put(file);

    const onUploading = await uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log({ progress });
      },
      (err: any) => {
        throw err;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url: any) => {
          setUrl(url);
          console.log(url);
        });
      }
    );
  };

  useEffect(() => {
    sendPost();
  }, [url]);

  console.log();

  const myRef: any = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  console.log({ image });

  const options = ["delet"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [test, setTest] = useState<any>(1);
  const handleClose = (e: any) => {
    setAnchorEl(null);
    console.log(posts);
    console.log(e);
    const remove = posts.filter((item: any) => item._id !== savePostId);
    console.log(remove);
    setPosts(remove);
    console.log(remove);
  };

  // console.log(posts);

  const getPostId = (e: any) => {
    setSavePostId(e);
  };

  return (
    <div className="browsingPageFather">
      <div className="forSendingPost">
        <div className="postTextImage">
          <img src="./images/Arrow.jpg" className="postImage" />

          {image ? (
            <div>
              {" "}
              <img
                className="previewImage"
                id="blah"
                src={URL.createObjectURL(image)}
              />
              <TiDeleteOutline
                onClick={() => {
                  setImage(undefined);
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="SearchForPost">
          <input
            type="text"
            placeholder="post some thing"
            className="postSearch"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
        </div>

        <div className="iconGetFile">
          <label className="filebutton">
            <FaRegImages />
            <span>
              <input
                type="file"
                id="myfile"
                name="myfile"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files![0]);
                }}
                // value={image}
              />
              <img id="output" />
            </span>
          </label>
        </div>

        <div
          className="sendPost"
          onClick={() => {
            handleUpload();
          }}
        >
          <p className="postItString">post it!</p>
        </div>
      </div>

      <div className="ref" ref={myRef}>
        {posts.map((e: any) => (
          <div>
            {/* <div>{e._id}</div> */}
            {/* {  <button className="deletingAPost" onClick={()=>{}}>Delet the post</button>} */}
            <div className="postFather">
              <div className="personalInformationP">
                <div className="postImageName">
                  <div className="image">
                    <img
                      src={
                        e.userImage == "Arrow.jpg"
                          ? "./images/Arrow.jpg"
                          : e.userImage
                      }
                      className="postImageP"
                    />
                  </div>
                  <div className="namedate">
                    <div>
                      <span className="userName">{e.fullName}</span>
                      <br></br>
                      <span className="postTime">
                        {moment(e.date).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="optionIcon">
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon
                        onClick={() => {
                          getPostId(e._id);
                        }}
                      />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {/* {options.map((option) => ( */}

                      <MenuItem onClick={() => handleClose(e._id)}>
                        delet
                      </MenuItem>

                      {/* ))} */}
                    </Menu>
                  </div>
                  {/* <FaEllipsisV /> */}
                </div>
              </div>
              <div className="postText">{e.text ? <p>{e.text}</p> : null}</div>

              <div>
                {" "}
                {e.postImage ? (
                  <img src={e.postImage} className="Imagespost" />
                ) : null}
              </div>

              {/* <img src="./images/Arrow.jpg" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsingPage;
