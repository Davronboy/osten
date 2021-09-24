import "./Section7.css";
// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);
// import React from 'react'

const Section7 = () => {
  return (
    <div className="section7-obwiy">
      <div className="container">
        <div className="section7-title text-center">
          <h1>Наши партнеры</h1>
          <hr className="section7-chizu" />
        </div>
        <div className="swiper-container">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner3.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner4.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner5.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner6.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="xullas">
                  <img
                    src="https://osten.vercel.app/images/index/partner7.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Section7;
