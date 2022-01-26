import { AiTwotoneHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

import "./index.css";

const Menu = () => {
  return (
    <div className="menuFather">


<div className="menuItemsFather">

      <div className="menuItems">
        <div className="homeIcon">
          <AiTwotoneHome />
      
        </div>

        <div>
          <p>Home</p>
        </div>
      </div>



      <div className="menuItems">
        <div className="homeIcon">
          <AiFillSetting />
        </div>

        <div>
          <p>Setting</p>
        </div>
      </div>





      </div>


    </div>
  );
};

export default Menu;
