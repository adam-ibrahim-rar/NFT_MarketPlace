import React from "react";

export default function Categorie({ url, icon, name }) {
  return (
    <div className="w-1/5  rounded-2xl overflow-hidden bg-card text-white">

      <div className="relative h-[240px] overflow-hidden">

  <div
    style={{ backgroundImage: `url(${url})` }}
    className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110"
  ></div>

  <div className="relative z-10 flex h-full text-2xl items-center justify-center">
    {icon}
  </div>

</div>

<div className="p-5 bg-card">
  <h2 className="font-semibold text-xl">{name}</h2>
</div>
    </div>
  );
}