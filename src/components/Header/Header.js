import "./Header.css";
import React, { useState } from "react";
import logo from "./osten.svg";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { to: "/", title: "ГЛАВНАЯ", cName: "main", id: 1 },
      { to: "/about", title: "О НАС", cName: "href", id: 2 },
      { to: "/manufaction", title: "ПРОИЗВОДСТВО", cName: "href", id: 3 },
      { to: "/services", title: "УСЛУГИ", cName: "href", id: 4 },
      { to: "/production", title: "ПРОДУКЦИЯ", cName: "href", id: 5 },
      { to: "/constructor", title: "КОНСТРУТОР", cName: "href", id: 6 },
      { to: "/news", title: "НОВОСТИ", cName: "href", id: 7 },
      { to: "/contacts", title: "КОНТАКТЫ", cName: "href", id: 8 },
    ],
  });
  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
  };
  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return "main href active";
    } else {
      return "main href inactive";
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
          id="menu"
        >
          <ul className="skritiy inner-menu" id="menu2" onClick={showSidebar}>
            {appState.objects.map((v, index) => (
              <li key={index}>
                {" "}
                <Link
                  to={v.to}
                  className={toggleActiveStyles(index)}
                  id={v.id}
                  onClick={() => {
                    toggleActive(index);
                  }}
                >
                  {v.title}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <ul className="d-flex d-xl-flex d-md-none d-none ulcha">
          {/* 1 - variant */}
          {appState.objects.map((v, index) => (
            <li key={index}>
              {" "}
              <Link
                to={v.to}
                className={toggleActiveStyles(index)}
                id={v.id}
                onClick={() => {
                  toggleActive(index);
                }}
              >
                {v.title}
              </Link>{" "}
            </li>
          ))}

          {/* 2 - variant */}
          {/* <li>
            {" "}
            <Link to="/" className="act" id="main">
              ГЛАВНАЯ
            </Link>{" "}
          </li>
         */}
        </ul>
      </div>
    </header>
  );
};
export default Header;
