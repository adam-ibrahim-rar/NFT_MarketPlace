import React from "react";

export default function Heading(props) {
  return (
    <div className="space-y-4 text-white">
      <h1 className="text-3xl font-bold">{props.heading}</h1>
      {props.para && <p>{props.para}</p>}
    </div>
  );
}
