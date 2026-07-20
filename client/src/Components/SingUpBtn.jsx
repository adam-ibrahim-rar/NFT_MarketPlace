import React from "react";
import { MdOutlinePerson } from "react-icons/md";

export default function SingUpBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className={`capitalize bg-primary hover:bg-hover-btn cursor-pointer p-2 rounded-2xl flex items-center gap-2 ${props.className}`}
    >
      {props.icon && <props.icon />}
      {props.text}
    </button>
  );
}
