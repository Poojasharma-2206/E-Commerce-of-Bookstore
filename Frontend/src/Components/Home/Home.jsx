import React from "react";
import Banner from "../Banner/Banner";
import BestSellerBook from "./BestSellerBook/BestSellerBook";
import FavroiteBook from "./FavroiteBook/FavroiteBook";
import PromoBanner from "./PromoBanner/PromoBanner";
import OtherBooks from "./OtherBooks/OtherBooks";
import Review from "./ReviewSection/Review";

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBook/>
      <FavroiteBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
    // <div className="">
    //   <div className="h-screen">Home</div>
    //   <div className="h-screen bg-red-600 "></div>
    // </div>
  );
};

export default Home;
