import React from "react";

export default function FooterLink(props) {
  return (
    <div>
      <li className="list-unstyled">
        <a className="white-text" href={props.link}>
          {props.name}
        </a>
      </li>
    </div>
  );
}
