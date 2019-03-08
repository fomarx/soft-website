import React, { Component } from "react";
import {
  Fa,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
  Container,
  Animation
} from "mdbreact";
import SocialIcons from "../components/SocialIcons";
import { SITELINKS } from "../components/SITELINKS";
import Photo from "../assets/images/web_2.png";
class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    // const phone = document.getElementById("phone").value;
    // const company = document.getElementById("company").value;
    // const message = document.getElementById("message").value;
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    return (
      <Container id="contact">
        <section className="contact-section my-5">
          <h1>CONTACT US</h1>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <Card>
              <Row>
                <Col lg="8">
                  <CardBody style={{ color: "#ffa000" }} className="form">
                    <h3 className="mt-4">
                      <Fa icon="envelope" className="mr-1" />
                      Write to us:
                    </h3>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input
                            type="text"
                            id="name"
                            label="Your name"
                            name="name"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input
                            type="email"
                            id="email"
                            label="Your email"
                            name="email"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input
                            type="number"
                            id="phone"
                            label="Your phone"
                            name="phone"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input
                            type="text"
                            id="company"
                            label="Your company"
                            name="company"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <div className="md-form mb-0">
                          <Input
                            type="textarea"
                            id="message"
                            label="Your message"
                            name="message"
                          />
                          <Button rounded type="submit" color="amber darken-2">
                            <Fa icon="send-o" />
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>

                <Col className="text-center" lg="4">
                  <CardBody
                    style={{ color: "#1c2a48" }}
                    className="contact h-100"
                  >
                    <Animation type="flipInY" infinite duration="4s">
                      <img src={Photo} alt="" />
                    </Animation>

                    <h4 className="my-4 pb-2">CONTACT INFORMATION</h4>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          <Fa icon="map-marker" className="pr-2" />
                          Istanbul - Turkey
                        </p>
                      </li>
                      <li>
                        <p>
                          <Fa icon="phone" className="pr-2" />
                          +90 539 264 83 96
                        </p>
                      </li>
                      <li>
                        <p>
                          <Fa icon="envelope" className="pr-2" />
                          ask@lodestar-soft.com
                        </p>
                      </li>
                    </ul>

                    <hr className="hr-light my-4" />
                    <ul className="list-inline text-center list-unstyled p-2 fa-lg w-ic">
                      <SocialIcons link={SITELINKS.FACEBOOK} type="facebook" />
                      <SocialIcons
                        link={SITELINKS.INSTAGRAM}
                        type="instagram"
                      />
                      <SocialIcons link={SITELINKS.LINKEDIN} type="linkedin" />
                      <SocialIcons link={SITELINKS.TWITTER} type="twitter" />
                      <SocialIcons link={SITELINKS.GITHUB} type="github" />
                    </ul>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </form>
        </section>
      </Container>
    );
  }
}
export default Contact;
