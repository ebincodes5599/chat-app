import React from "react";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    // <div className="py-2 flex flex-col overflow-auto bg-white">
    <div className="p-4 flex flex-col  bg-blue-100 ">
      {/* <LogoutButton /> */}
      <Conversations />
    </div>
  );
};

export default Sidebar;
