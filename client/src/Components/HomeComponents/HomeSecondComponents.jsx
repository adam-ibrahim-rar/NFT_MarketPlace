import React from "react";
import Collection from "../Collection";
import Heading from "../Heading";

export default function HomeSecondComponents() {
  return (
    <div className="text-white space-y-10">
      <Heading
        heading={"Trending Collection"}
        para={"Checkout our weekly updated trending collection."}
      />
      {/* collections */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <Collection results={"1024k+"} />
        <Collection results={"1024k+"} />
        <Collection results={"1024k+"} />
      </div>
    </div>
  );
}
