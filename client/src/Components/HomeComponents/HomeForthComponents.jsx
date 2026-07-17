import React from "react";
import Heading from "../Heading";
import Categorie from "../Categorie";
import liu from "../../Images/liu.jpg"
import { FaAffiliatetheme } from "react-icons/fa";
import { RiSpaceShip2Line } from "react-icons/ri";

export default function HomeForthComponents() {
  const Categories = [
        { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <FaAffiliatetheme /> },
    { name: "Art", url:liu , icon: <RiSpaceShip2Line />
 },


  ];

  return (
    <div className="p-4 space-y-10">
      <Heading heading="Browse Categories" />

      <div className="flex flex-wrap justify-around gap-10 ">
        {Categories.map((category, index) => (
          <Categorie
            key={index}
            name={category.name}
            url={category.url}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
}