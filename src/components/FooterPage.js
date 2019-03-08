import React from "react";
import { Col, Container, Row, Footer, Animation } from "mdbreact";
import { SITELINKS } from "./SITELINKS";
import { HashLink as Link } from "react-router-hash-link";
import SocialIcons from "./SocialIcons";
import Logo from "../assets/images/logo.png";

const FooterPage = () => {
  return (
    <Footer color="mdb-color darken-3" className="font-small pt-4 mt-4">
      <Container className="text-center text-md-left">
        <Row className="text-center text-md-left mt-3 pb-3 white-text">
          <Col size="3">
            <Animation type="slideInDown" duration="4s">
              <img style={{ height: "9em" }} src={Logo} alt="logo" />
            </Animation>
          </Col>
          <Col size="3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful Links
            </h6>
            <p>
              <Link to={SITELINKS.PROJECTS}>Our Projects</Link>{" "}
            </p>
            <p>
              <Link to={SITELINKS.SERVICESPAGE}>Our Services</Link>{" "}
            </p>
            <p>
              <Link to={SITELINKS.ABOUT}>About Us</Link>{" "}
            </p>
          </Col>

          <Col size="3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Main Branch
            </h6>
            <p>
              <i className="fa fa-home mr-3" /> Istanbul, Turkey
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> ask@lodestar-soft.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +90 539 264 83 96
            </p>
          </Col>
          <Col size="3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Second Branch
            </h6>
            <p>
              <i className="fa fa-home mr-3" /> Damascus, Syria
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> ask@lodestar-soft.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +963 99 265 12 26
            </p>
          </Col>
        </Row>
        <hr />
        <Row className="footer-copyright py-3 text-center">
          <Col md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href={SITELINKS.WEBSITE} target="blank">
                {" "}
                lodestar-soft.com{" "}
              </a>
            </p>
          </Col>
          <Col md="4" lg="4" className="ml-lg-0">
            <div className="fa-lg w-ic text-md-right">
              <ul className="list-unstyled list-inline ">
                <li key={1} className="list-inline-item">
                  <SocialIcons link={SITELINKS.YOUTUTBE} type="youtube" />
                </li>
                <li key={2} className="list-inline-item">
                  <SocialIcons link={SITELINKS.FACEBOOK} type="facebook" />
                </li>
                <li key={3} className="list-inline-item">
                  <SocialIcons link={SITELINKS.INSTAGRAM} type="instagram" />
                </li>
                <li key={4} className="list-inline-item">
                  <SocialIcons link={SITELINKS.LINKEDIN} type="linkedin" />
                </li>
                <li key={5} className="list-inline-item">
                  <SocialIcons link={SITELINKS.TWITTER} type="twitter" />
                </li>
                <li key={6} className="list-inline-item">
                  <SocialIcons link={SITELINKS.GITHUB} type="github" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default FooterPage;
