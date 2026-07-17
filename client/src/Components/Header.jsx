import { Link } from "react-router-dom";
import SingUpBtn from "./SingUpBtn";
import Logo from "./Logo";
export default function Header() {
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
            <SingUpBtn />
          </li>
        </Link>
      </ul>
    </div>
  );
}
