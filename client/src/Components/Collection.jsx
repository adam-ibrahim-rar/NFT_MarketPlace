import React from "react";
import img1 from "../Images/img1.jpg";
import User from "./User";
import adam from "../Images/liu.jpg";

export default function Collection(props) {
  return (
    <ul className="space-y-4 w-fit">
      <li>
        <img src={img1} alt="" srcset="" className="rounded-2xl w-90 " />
      </li>
      <li>
        <ul className="flex justify-between  ">
          <li>
            <img src={img1} alt="" srcset="" className="rounded-2xl size-28" />
          </li>
          <li>
            <img src={img1} alt="" srcset="" className="rounded-2xl size-28" />
          </li>
          <li className="rounded-2xl size-28 bg-primary text-2xl text-white items-center flex justify-center">
            {props.results}
          </li>
        </ul>
      </li>
      <li className="space-y-2">
        <h1 className="font-bold text-lg">description</h1>
        <User profileImage={adam} Username={"adam"} UserProfile={"/"} />
      </li>
    </ul>
  );
}
