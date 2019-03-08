import React, { Component } from "react";
import { Container, CardGroup, Row } from "mdbreact";
import Service from "../components/Service";
class Services extends Component {
  render() {
    return (
      <section id="services" className="my-5">
        <h1>OUR SERVICES</h1>

        <Container className="text-center">
          <p>
            We provide full-lifecycle product development services: from shaping
            the product idea to delivery. At every stage, we closely collaborate
            with our clients to achieve the best possible results together.
          </p>
          <Row>
            <CardGroup deck>
              <Service
                title="Web Design & Development"
                color="white"
                text={`We are an expert team able to solve potential issues before they even appear. We provide full-stack web development, covering backend, frontend and integrations with various software tools and APIs. 
                We make progressive Web Apps provide users with direct access to your web app right from mobile home screen. Now you are able to deliver sync user experiences across Web and Mobile platforms.
                We guarantee you a site that offers an exclusive user experience, user-friendliness and  extreme functionality. `}
              />
              <Service
                title="Mobile Apps Development"
                color="white"
                text={`Do you have an app idea on mind? Then it is time you visualize it with us and make an awesome app like never before. Our expertise, experience and acquired skills in mobile app development will help you build custom mobile apps at the right price and on the right time at low cost. Our dedicated mobile app developers don't just settle for good until they reach amazing. We invest our time and expertise to ensure your vision comes true. Hire mobile app developers to reap better results and reach new horizons in your business marketplace.`}
              />
            </CardGroup>

            <hr />

            <CardGroup deck>
              <Service
                title="Custome Software Development"
                color="white"
                text={`Productive, engaging and reliable solutions for business outcomes you deserve. Lodestar offers a full spectrum of application design, development, maintenance and support services along with flexibility of engagement models and project scopes.`}
              />
              <Service
                title="GIS Solutions, Projects & Studies"
                color="white"
                text={`A geographic information system is a system designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data. GIS applications are tools that allow users to create interactive queries (user-created searches), analyze spatial information, edit data in maps, and present the results of all these operations.`}
              />
            </CardGroup>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Services;
