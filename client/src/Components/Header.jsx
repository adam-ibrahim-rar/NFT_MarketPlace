import { Link } from "react-router-dom";
import { RiStore3Line } from "react-icons/ri";
import SingUpBtn from "./SingUpBtn";
export default function Header() {
  return (
    <div className="p-2 flex justify-around text-white items-center">
      <Link to="/" className="flex items-center gap-2 w-xs">
        <RiStore3Line className="text-primary text-4xl" />
        <h1>NFT Marketplace</h1>
      </Link>
      <ul className="flex gap-5 items-center ">
        <Link to="/MarketPlace">
          <li>MarketPlace</li>
        </Link>
        <Link to="/Ranking">
          <li>Ranking</li>
        </Link>
        <Link to="/SingUp">
          <li>
            <SingUpBtn/>
          </li>
        </Link>
      </ul>
    </div>
  );
}
