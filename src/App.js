import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="sweet-loading">
          <ClipLoader
            color={"black"}
            loading={loading}
            className="afsuski"
            size={50}
          />
        </div>
      ) : (
        // <ClipLoader
        //   className="afsuski"
        //   color={"black"}
        //   loading={loading}
        //   size={40}
        // />
        <div>
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
      )}
    </div>
  );
};

export default App;
