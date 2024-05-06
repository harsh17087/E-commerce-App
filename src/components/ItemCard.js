import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { SELLER_API_URL } from "../utils/constant";
import { useEffect, useState } from "react";

const ItemCard = (props) => {
  // Destructuring
  const { itemData, itemId } = props;
  const { title, price, image, rating, sellerId, stock } = itemData;

  const [shopName, setShopName] = useState("");

  const dispatch = useDispatch();

  const sellerURL = SELLER_API_URL + "/" + sellerId;

  useEffect(() => {
    getShopName();
  });

  const getShopName = () => {
    axios
      .get(sellerURL)
      .then((res) => {
        const shop_name = res?.data.data.name;
        setShopName(shop_name);
      })
      .catch((err) => {});
  };

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
    window.alert("Hurray!! 🎉🎉 Item Added");
  };

  return (
    <div>
      <div className="flex flex-col space-y-2 p-2 m-4 w-[200px] rounded-lg bg-slate-100 hover:bg-slate-300">
        <div className="mx-auto">
          <span className="text-red-800 font-bold">
            {stock == "outstock" && "Oops ❗❗ Out Of Stock"}
          </span>
        </div>
        <img className="w-[200px] h-[200px] rounded-lg" src={image}></img>

        <h5 className="font-bold m-2 text-center">{title}</h5>
        <p className=" font-bold text-red-400">₹ {price}</p>
        <div className="flex space-x-12">
          <span>{rating.rate} ⭐</span>
          <span>{rating.count} 👨‍👩‍👦‍👦</span>
        </div>
        <br />
        <div className="flex space-x-2 m-2">
          {stock == "instock" ? (
            <button
              onClick={() => handleAddItem(itemData)}
              className="btn btn-outline-primary btn-sm"
            >
              Add➕
            </button>
          ) : (
            <button
              disabled
              onClick={() => handleAddItem(itemData)}
              className="btn btn-outline-primary btn-sm"
            >
              Add➕
            </button>
          )}
          <Link
            className="text-green-500 hover:underline"
            to={"/products/" + itemId}
          >
            Show more...
          </Link>
        </div>
        <div>
          <span>
            Sold by 🛍{" "}
            <b className="font-bold ">
              {shopName.charAt(0).toUpperCase() + shopName.slice(1)}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

// Best Seller Products

export const BestSellerProductCard = (props) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
          Best Seller
        </label>
        <ItemCard {...props} />
      </div>
    );
  };
};

export default ItemCard;
