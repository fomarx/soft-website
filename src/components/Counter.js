import React from "react";
import { Card, CardBody, CardImage, CardTitle, CardText, Col } from "mdbreact";
import CountUp from "react-countup";

export default function Counter(props) {
  return (
    <Col style={{ maxWidth: "20rem" }} className="mb-3" sm="4" md="3">
      <Card className="card-image">
        <div className="parent">
          <CardImage
            cascade
            className="img-fluid"
            top
            src={props.image}
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
          />
        </div>
        <br />
        <CardBody
          cascade
          className="mdb-color darken-3 white-text rounded-bottom"
        >
          <CardText
            data-to="1700"
            data-speed="1500"
            className="white-text timer count-title count-number"
          >
            <CountUp
              className="CountUp"
              start={props.start}
              end={props.end}
              duration={4}
            />
          </CardText>
          <CardText>
            <i className={props.icon} />
          </CardText>

          <CardTitle>{props.title}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
}
