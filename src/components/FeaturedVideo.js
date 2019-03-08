import React, { Component } from "react";
import { Iframe } from "mdbreact";

export default class Counter extends Component {
  render() {
    return (
      <Iframe
        id="myId"
        src="https://www.youtube.com/embed/8vjKC5eidg8?autoplay=1&mute=1&enablejsapi=1"
      />
    );
  }
}
