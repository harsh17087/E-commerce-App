import { useEffect, useState } from "react";
import { API_URL, MY_API_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer";
import ItemCard, { BestSellerProductCard } from "./ItemCard";
import { Link, createBrowserRouter } from "react-router-dom";
import useActiveStatus from "../utils/useActiveStatus.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetItemsQuery } from "../utils/itemAPI.js";
const Body = () => {
  const {data, error, isLoading} = useGetItemsQuery()
  

  const [listOfProducts, setlistOfProducts] = useState([]);
  // Copy of products list for filtering purpose
  const [filteredProducts, setfilteredProducts] = useState([]);

  const [searchText, setsearchText] = useState("");
  const activeStatus = useActiveStatus();
  const BestSellerProduct = BestSellerProductCard(ItemCard);

  const [showFilter,setShowFilter]=useState(true)

  // console.log("Body rendered");

  useEffect(() => {
    fetchData();
    const timer = setTimeout(()=>displaySearch(),200)
    return()=>{
      clearTimeout(timer)
    }
  }, [searchText,data]);
  

  const displaySearch=()=>{
    console.log("API CALL FOR - " + searchText)
  }

  const fetchData = async () => {
    // const data = await fetch(API_URL);   // comes from fake store API
    // const json = await data.json();

    // const data = await fetch(MY_API_URL);
    // const json = await data.json()
    // console.log(json.data)
    
    // setlistOfProducts(json.data);
    // setfilteredProducts(json.data);
    if(!isLoading){
      setlistOfProducts(data?.data)
      setfilteredProducts(data?.data)
    }
  };

  // check online status from useActiveStatus custom hook
  if (activeStatus === false)
    return <h1>You are Offline. Check your internet connection</h1>;

  return (
    <div className="body bg-gradient-to-r from-purple-500 to-pink-500"> 
      <div className="flex justify-between">
        <div className="flex m-2 p-2 items-center">
          <button
            className="p-1 m-1 bg-gray-200 rounded-lg"
            onClick={() => {
              setShowFilter(!showFilter)
              const filteredlist = listOfProducts.filter(
                (res) => res.rating.rate > 4
              );
              // setfilteredProducts(filteredlist);
              if(showFilter){
                setfilteredProducts(filteredlist)
              }else{
                setfilteredProducts(listOfProducts)
              }
            }}
          >
            <span>Top Rated</span>
            {showFilter==true?"":"✅"}
          </button>
        </div>

        <div className="p-1 m-1">
          <input
            type="text"
            placeholder="Backpack"
            className=" p-2 rounded-lg border border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          &nbsp;
          <button
            className="px-4 py-1 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              
              const filteredlist = listOfProducts.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredProducts(filteredlist);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {isLoading?<Shimmer/>: filteredProducts.map((item) => (
          <div
            style={{ textDecoration: "none", color: "black" }}
            key={item._id}
            to={"/items/" + item._id}
          >
            {/* <ItemCard itemData={item}/> */}

            {item.rating.rate > 4.5 ? (
              <BestSellerProduct itemData={item} itemId={item._id} />
            ) : (
              <ItemCard itemData={item} itemId={item._id} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
