import React from "react";
import { MdOutlinePerson } from "react-icons/md";

export default function SingUpBtn() {
  return (
    <button className="bg-primary hover:bg-hover-btn cursor-pointer p-2 rounded-2xl flex items-center gap-2">
  <MdOutlinePerson />
  Sign Up
</button>
  );
}
