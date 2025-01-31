import React from "react";
import Banner from "../Banner/Banner";
import FavroiteBooks from "./FavroiteBooks/FavroiteBooks";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavroiteBooks/>
    </div>
    // <div className="">
    //   <div className="h-screen">Home</div>
    //   <div className="h-screen bg-red-600 "></div>
    // </div>
  );
};

export default Home;
