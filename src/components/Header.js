import  {Link}  from "react-router-dom"
import useActiveStatus from "../utils/useActiveStatus.js"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react"
const Header= ()=>{
    
    const activeStatus=useActiveStatus()
    const cartItems = useSelector((store)=>store.cart.items)

    // Subscribing to the cart store
    return(
        <div className="flex justify-between mb-2 shadow-md bg-gray-200">
            <div className="flex items-center">
                <img className="w-20 rounded-full m-2" src="https://tse2.mm.bing.net/th/id/OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa?rs=1&pid=ImgDetMain"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-xl">Online {activeStatus?"🟢":"🔴"}</li>
                    <li className="px-4 text-xl"><Link to=''>Home</Link></li>
                    <li className="px-4 text-xl"><Link to='/about'>About</Link></li>
                    <li className="px-4 text-xl"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4 text-2xl"><Link className="font-bold" to='/cart'>🛒{cartItems.length}</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header