import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div className=" bg-background-second">
      {/* 1st */}
      <div className="flex  gap-4 w-6xl mx-auto py-4">
        <ul className="text-lg  flex flex-col gap-4 text-secondary">
          <li className="text-white">
            <Logo />
          </li>
          <li className="">NFT marketplace UI created with Anima for Figma.</li>
          <li>
            <span>Join our community</span>
          </li>
          <li className="flex gap-2 text-xl ">
            <Link to="/">
              <BsGithub />
            </Link>
            <Link to="/">
              <RiWhatsappLine />
            </Link>
            <Link to="/">
              <CiFacebook />
            </Link>
            <Link to="/">
              <IoLogoInstagram />
            </Link>
          </li>
        </ul>
        {/* 2nd */}
        <ul className="text-lg  flex flex-col gap-4 text-secondary">
          <li className="text-white">Explore</li>
          <li>NFT marketplace UI created with Anima for Figma.</li>
          <li>marketplace</li>
          <li>ranking</li>
        </ul>
        {/* 3rd */}
        <ul className="text-lg  flex flex-col gap-4 text-secondary">
          <li className="text-white">Join our weekly digest</li>
          <li className="">NFT marketplace UI created with Anima for Figma.</li>
          <li>Get exclusive promotions & updates straight to your inbox. </li>
          <li>
            <form
              onSubmit={handleSubmit}
              className="flex justify-between bg-white w-fit rounded-2xl h-12 w-sm"
            >
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="placeholder:text-black pl-4 box-border  w-xl
               outline-none  "
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-hover-btn cursor-pointer px-2 rounded-2xl text-white"
              >
                subecribe
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
