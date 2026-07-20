import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLogout } from "react-icons/sl";

import bg from "../Images/bg.jpg";
import SingUpBtn from "../Components/SingUpBtn";
import { RiProfileLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Info(props) {
  return (
    <span
      className={`flex justify-center gap-2  items-center ${props.className} `}
    >
      {props.icon && <props.icon />}
      {props.text}
    </span>
  );
}
export default function Profile() {
  const navigate = useNavigate();
  const { setUser, setLogin } = useContext(AuthContext);

  const [user, setuser] = useState(null);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("/api/profile", {
          withCredentials: true,
        });
        setuser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response?.data?.message);

        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    };

    getProfile();
  }, [navigate]);
  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/logout");
      localStorage.removeItem("user");
      setUser(null);
      setLogin(false);
    } catch (error) {
      console.log(res.error.data.message);
    }
    navigate("/");
  };
  return (
    <div className="w-6xl mx-auto flex-col flex items-center relative py-4  ">
      <img src={bg} className="h-[370px] w-full object-cover rounded-4xl " />
      {user && (
        <span
          className="  absolute top-20 hover:opacity-100 
          opacity-90 text-2xl font-medium transition-all 
         flex flex-col items-center
          text-white gap-3 bg-background p-4 rounded-4xl "
        >
          <Info
            icon={RiProfileLine}
            text={"Profile"}
            className={"border-b-2 border-b-primary"}
          />

          <Info icon={CgProfile} text={user.username} />
          <Info icon={MdOutlineMailOutline} text={user.email} />
          <SingUpBtn
            icon={SlLogout}
            text={"Logout"}
            className={"w-30"}
            onClick={handleLogout}
          />
        </span>
      )}
    </div>
  );
}
