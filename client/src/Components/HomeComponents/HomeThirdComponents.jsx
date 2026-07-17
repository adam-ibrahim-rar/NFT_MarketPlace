import React from "react";
import Heading from "../Heading";
import { MdRocketLaunch } from "react-icons/md";
import HomeSecondComponents from "./HomeSecondComponents";
import Creator from "../Creator";

export default function HomeThirdComponents() {
  const users = [
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
    { number: 1, Username: "adam", Totalsales: "25.44" },
  ];

  return (
    <div className=" space-y-10">
      <div className="flex items-end justify-between ">
        <Heading
          heading={"Top creators"}
          para={"Checkout Top Rated Creators on the NFT Marketplace"}
        />
        <button
          className=" border-3 border-primary text-white hover:bg-hover-btn transition-all
          flex items-center justify-center gap-2
          h-[60px] w-[247px]
           rounded-2xl capitalize cursor-pointer"
        >
          <MdRocketLaunch />
          view ranking
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-10">
        {users.map((user) => (
          <Creator
            number={user.number}
            Username={user.Username}
            Totalsales={user.Totalsales}
          />
        ))}
      </div>
    </div>
  );
}
