import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img
        src="/icon.png"
        alt="Icon"
        className="absolute top-8 left-8 w-10 md:w-12 h-auto z-50"
      />
      <img
        src="/homepage.png"
        alt="Homepage"
        className="absolute inset-0 w-full h-full"
      />
      <button
        onClick={() => navigate('/home')}
        className="absolute bottom-[14%] left-[7%] cursor-pointer md:bottom-[3%] md:left-[16%]"
        aria-label="Click here to go to home"
      >
        <div className="w-40 h-40 md:w-36 md:h-36 lg:w-48 lg:h-48 2xl:w-80 2xl:h-48 bg-transparent"></div>
      </button>
    </main>
  );
};

export default Home;
