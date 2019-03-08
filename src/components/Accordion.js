import React, { Component } from "react";

export default class Accordion extends Component {
  render() {
    const { title, expand, onClick } = this.props;
    return (
      <div>
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title}
          <span style={{ margin: "10px" }} />
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          <p>{this.props.desc}</p>
        </dd>
      </div>
    );
  }
}
