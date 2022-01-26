import { useEffect, useState } from "react";
import { sendRequest } from "../utils/sendRequestion";

const Myfriends = () => {
  const [friendList, setFriendList] = useState([{fullName:'hani'},{fullName:'hani'}]);

  useEffect(() => {

    const getFriendList = async () => {
      const getfriendinformations = await sendRequest(
        "getFirendInformations",
        {},
        "post"
      );
      setFriendList(getfriendinformations);

    };
    getFriendList();
  }, []);

  const forMap = friendList;


  return (
    <div className="MyFriends">
      <div className="myFriendDialog">
      

     { forMap.map((mapIt:any) =>    
          <div className="myFriendsInformation">
            <div className="myFriendsImage">
              <img src={mapIt.image =="Arrow.jpg" ? "./images/Arrow.jpg" : mapIt.image} className="myFriendimageS" />
            </div>

            <div className="friendName">
              <p>{mapIt.fullName}</p>
            </div>
          </div>
            )}   
      </div>
    </div>
  );
};

export default Myfriends;
