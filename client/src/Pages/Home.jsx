import React from "react";
import HomeFristComponents from "../Components/HomeComponents/HomeFristComponents";
import HomeSecondComponents from "../Components/HomeComponents/HomeSecondComponents";
import HomeThirdComponents from "../Components/HomeComponents/HomeThirdComponents";
import HomeForthComponents from "../Components/HomeComponents/HomeForthComponents";
export default function Home() {
  return (
    
   <div className="sm:w-6xl sm:mx-auto  my-16 space-y-14" >
    <HomeFristComponents/>
    <HomeSecondComponents/>
    <HomeThirdComponents/>
    <HomeForthComponents/>
   </div>
  );
}
