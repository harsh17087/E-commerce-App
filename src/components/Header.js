import  {Link}  from "react-router-dom"
import useActiveStatus from "../utils/useActiveStatus.js"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
const Header= ()=>{
    
    const activeStatus=useActiveStatus()
    const cartItems = useSelector((store)=>store.cart.items)

    // Subscribing to the cart store
    return(
        <div className=" h-[80px] flex justify-between mb-2 shadow-md bg-gray-200">
            <div className="flex items-center">
                <img className="w-20 rounded-full m-2" src="https://tse2.mm.bing.net/th/id/OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa?rs=1&pid=ImgDetMain"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 text-xl ">{activeStatus?"Online🟢":"Offline🔴"}</li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner "><Link to='/'>Shop</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/seller'>Seller</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/about'>About</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4 text-2xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link className="font-bold" to='/cart'>🛒{cartItems.length}</Link></li>
                    <li className="px-4 rounded-lg hover:bg-green-200 hover:shadow-inner group  relative dropdown  cursor-pointer  tracking-wide">
                        <PersonIcon/><ArrowDropDownIcon/>
                        <div class="group-hover:block dropdown-menu absolute hidden h-auto rounded-lg">
                        <ul class="bg-white w-32">
                            <Link><li class="px-1 hover:bg-slate-300 hover:font-bold">Your Profile</li></Link>
                            <Link><li class="px-1 py-1 hover:bg-slate-300 hover:font-bold">Order History</li></Link>
                            <Link><li class="px-1 py-1 hover:bg-slate-300 hover:font-bold">Logout</li></Link>
                        </ul>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header