import React from "react";
import { Animation, Mask, View, Container, Button } from "mdbreact";
import Nav from "../components/Nav";
import { SITELINKS } from "../components/SITELINKS";
const AppPage = () => {
  return (
    <div id="apppage">
      <header>
        <Nav />
        <View>
          <Mask className="d-flex white-text flex-column justify-content-center align-items-center gradient">
            <Container>
              <Animation type="fadeIn" duration="4s">
                <h1>LODESTAR</h1>
              </Animation>

              <hr className="hr-light" />
              <div className="d-inline-flex p-2 col-example">
                <Animation type="fadeInRight" duration="4s">
                  <h4 className=" h4-responsive lead">
                    We create powerful web applications, design interactive
                    websites, provide strategy, business studies, and new
                    technologies to help clients succeed at the speed of
                    innovation. We invite you to learn more about the work we
                    are doing at LODESTAR.
                  </h4>
                </Animation>
              </div>
              <hr className="hr-light" />
              <div className="d-flex justify-content-center">
                <Button
                  outline
                  color="warning"
                  className="hoverable"
                  href={SITELINKS.ABOUT}
                >
                  Learn More
                </Button>
              </div>
            </Container>
          </Mask>
        </View>
      </header>
    </div>
  );
};

export default AppPage;
