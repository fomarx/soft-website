import React from "react";
import { Container, Fa, Row, Col, Card, Button } from "mdbreact";

const Projects = () => {
  return (
    <section id="projects" className="text-center my-5">
      <h1>OUR FEATURED PROJECTS</h1>

      <p className="grey-text w-responsive mx-auto mb-5" />
      <Container>
        <Row>
          <Col md="12" className="mb-4">
            <Card
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1483937/pexels-photo-1483937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                backgroundSize: "cover"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h5 className="orange-text">
                    <Fa icon="shopping-cart" />
                    <strong> E-Commerce</strong>
                  </h5>
                  <h3 className="py-3 font-weight-bold">
                    <strong>LODESTAR E-COMMERCE</strong>
                  </h3>
                  <p className="pb-3">
                    E-commerce has allowed firms to establish a market presence,
                    or to enhance an existing market position, by providing a
                    cheaper and more efficient distribution chain for their
                    products or services.
                  </p>
                  <Button color="orange" rounded size="md">
                    <Fa icon="clone" className="left" /> Explore
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6" className="md-0 mb-4">
            <Card
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                backgroundSize: "cover"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h5 className="orange-text">
                    <Fa icon="object-group" />
                    <strong> Template </strong>
                  </h5>
                  <h3 className="py-3 font-weight-bold">
                    <strong>LODESTAR Website Template</strong>
                  </h3>
                  <p className="pb-3">
                    Ready to use simple website, dynamic, simple, friendly and
                    easy to use. Dynamic Web Template is a copy of a web page
                    that you can create to contain settings, formatting, and
                    page elements such as text, graphics, page layout, styles,
                    and regions of a webpage that can be modified.
                  </p>
                  <Button color="orange" rounded size="md">
                    <Fa icon="clone" className="left" /> Explore
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6" className="md-0 mb-4">
            <Card
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                backgroundSize: "cover"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h5 className="orange-text">
                    <Fa icon="bank" />
                    <strong>Realestate</strong>
                  </h5>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Realestate Managment System</strong>
                  </h3>
                  <p className="pb-3">
                    Realestate and construction projects managment (real estate
                    marketing), which aims to market real estate and large
                    projects and attract investors to the Turkish market from
                    Eastern Europe - Russia and the Middle East.
                  </p>
                  <br></br>
                  <Button color="orange" rounded size="md">
                    <Fa icon="clone" className="left" /> Explore
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
