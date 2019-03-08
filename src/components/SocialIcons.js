import React from "react";
import { Fa } from "mdbreact";
export default function SocialIcons(props) {
  return (
    <div className="list-inline-item">
      <a href={props.link} target="blank">
        <Fa icon={props.type} className="mr-1" style={{ color: "#ffa000" }} />
      </a>
    </div>
  );
}
