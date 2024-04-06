import { useEffect, useState } from "react"
import {API_URL} from "../utils/constant.js"
import Shimmer from "./Shimmer"
import ItemCard, { BestSellerProductCard } from "./ItemCard"
import {Link, createBrowserRouter} from "react-router-dom"
import useActiveStatus from "../utils/useActiveStatus.js"
import 'bootstrap/dist/css/bootstrap.min.css'

const Body = ()=>{
    
    const [listOfProducts,setlistOfProducts] = useState([])
    // Copy of products list for filtering purpose 
    const [filteredProducts,setfilteredProducts] = useState([])

    const [searchText,setsearchText] = useState("")
    const activeStatus = useActiveStatus()
    const BestSellerProduct = BestSellerProductCard(ItemCard)


    console.log("Body rendered")
    

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch(API_URL)
        const json = await data.json()
        console.log(json)
        setlistOfProducts(json)
        setfilteredProducts(json)
    }

    if(listOfProducts.length===0){
        return <Shimmer/>
    }

    // check online status from useActiveStatus custom hook
    if(activeStatus===false)return <h1>You are Offline. Check your internet connection</h1>

    return (
        <div className="body">
            <div className="flex justify-between">
                <div className="flex m-2 p-2 items-center">
                <button className="p-1 m-1 bg-green-300 rounded-lg" onClick={()=>{
                const filteredlist=listOfProducts.filter((res)=>res.rating.rate>4)
                setfilteredProducts(filteredlist)
                }}>Top Rated Products </button>
                </div>
            
            
            <div className="p-1 m-1">
                <input 
                type="text"
                placeholder="Backpack" 
                className="border border-black" 
                value={searchText} 
                onChange={(e)=> {setsearchText(e.target.value)}}
                ></input>&nbsp;
                <button className="px-4 py-1 bg-green-300 m-4 rounded-lg"
                    onClick={()=>{
                    const filteredlist = listOfProducts.filter((res)=>res.title.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredProducts(filteredlist)
                }}>Search</button>
            </div>
            </div>
            
            


            <div className="flex flex-wrap">
                {
                    filteredProducts.map(item => 
                    <div style={{textDecoration:"none",color:"black"}} key={item.id} to={'/products/' + item.id}>
                        {/* <ItemCard itemData={item}/> */}

                        {item.rating.rate>4.5 ? <BestSellerProduct itemData={item}/> : <ItemCard itemData={item} itemId={item.id}/>}
                    </div>
                    )
                }
                
            </div>
        </div>
    )
}
export default Body