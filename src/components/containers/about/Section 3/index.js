import "./Section 3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Link } from "react-router-dom";

import React from "react";
SwiperCore.use([Pagination]);
const AboutSec3 = () => {
  return (
    <div className="aboutsec3obwiy">
      <div className="container ">
        <div className="aboutsec3title text-center">
          <h1>Кабины лифтов</h1>
          <hr className="aboutsec3chizu" />
          <div className="swiper-container swiper-container-initialized swiper-container-horizontal p-5 mb-4">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  960: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },

                  // "768": {
                  //     "slidesPerView": 4,
                  //     "spaceBetween": 40
                  // },
                  // "1024": {
                  //     "slidesPerView": 5,
                  //     "spaceBetween": 50
                  // }
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">osten l3</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L2</h5>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L1</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">osten l3</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L2</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L1</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">osten l3</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L2</h5>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <div className="card">
                      <img
                        src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"
                        alt=""
                      />
                      <h5 className="my-4">OSTEN L1</h5>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          <Link className="btn btn-warning aboutsec3link">ВСЯ ПРОДУКЦИЯ</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSec3;
