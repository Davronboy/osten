import "./ProSec2.css";

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Produksiya = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="prosec2obwiy">
      <div className="container">
        <div className="prosec2title text-center">
          <h1>Продукция</h1>
          <hr className="prosec2chizu" />
        </div>
        <div className="mt-5">
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Поручки лифтов" {...a11yProps(0)} />
              <Tab label="Опции" {...a11yProps(1)} />
              <Tab label="Кабины лифтов" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}></TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
                <div className="prosec2rasmdiv">
                  <Link>
                    <img
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                      alt=""
                      className="w-100"
                    />
                    <h3 className="m-2 text-white">osten l3</h3>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
                <div className="prosec2rasmdiv">
                  <Link>
                    <img
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                      alt=""
                      className="w-100"
                    />
                    <h3 className="m-2 text-white">OSTEN L2 </h3>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
                <div className="prosec2rasmdiv">
                  <Link>
                    <img
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                      alt=""
                      className="w-100"
                    />
                    <h3 className="m-2 text-white">OSTEN L1</h3>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Produksiya;
