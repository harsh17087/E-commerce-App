import React from "react";
import { useRef } from "react";
import SellerLogin from "./SellerLogin";
import SellerReason from "./SellerReason";
import SellerStep from "./SellerStep";

const Seller = () => {
  const ref = useRef(null)
  const handleScroll=()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  
  return (
    <div className="inline-grid">
      <img src="https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg" />
      <div className="absolute grid grid-cols-2 gap-2 top-0 left-0 m-12 p-4">
        <div className="mt-[30%]">
          <img
            src="https://m.media-amazon.com/images/G/31/amazonservices/New_PRO.webp"
            alt="seller-logo"
          />
        </div>
        <div ref={ref} className="mt-[30%]">
           <SellerLogin />
        </div>
      </div>
      <div className="h-64 my-2">
        <SellerReason />
      </div>
      <div className=" my-2">
        <SellerStep />
      </div>
      <div className=" p-1 flex items-center bg-[#36adcf] rounded-lg">
        <div className="p-2 m-2 space-y-3">
          <h1 className=" font-bold text-3xl">Start your seller journey with CartApp</h1>
          <h1 className="text-xl">Join our family of 14 Lakh+ businesses who sell on CartApp</h1>
          <button className="p-2 m-2 h-14 w-38 bg-violet-700 rounded-full" type="button" onClick={handleScroll}><h1 className=" text-xl">Sign Up Now</h1></button>
        </div>
        <img className="h-96" src="https://m.media-amazon.com/images/G/31/selldot/Images/Shipping-illisutration-with-eauto.webp"/>
      </div>
    </div>
  );
};

export default Seller;
