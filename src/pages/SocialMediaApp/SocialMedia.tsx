import Menu from "../../components/Menu";
import BrowsingPage from "../../components/BrowsingPage";
import Myfriends from "../../components/MyFriends";
import "./App.css";
import { useUser } from "../../hooks/useUSer";

const SocialMedia = () => {
  const { fullName, id } = useUser();

  return (
    <div className="socialMediaApp">
      
      <div>
        <div className="profileImage">
          <img src="./images/Arrow.jpg" className="settingImage" />
          <img src="./images/H.jpg" className="settingImage" />
        </div>
      </div>

      <div className="socialMediaPages">
        <Menu />
        <BrowsingPage fullname={fullName} id={id} />
        <Myfriends />
      </div>
    </div>
  );
};

export default SocialMedia;
