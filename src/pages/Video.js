import React from "react";
import { Container } from "mdbreact";
import FeaturedVideo from "../components/FeaturedVideo";
export default function Video() {
  return (
    <Container id="news">
      <h1>Latest news of learning courses at lodestar</h1>
      <FeaturedVideo />
    </Container>
  );
}
