import "./NewSec2.css";
import React from "react";

const NewSec2 = () => {
  return (
    <div className="newsec2obwiy">
      <div className="container">
        <div className="newsec2title text-center">
          <h1>Новости</h1>
          <hr className="newsec2chizu" />
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="shadow">
              <a href="#">
                <img
                  src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-7.jpg"
                  alt=""
                  rel="nooper noreferrer"
                  className="w-100"
                />
                <h4 className="p-4  text-center">Построен новый лифт</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow">
              <a href="#">
                <img
                  src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-4.jpg"
                  alt=""
                  rel="nooper noreferrer"
                  className="w-100"
                />
                <h4 className="p-4  text-center">РЕМОНТ И ОБСЛУЖИВАНИЕ</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow">
              <a href="#">
                <img
                  src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-L1.jpg"
                  alt=""
                  rel="nooper noreferrer"
                  className="w-100"
                />
                <h4 className="p-4  text-center">ДИСПЕТЧЕРИЗАЦИЯ</h4>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow">
              <a href="#">
                <img
                  src="https://orzu-tehnopark.s3.amazonaws.com/liftpartner.png"
                  alt=""
                  rel="nooper noreferrer"
                  className="w-100"
                />
                <h4 className="p-4  text-center">ПАССАЖИРСКИЕ ЛИФТЫ</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSec2;
