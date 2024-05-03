import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const SellerProfileHeader = ({ shopName }) => {
  
  const navigate = useNavigate()
  const handlelogout = () => {
    if (window.confirm("You're leaving soon 😥")) {
      sessionStorage.clear();
      navigate("/seller");
    }
  };

  shopName = shopName.charAt(0).toUpperCase() + shopName.slice(1);
  const getDate = () => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][todayMonth];
    const year = today.getFullYear();

    return `${todayDate} ${month}, ${year}`;
  };

  return (
    <div className="bg-[#e285f2]">
      <div className="grid grid-flow-col">
        <div className="flex items-center col-span-2">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa?rs=1&pid=ImgDetMain"
            alt="cart-app logo"
            className="m-1 h-10 rounded-full shadow-lg"
          />
          <h3 className="font-bold text-xl">CartApp</h3>
        </div>
        <div className=" col-span-4 flex p-1 m-3 rounded-lg w-full h-12">
          
        </div>
        <div className=" col-span-6 m-1 grid grid-cols-2 items-center">
          <div className="mx-auto">
            <div>
              <h1 className="font-bold text-lg text-green-900">{getDate()}</h1>
            </div>
          </div>
          <div className="grid grid-flow-col">
            <div className="grid-cols-10 flex items-center space-x-2">
              <div>
                <h1 className="font-bold text-xl">{shopName}</h1>
              </div>
              <img
                src="https://t3.ftcdn.net/jpg/02/93/94/66/360_F_293946613_xowWOMY3AWlVVXeQtZxvmJYBr3wReYUR.jpg"
                alt="shop-logo"
                className="flex items-center h-10 rounded-full"
              />
            </div>
            <div className="grid-cols-2">
            <button
              className="mx-4 btn btn-danger btn-sm float-right"
              type="button"
              onClick={() => handlelogout()}
            >
              <LogoutIcon />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileHeader;
