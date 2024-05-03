import React from "react";

const SellerReason = () => {
  return (
    <div>
      <h1 className="text-bold text-4xl p-1 m-2">
        Why sellers choose CartApp ?
      </h1>
      <div className="grid grid-cols-4 gap-4 m-1 p-1 h-24">
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-12 w-12"
            src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Business_Growth._CB424651247_.svg"
          />
          <h1 className="text-bold text-2xl">5.1K +</h1>
          <p className="text-lg">
            5.1K+ sellers became crorepatis in 2022. You could be next.
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-12 w-12"
            src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/icon-plus/home_services.png"
          />
          <h1 className="text-bold text-2xl">Ease of Starting</h1>
          <p className="text-lg">
            From product photography to hassle free delivery & returns
            management, Amazon has a solution for you
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-12 w-12"
            src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/icon-plus/customer_growth.png"
          />
          <h1 className="text-bold text-2xl">Crores of Customers</h1>
          <p className="text-lg">
            Reach crores of customers on Amazon.in, India's most visited
            shopping destination.
          </p>
        </div>
        <div className="shadow-md rounded-lg p-1 m-1">
          <img
            className="h-12 w-12"
            src="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/icon-plus/paid_service_rupee.png"
          />
          <h1 className="text-bold text-2xl">Secure Timely Payments</h1>
          <p className="text-lg">
            Funds are deposited directly to your bank account every 7 days,
            including for Pay on Delivery order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerReason;
