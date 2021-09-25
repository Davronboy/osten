import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Manufaction from "./components/pages/Manufaction";
import Services from "./components/pages/Services";
import Production from "./components/pages/Production";
import Constructor from "./components/pages/Constructor";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Page404 from "./components/pages/Page404";
import Footer from "./components/Footer/Footer";

// import { styled } from "@mui/material/styles";
// import Switch from "@mui/material/Switch";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import Swiper from 'swiper';
const data = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/manufaction", component: <Manufaction /> },
  { path: "/services", component: <Services /> },
  { path: "/production", component: <Production /> },
  { path: "/constructor", component: <Constructor /> },
  { path: "/news", component: <News /> },
  { path: "/contacts", component: <Contacts /> },

  { component: <Page404 /> },
];

// export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           "#fff"
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
//     width: 32,
//     height: 32,
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#fff"
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
//     borderRadius: 20 / 2,
//   },
// }));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="switch-checkbox">
          <label htmlFor="#" className="switch">
            {" "}
            <input
              type="checkbox"
              className="btn btn-danger"
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <Header />

        <div className="box">
          <Switch>
            {/* 1 - variant */}

            {data.map((v) => (
              <Route path={v.path} exact={v.exact}>
                {v.component}
              </Route>
            ))}

            {/* 2 - variant */}
            {/* <Route exact path="/">
          <Home />

          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/manufaction">
          <Manufaction />
          </Route>
          <Route path="/services">
          <Services />
          </Route><Route path="/production">
          <Production />
          </Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
