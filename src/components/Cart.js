import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseCartQuantity,
  decreaseCartQuantity,
  getTotal,
} from "../utils/cartSlice";
// import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //new
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  //new
  console.log(cartItems);
  console.log(totalAmount, totalQuantity);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(increaseCartQuantity(item));
  };

  const handleDecreaseItem = (item) => {
    dispatch(decreaseCartQuantity(item));
  };
  const handleTotalItem = () => {
    dispatch(getTotal());
  };

  return (
    <div className="text-center p-2">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <div className="p-2 m-2">
        {cartItems.length != 0 ? (
          <button onClick={handleClearCart} className="btn btn-danger btn-md">
            Clear cart
          </button>
        ) : (
          <h1 className="text-2xl">Please add some items to your cart</h1>
        )}
      </div>
      <div className="grid grid-flow-col">
        <div className="grid-cols-8">
          {cartItems.map((items) => (
            <div className="space-y-1 border border-black m-2 p-2 w-[800px] h-[150px] bg-slate-200 shadow-lg">
              <div className="">
                <h2 className="font-bold">{items.title}</h2>
                <img
                  className="h-[60px] w-[80px] float-right"
                  src={items.image}
                />
              </div>
              <div>
                <button
                  onClick={() => handleRemoveItem(items)}
                  className="btn btn-outline-primary btn-sm"
                >
                  ❌
                </button>
                <button
                  onClick={() => handleDecreaseItem(items)}
                  className="btn btn-outline-primary btn-sm"
                >
                  ➖
                </button>
                <button
                  onClick={() => handleAddItem(items)}
                  className="btn btn-outline-primary btn-sm"
                >
                  ➕
                </button>
              </div>
              <div className=" space-x-5">
                <span className="font-bold text-xl">No. of Items :</span>
                <span className="font-bold text-xl">{items.cartQuantity}</span>
                <span className="text-xl font-bold">
                  Price : 💲{items.price}
                </span>
                <span className="text-xl font-bold">
                  Total Amount : 💲{items.price * items.cartQuantity}
                </span>
                
                {handleTotalItem()}
                
              </div>
            </div>
          ))}
        </div>
        
        {cartItems.length!=0 && <div className="grid-cols-4 bg-slate-200 shadow-lg rounded-lg h-48">
          <h1 className="text-2xl font-bold bg-green-200 h-12">Cart Summary</h1>
          <h1 className="font-bold p-2 m-2">Total Items Ordered 🛍: {totalQuantity}</h1>
          <h1 className="font-bold p-2 m-2">Total Billing Amount 🤑 : ₹{totalAmount.toFixed(2)}</h1>
          <button className="btn btn-primary w-full p-2">Place Order</button>
          
        </div>
        }
      </div>
    </div>
  );
};

export default Cart;
