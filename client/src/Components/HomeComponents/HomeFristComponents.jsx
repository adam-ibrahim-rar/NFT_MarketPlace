import React from "react";
import { MdRocketLaunch } from "react-icons/md";
import Info from "../Info";
import User from "../User";

import liu from "../../Images/liu.jpg";
import adam from "../../Images/liu.jpg";

export default function HomeFristComponents() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

      <div className="text-white space-y-8">
        <h1 className="text-6xl font-bold leading-tight capitalize">
          Discover digital art & Collect NFTs
        </h1>

        <p className="text-lg leading-8 max-w-lg text-gray-300">
          NFT marketplace UI created with Anima for Figma. Collect, buy and
          sell art from more than 20k NFT artists.
        </p>

        <button
          className="bg-primary hover:bg-hover-btn transition-all
          flex items-center justify-center gap-2
          py-4 px-8 rounded-2xl capitalize cursor-pointer"
        >
          <MdRocketLaunch />
          Get Started
        </button>

        <div className="grid grid-cols-3 pt-4">
          <Info number={240} description="Total Sales" />
          <Info number={100} description="Auctions" />
          <Info number={240} description="Artists" />
        </div>
      </div>

      <div className="bg-card rounded-3xl overflow-hidden max-w-md w-full mx-auto flex flex-col text-white">

        <img
          src={liu}
          alt="NFT"
          className="w-full h-[410px] object-cover"
        />

        <div className="flex-1 p-6 space-y-3">
          <h1 className="text-2xl font-bold">
            Space Walking
          </h1>

          <User
            profileImage={adam}
            Username="Animakid"
            UserProfile="/"
          />
        </div>

      </div>

    </div>
  );
}