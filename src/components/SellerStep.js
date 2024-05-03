import React from "react";

const SellerStep = () => {
  return (
    <>
    <h1 className="text-bold text-4xl p-1 m-2">
      How to sell on CartApp ?
      </h1>
    <div className="flex">
      <div className="grid grid-cols-4 gap-4 m-1 p-1 flex-grow">
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset1._CB406684202_._SY200_.png"
          />
          <h1 className="text-bold text-2xl">STEP 1: Register your account</h1>
          <p className="text-lg">
          Register on CartApp with GST/PAN details and an active bank account
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset3._CB406684197_._SY200_.png"
          />
          <h1 className="text-bold text-2xl">STEP 2: Choose storage & shipping</h1>
          <p className="text-lg">
          Choose storage, packaging, and delivery options
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset2._CB406684202_._SY200_.png"
          />
          <h1 className="text-bold text-2xl">STEP 3: List your products</h1>
          <p className="text-lg">
          List your products by providing product and brand details
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/WhySellonAmazon-SecurePayment-Option4._SL1280_FMpng_.png"
          />
          <h1 className="text-bold text-2xl">STEP 4: Complete orders & get paid</h1>
          <p className="text-lg">
          Deliver orders to customers on time and get paid within 7 days of delivery
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SellerStep;
