import React from 'react'
import { RiStore3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
    <span className="text-xl  flex items-center gap-2 w-xs justify-center sm:justify-start ">
     <RiStore3Line className="text-primary text-4xl" />
        <h1>NFT Marketplace</h1> 
    </span>
      </Link>
  )
}
