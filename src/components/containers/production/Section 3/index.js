import "./Prosec3.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const Prosec3 = () => {
  return (
    <div className="prosec3obwiy">
      <div className="container">
        <div className="prosec3title text-center">
          <h1>Наши партнеры</h1>
          <hr className="prosec3chizu" />
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

export default Prosec3;
