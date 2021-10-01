import "./ConstrucSec2.css";
import { Link } from "react-router-dom";

import React from "react";

const ConstrucSec2 = () => {
  return (
    <div className="construcsec2obwiy">
      <div className="container">
        <div className="construcsec2title text-center">
          <h1>Создайте интерьер своего лифта</h1>
          <hr className="construcsec2chizu" />
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="divforlift">
              <div className="lift-div">
                <img
                  src="https://osten.vercel.app/images/lift/container/frame.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="construcsec2title2">
              <p>
                Создайте свой собственный интерьер лифта онлайн уже сегодня.
                Выберите дизайн из коллекции "COMPANY NAME", комбинируйте
                материалы, освещение и аксессуары, чтобы создать уникальный
                интерьер лифта.
              </p>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b> Шаг 1</b> - Размеры подъемника
              </h1>
              <form action="#">
                <div className="form-group row">
                  <label
                    htmlFor="firstinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Высота (мм)
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="number"
                      placeholder="Высота"
                      id="firstinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="secondinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Глубина (мм) <br /> Боковые стенки
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="number"
                      placeholder="Глубина"
                      id="secondinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="thirdinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Ширина (мм) Задние <br /> стенки
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="number"
                      placeholder="Ширина"
                      id="thirdinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 2</b> - Выберем цвет боковых стенок
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01_NllNXd8.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03_vy90iSd.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07_MqePO8i.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 3</b> - Выберем цвет задней стенки
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01_NllNXd8.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03_vy90iSd.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07_MqePO8i.jpg"
                    alt=""
                    className="koroceimg"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 4</b> - Выберем стиль зеркала
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half.png"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half-small.png"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-full_0oE6vfK.png"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://osten.vercel.app/images/lift/mirrors/icon-mirror-none.png"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 5</b> - Возьмем поручни
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails1.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails2.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://osten.vercel.app/images/lift/mirrors/icon-mirror-none.png"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 6</b> - Выберем пол
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/floors01.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title3">
              <h1>Тип пола</h1>
              <ul className="m-0 p-0">
                <li className="item-squared koroceimg2">Винил</li>
                <li className="item-squared ms-2 koroceimg2">Резиновый</li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b>Шаг 7</b> - Подберем потолочное освещение
              </h1>
              <ul className="m-0 p-0">
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling5.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling1.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling3.jpg"
                    alt=""
                    className="koroceimg2"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="construcsec2title2">
              <h1>
                {" "}
                <b> Шаг 8</b> - Детали проекта
              </h1>
              <form action="#">
                <div className="form-group row">
                  <label
                    htmlFor="torinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Название проекта
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="text"
                      id="torinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label
                    htmlFor="bewinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Название компании
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="text"
                      id="bewinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label
                    htmlFor="oltiinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Контактное лицо
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="text"
                      id="oltiinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label
                    htmlFor="yettiinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Адрес
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="text"
                      id="yettiinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label
                    htmlFor="sakkizinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Почтовый индекс
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="text"
                      id="sakkizinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label
                    htmlFor="toqqizinput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Номер телефона
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="tel"
                      id="toqqizinput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label
                    htmlFor="oninput"
                    className="form-label col-xl-3 col-sm-4"
                  >
                    Электронной почты
                  </label>
                  <div className="col-xl-9 col-sm-8">
                    <input
                      type="email"
                      id="oninput"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4 col justlinkde">
                  <Link className="btn btn-warning">Отправить запрос</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstrucSec2;
