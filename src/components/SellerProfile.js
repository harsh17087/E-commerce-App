import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SellerProfileHeader from "./SellerProfileHeader";
import SellerProfileSideNav from "./SellerProfileSideNav";
import { SELLER_API_URL } from "../utils/constant";
const SellerProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   const [shopName, setShopName] = useState("");
  // const handlelogout = () => {
  //   if (window.confirm("You're leaving soon 😥")) {
  //     sessionStorage.clear();
  //     navigate("/seller");
  //   }
  // };
  const [sellerData, setSellerData] = useState({
    _id: null,
    name: "",
    email: "",
  });

  useEffect(() => {
    axios.get(SELLER_API_URL+'/' + id).then((res) => {
      setSellerData(res?.data.data);
    });
  }, []);

  return (
    <div>
      <SellerProfileHeader shopName={sellerData.name} />
      <div className="grid grid-flow-col">
        <div className="col-span-1 h-screen sticky top-4"><SellerProfileSideNav /></div>
        <div className="col-span-11"><Outlet /></div>
        
        
      </div>
    </div>
  );
};

export default SellerProfile;
