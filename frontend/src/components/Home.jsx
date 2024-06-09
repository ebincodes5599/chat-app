import React from "react";
import Navbar from "./Navbar";

import Sidebar from "./sidebar/Sidebar";

import MessageContainer from "./messages/MessageContainer";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <Navbar />
        </div>

        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-blue-100  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
