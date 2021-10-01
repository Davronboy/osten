import React from "react";
import { Link } from "react-router-dom";
import "./Consec2.css";
const ContactSec2 = () => {
  
  return (
    <div className="contactssec2obwiy">
      <div className="container">
        <div className="constacts2title text-center">
          <h1>Контакты</h1>
          <hr className="contactssec2chizu" />
        </div>
        <div></div>
        <div className="my-5">
          <h3>Режим работы с 09:00 до 18:00</h3>
          <div className="qurol">
            <div className="row">
              <div className="col-md-4 mt-2">
                <b>Наш адрес:</b>
                <span className="ms-2">город Ташкент ...</span>
              </div>
              <div className="col-md-4 mt-2">
                <b>Телефон:</b>
                <span className="ms-2">
                  (+99897) 123-45-67, (+99897) 123-45-67
                </span>
              </div>
              <div className="col-md-4 mt-2">
                <b>Emai:</b>
                <span className="ms-2">info@lift.uz</span>
              </div>
            </div>
          </div>

          <div className="row nomde justify-content-center mt-5">
            <div className="col-lg-5 col-md-8">
              <form action="#" className="form">
                <label htmlFor="name" className="mt-3 form-label">
                  Ваше имя (обязательно)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                />

                <label htmlFor="email" className="mt-3 form-label">
                  Ваш e-mail (обязательно)
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />

                <label htmlFor="message" className="mt-3 form-label">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form-control"
                  required
                ></textarea>
                <div className="text-center">
                  <Link type="submit" className="btn btn-warning mt-4">
                    Отправить
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec2;
