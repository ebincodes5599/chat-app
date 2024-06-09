import React from "react";
import Sidebar from "./sidebar/Sidebar";

import GroupchatButton from "./sidebar/GroupchatButton";
import MessageContainer from "./messages/MessageContainer";

const Card = () => {
  return (
    <div className="flex justify-center ">
      <div className="  bg-white">
        <GroupchatButton />
        <Sidebar />
      </div>
      <div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Card;
