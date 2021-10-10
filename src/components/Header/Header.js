import "./Header.css";
import React, { useState } from "react";
import logo from "./osten.svg";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as AiIcons from "react-icons/ai";
// const data = [
//     { to: "/", title: "Home", id: "main" },
//     { to: "/about", title: "About" },
//     { to: "/manufaction", title: "Manufaction" },
//     { to: "/services", title: "Services" },
//     { to: "/production", title: "Production" },
//     { to: "/constructor", title: "Constructor" },
//     { to: "/news", title: "News" },
//     { to: "/contacts", title: "Contacts" },

//     { to: "/123", title: "123" },

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const [isShow, setIsShow] = useState(false);
  // const toggleMenu = () => {
  //   setIsShow(!isShow);

  return (
    <header className="App-header shadow">
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <img src={logo} alt="" className="App-logo logo" />
        <Button
          className="next btn btn-warning d-xl-none"
          onClick={showSidebar}
        >
          <FaIcons.FaBars className="barcha mb-1" />
        </Button>
        <div
          className={
            sidebar
              ? "div d-xxl-none align-items-center mobile active"
              : "mobile"
          }
          // className={`div d-xxl-none align-items-center ${
          //   isShow ? "mobile" : "d-none"
          // }`}
          id="menu"
        >
          <ul className="skritiy inner-menu" id="menu2" onClick={showSidebar}>
            <li>
              {" "}
              <Link to="/" className="main">
                {/* <AiIcons.AiFillHome className="me-2" /> */}
                ГЛАВНАЯ
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">О НАС</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/manufaction">ПРОИЗВОДСТВО</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/services">УСЛУГИ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/production">ПРОДУКЦИЯ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/constructor">КОНСТРУКТОР</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/news">НОВОСТИ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contacts">КОНТАКТЫ</Link>{" "}
            </li>
          </ul>
        </div>
        <ul className="d-flex d-xl-flex d-md-none d-none ulcha">
          {/* 1 - variant */}
          {/* {data.map(v => <li> <Link to={v.to} className="ms-3"></Link> </li>)} */}

          {/* 2 - variant */}
          <li>
            {" "}
            <Link to="/" className="act" id="main">
              ГЛАВНАЯ
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about" className="href">
              О НАС
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/manufaction" className="href">
              ПРОИЗВОДСТВО
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/services" className="href">
              УСЛУГИ
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/production" className="href">
              ПРОДУКЦИЯ
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/constructor" className="href">
              КОНСТРУКТОР
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/news" className="href">
              НОВОСТИ
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contacts" className="href">
              КОНТАКТЫ
            </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
