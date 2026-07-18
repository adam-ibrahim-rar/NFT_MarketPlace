import { useEffect, useState } from "react";
import Heading from "../Heading";
import { MdRocketLaunch } from "react-icons/md";
import Creator from "../Creator";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeThirdComponents() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <Heading
          heading="Top creators"
          para="Checkout Top Rated Creators on the NFT Marketplace"
        />

        <Link to="/Ranking">
          <button className="border-3 border-primary text-white hover:bg-hover-btn transition-all flex items-center justify-center gap-2 h-[60px] w-[247px] rounded-2xl capitalize cursor-pointer">
            <MdRocketLaunch />
            View ranking
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-around gap-10">
        {users.length ?
          users.map((user, index) => (
            <Creator
              key={user._id}
              Totalsales={user.Totalsales}
              Username={user.username}
              Email={user.email}
              number={index + 1}
            />
          )): <div className="text-white text-3xl font-bold border-2 border-primary w-full text-center p-3 rounded-4xl">
            no users yet
          </div>
          }
      </div>
    </div>
  );
}
