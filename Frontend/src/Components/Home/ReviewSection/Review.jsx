import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react icons
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-14">
      {/* Revies{" "} */}
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/**txt */}
              <div className="text-black">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus temporibus doloribus iste aliquid porro illo nam
                  exercitationem iusto! Recusandae, atque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 7</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
