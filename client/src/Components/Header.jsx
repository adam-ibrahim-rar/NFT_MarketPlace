import { Link } from "react-router-dom";
import { useState } from "react";
import SingUpBtn from "./SingUpBtn";
import Logo from "./Logo";
import {MdOutlinePerson } from "react-icons/md"
export default function Header() {
  const [isLogin, setLogin] = useState(false);
  // const [username, setUsername] = useState("");
  return (
    <div
      className="my-2 p-2 flex justify-between flex-col sm:flex-row sm:mx-auto
sm:w-6xl text-white items-center "
    >
      <Logo />

      <ul className="flex gap-5 items-center ">
        <Link to="/MarketPlace">
          <li>MarketPlace</li>
        </Link>
        <Link to="/Ranking">
          <li>Ranking</li>
        </Link>
        <Link to="/SingUp">
          <li>
           {isLogin? <SingUpBtn text={username}/> :<SingUpBtn icon={MdOutlinePerson } text={"Sign Up"}/>} 
          </li>
        </Link>
      </ul>
    </div>
  );
}
