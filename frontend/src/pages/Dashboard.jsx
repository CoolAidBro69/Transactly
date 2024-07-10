import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

export const Dashboard = () => {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
            },
          }
        );
        setBalance(res.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBalance(res.data.balance*100);
    } catch (error) {
      console.error("Error fetching balance on button click:", error);
    }
  };

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7"
        >
          Fetch Balance
        </button>
      </div>
    </div>
  );
};
