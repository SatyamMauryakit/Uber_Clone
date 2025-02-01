import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen w-full justify-between flex flex-col  pt-8 bg-cover bg-[center-20%]
       bg-[url(https://media.istockphoto.com/id/1283041693/photo/potsdamer-platz-in-berlin-at-sunset.webp?s=2048x2048&w=is&k=20&c=uWvLuPOw0sZ18LyZd96v31TUvrEttB_vh5cTdFiwNCI=)]"
      >
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold ">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center  w-full text-white bg-black py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
