import React from "react";
import Counter from "../components/Counter";
import { Container, Row } from "mdbreact";

export default function Counters() {
  return (
    <section id="counter" className="text-center my-5 justify-content-center">
      <h1>Lodestar Statistics</h1>
      <Container className="d-flex ">
        <Row center="true">
          <Counter
            key={1}
            image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Line Of Code"
            start={0}
            end={50000}
            icon="fa fa-code fa-4x"
          />
          <Counter
            key={2}
            title="Cup Of Coffee"
            start={0}
            end={800}
            icon="fa fa-coffee fa-4x"
            image="https://images.pexels.com/photos/33972/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Counter
            key={3}
            title="Day Of Work"
            start={0}
            end={90}
            icon="fa fa-calendar fa-4x"
            image="https://images.pexels.com/photos/862731/pexels-photo-862731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Counter
            key={4}
            title="Clients"
            start={0}
            end={4}
            icon="fa fa-briefcase fa-4x"
            image="https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </Row>
      </Container>
    </section>
  );
}
