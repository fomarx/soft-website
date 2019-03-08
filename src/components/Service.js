import React, { Component } from "react";
import { Card, CardBody, Button, CardHeader, CardFooter } from "mdbreact";
import { SITELINKS } from "./SITELINKS";
export default class Service extends Component {
  render() {
    return (
      <Card color={this.props.color}>
        <CardHeader>
          <span className="four-point-star-second" />
          <span className="four-point-star-primary" />
          <span className="four-point-star-second" />
          <h3>{this.props.title}</h3>
        </CardHeader>
        <CardBody>{this.props.text}</CardBody>
        <CardFooter>
          <Button href={SITELINKS.CONTACT} color="warning">
            Request A Quote
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
