import ProfileMenu from "../../Components/ProfileMenu";
import UsersList from "../../Components/UsersList";
import MessagesView from "../../Components/MessagesView";
import "./apo.css";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";

export default function ChatApp() {
  const { fullName ,id} = useUser();
  const [selectedChatingUser, setSelectedChatingUser] = useState();

  return (
    <div className="Father">

      <div className="ComponentCommon">
        <ProfileMenu id={id} fullName={fullName} />
        <UsersList
          selectedChatingUser={selectedChatingUser}
          setSelectedChatingUser={setSelectedChatingUser}
        />

        <MessagesView selectedChatingUser={selectedChatingUser} />
      </div>
    </div>
  );
}
