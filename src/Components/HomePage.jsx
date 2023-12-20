import React from "react";
import { FaChevronDown } from "react-icons/fa";
const HomePage = () => {
  return (
    <div className="mx-16 ">
      <div className="flex flex-col items-center justify-center my-36">
        <p className="text-[2rem] font-medium">
          Welcome to <span className="font-bold">Fhenix Battles</span>
        </p>
        <p>
          A online Multiplayer game made using{" "}
          <span className="text-orange-500 font-bold">Fhenix.</span>
        </p>
      </div>
      <div className="flex items-center gap-2 justify-center mb-12">
        <p className="">Scroll Down to Explore.</p>
        <p>
          <FaChevronDown className="border border-black w-9 h-5 hover:bg-black hover:text-white text-xl rounded-full " />
        </p>
      </div>
    </div>
  );
};

export default HomePage;
