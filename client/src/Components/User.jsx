import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <Link to={"/" + props.Username}>
      <span className="flex items-center w-fit gap-2 ">
        <img
          src={props.profileImage}
          className="size-7 rounded-full object-cover  "
        />
        <p className="text-lg">{props.Username}</p>
      </span>
    </Link>
  );
}
