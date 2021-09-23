import "./Footer.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row posmotrim2">
          <div className="col-lg-4 endide">
            <h1>О НАС</h1>
            <p>
              «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
              Азии Компания «Osten» была основана в 2019 году!
            </p>
            <h1>МЫ В СОЦЮСЕТЯХ:</h1>
            <div className="social-icons d-flex">
              <Link to="" className="tavakal1 divinsta">
                {" "}
                <div className="divface2 smm  d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faFacebook} className="tuda insta" />
                </div>{" "}
              </Link>
              <Link to="" className="tavakal ms-2 divinsta">
                {" "}
                <div className="divinsta2 smm d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faInstagram} className="tuda  insta" />
                </div>{" "}
              </Link>
              <Link to="" className="tavakal divinsta ms-2">
                <div className="divtele2 smm d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faTelegram} className="tuda insta" />
                </div>{" "}
              </Link>
              <Link to="" className="tavakal divinsta ms-2">
                {" "}
                <div className="divyou2 smm d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faYoutube} className="tuda insta" />
                </div>{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-5 posmotrim endide">
            <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
            <div>
              <a href="#">
                {" "}
                <p className="border1">Построен новый лифт</p>{" "}
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <p className="border2">
                  РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ
                </p>{" "}
              </a>
            </div>
            <div>
              <a href="#">
                {" "}
                <p className="border3">ДИСПЕТЧЕРИЗАЦИЯ</p>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-5 endide">
            <h1>КОНТАКТЫ</h1>
            <p>
              <b>Номер телефона:</b>
              <span> +998 (93) 511-11-17 </span>
              <span> +998 (91) 791-51-15 </span>
            </p>
            <p>
              <b>Электронная почта:</b> "info@uzlift.uz"
            </p>
            <p>
              <b>Адрес:</b> "100077, город Ташкентб улица Мухаммад Юсуф 1А"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
