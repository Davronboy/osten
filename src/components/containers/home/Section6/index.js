import React from "react";
import "./Section6.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/components/scrollbar/scrollbar.min.css";
import SwiperCore, { Scrollbar } from "swiper/core";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const Section6 = () => {
  return (
    <div className="section6-obwiy">
      <div className="container text-center">
        <div className="section6-title">
          <h1>Отзывы клиентов</h1>
          <hr className="section6-chizu" />
        </div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="karoci-swiper text-light">
              <h4>JOHN DOE • PROPERTY INVESTOR</h4>
              <hr className="swiper-liniya" />
              <p>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="karoci-swiper text-light">
              <h4>Abdulaziz • Algorismic Company</h4>
              <hr className="swiper-liniya" />
              <p>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов Letraset
                с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
                программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                которых используется Lorem Ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="karoci-swiper text-light">
              <h4>Author • CYBERSPACE DEVELOPMENT CENTER</h4>
              <hr className="swiper-liniya" />
              <p>
                Многие думают, что Lorem Ipsum - взятый с потолка
                псевдо-латинский набор слов, но это не совсем так. Его корни
                уходят в один фрагмент классической латыни 45 года н.э., то есть
                более двух тысячелетий назад. Ричард МакКлинток, профессор
                латыни из колледжа Hampden-Sydney{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" /></SwiperSlide> */}
      </div>
    </div>
  );
};

export default Section6;
