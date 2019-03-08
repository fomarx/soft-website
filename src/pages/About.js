import React, { Component } from "react";
import { Animation, Row, Col, Card, CardBody, Container } from "mdbreact";
import Photo from "../assets/images/web_2.png";
import SocialIcons from "../components/SocialIcons";
import { SITELINKS } from "../components/SITELINKS";
import Accordion from "../components/Accordion";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: true,
      block2: false,
      block3: false
    };
  }
  toggle = index => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  };

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
      block2: expand,
      block3: expand
    });
  };
  render() {
    const accordionList = [
      {
        title: "Our Message",
        desc: `We believe in the importance of human in society and from here we work 
      to light your way and employ modern technology to suit your
      professional aspirations and goals of your organization. Lodestar
      believes in her ability to innovate and convey your ideas to a reality
      that serves the community and the human being.`
      },
      {
        title: "Our Vission",
        desc: `Contribute to the growth and expansion the vision of young
      people to use the latest software technologies to serve the
      human.`
      },
      {
        title: "Our Mission",
        desc: `Work to contribute to saving lives of people in dangerous
      places by establishing GIS projects that serve the community
      in addition to create a science and developmental
      environment to build an effective generation in Arab society
      in particular.
`
      }
    ];

    return (
      <section id="about">
        <Container>
          <h1>ABOUT US</h1>
          <Card>
            <Row>
              <Col className="text-center" lg="4">
                <CardBody
                  style={{ color: "#1c2a48" }}
                  className="contact h-100"
                >
                  <Animation
                    key={Photo.index}
                    type="fadeInDownBig"
                    duration="1s"
                  >
                    <img src={Photo} alt="" />
                  </Animation>
                  <hr className="hr-light my-4" />
                  <ul className="list-inline text-center list-unstyled p-2 fa-lg w-ic">
                    <SocialIcons
                      key={1}
                      link={SITELINKS.FACEBOOK}
                      type="facebook"
                    />
                    <SocialIcons
                      key={2}
                      link={SITELINKS.INSTAGRAM}
                      type="instagram"
                    />
                    <SocialIcons
                      key={3}
                      link={SITELINKS.LINKEDIN}
                      type="linkedin"
                    />
                    <SocialIcons
                      key={4}
                      link={SITELINKS.TWITTER}
                      type="twitter"
                    />
                    <SocialIcons
                      key={5}
                      link={SITELINKS.GITHUB}
                      type="github"
                    />
                  </ul>
                </CardBody>
              </Col>
              <Col lg="8">
                <CardBody>
                  <dl className="accordion">
                    {accordionList.map((item, index) => (
                      <Accordion
                        key={index}
                        title={item.title}
                        onClick={this.toggle(index + 1)}
                        expand={this.state[`block${index + 1}`]}
                        desc={item.desc}
                      />
                    ))}
                  </dl>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    );
  }
}

export default About;
