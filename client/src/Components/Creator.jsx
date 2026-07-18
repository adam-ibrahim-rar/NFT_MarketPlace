import React from "react";
import liu from "../Images/liu.jpg";
import { Link } from "react-router-dom";
export default function Creator(props) {
  return (
    <Link to={"/"+props.Usernameser}>
      <div className="h-[260px] w-[300px] bg-card rounded-3xl p-3 relative flex flex-col justify-around items-center">
        <p className="h-[40px] w-[40px] bg-background absolute  top-4 left-3 rounded-full text-secondary  text-lg flex items-center justify-center">
          {props.number}
        </p>
        <img src={liu} alt="" className="h-[120px] w-[120px] rounded-full " />

        <span className="text-lg h-[58px]  text-center text-white space-y-1">
          <h1 className="font-bold">{props.Username}</h1>
          <p>
            <span className="text-secondary">Total sales:</span>
            <span className="h-[22px] ">{" " + props.Totalsales} ETH</span>
          </p>
        </span>
      </div>
    </Link>
  );
}
