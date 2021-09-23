import "./Sec2.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Tab } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
// import Sonnet from "react-bootstrap/Sonnet";

const ManufacSec2 = () => {
  return (
    <div className="manufacsec2obwiy">
      <div className="container">
        <div className="manuafcsec2title text-center">
          <h1> Производство </h1>
          <hr className="manufacsec2liniya" />
        </div>
        <div className="prosec2qaysidur">
          {/* <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Sonnet />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Sonnet />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container> */}
        </div>
      </div>
    </div>
  );
};

export default ManufacSec2;
